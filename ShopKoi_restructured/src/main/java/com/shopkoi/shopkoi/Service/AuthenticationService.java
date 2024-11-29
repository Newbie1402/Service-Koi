package com.shopkoi.shopkoi.Service;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import com.shopkoi.shopkoi.dto.AuthenticationRequest;
import com.shopkoi.shopkoi.dto.IntrospectRequest;
import com.shopkoi.shopkoi.dto.LogoutRequest;
import com.shopkoi.shopkoi.dto.RefreshTokenRequest;
import com.shopkoi.shopkoi.dto.response.AuthenticationResponse;
import com.shopkoi.shopkoi.dto.response.IntrospectResponse;
import com.shopkoi.shopkoi.model.entity.Customer;
import com.shopkoi.shopkoi.model.entity.InvalidateToken;
import com.shopkoi.shopkoi.model.entity.Staff;
import com.shopkoi.shopkoi.repository.CustomerRepository;
import com.shopkoi.shopkoi.repository.InvalidateRepository;
import com.shopkoi.shopkoi.repository.StaffRepository;
import lombok.experimental.NonFinal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

@Service
public class AuthenticationService {

    private static final Logger log = LoggerFactory.getLogger(AuthenticationService.class);
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private InvalidateRepository invalidateRepository;

    @Value("${jwt.refreshable-duration}")
    @NonFinal
    protected Long refreshDuration;

    @Value("${jwt.valid-duration}")
    @NonFinal
    protected Long validDuration;

    public AuthenticationResponse authenticateStaff(AuthenticationRequest authenticationRequest) throws JOSEException {
        var staffemail = staffRepository.findByStaffemail(authenticationRequest.getEmail()).orElse(null);

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        boolean authenticated = passwordEncoder.matches(authenticationRequest.getPassword(), staffemail.getStaffpassword());

        if (!authenticated) {
            throw new JOSEException("Invalid password");
        }
        var token = generateToken(authenticationRequest.getEmail(),staffemail.getRightstaff());

        return AuthenticationResponse.builder()
                .Id(staffemail.getId())
                .Name(staffemail.getStaffname())
                .Email(staffemail.getStaffemail())
                .Phone(staffemail.getStaffphone())
                .token(token)
                .imgpath(staffemail.getProfilephoto())
                .build();
    }

    public AuthenticationResponse authenticateCustomer(AuthenticationRequest authenticationRequest) throws JOSEException {
        var customeremail = customerRepository.findByEmail(authenticationRequest.getEmail()).orElse(null);

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        boolean authenticated = passwordEncoder.matches(authenticationRequest.getPassword(), customeremail.getPassword());

        if (!authenticated) {
            throw new JOSEException("Invalid password");
        }
        var token = generateToken(authenticationRequest.getEmail(), customeremail.getRightcustomer());

        return AuthenticationResponse.builder()
                .Id(customeremail.getId())
                .Name(customeremail.getFirstname())
                .Email(customeremail.getEmail())
                .Address(customeremail.getAddress())
                .Phone(customeremail.getPhone())
                .token(token)
                .build();
    }

    @NonFinal
    protected static final String SIGNER_KEY = "bJAlGYJC+G5iUfD2OQv6u0fWXOeV67Dz0uz+O9BIlgOA1At7QEp/Zh9eqXUUoU+K\n";

    private String generateToken(String email, Right right) throws JOSEException {
        JWSHeader jwsHeader = new JWSHeader(JWSAlgorithm.HS512);

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(email)
                .issuer("ShopKoi.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(validDuration, ChronoUnit.MINUTES).toEpochMilli()
                ))
                .jwtID(UUID.randomUUID().toString())
                .claim("scope", right)
                .build();

        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject= new JWSObject(jwsHeader, payload);

        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("Cannot create token", e);
            throw new RuntimeException(e);
        }
    }

    public IntrospectResponse introspectCustomer(IntrospectRequest introspectRequest) throws JOSEException, ParseException {
       {
            var token = introspectRequest.getToken();
            boolean isValid = true;

            try {
                verifyToken(token,false);
            } catch (Exception e) {
                isValid = false;
            }

            return IntrospectResponse.builder()
                    .valid(isValid)
                    .build();
        }
    }

    public IntrospectResponse introspectStaff(IntrospectRequest introspectRequest) throws JOSEException, ParseException {
        var token = introspectRequest.getToken();
        try {
            verifyToken(token,false);
        }
        catch (Exception e) {
            return  IntrospectResponse.builder()
                    .valid(false)
                    .build();
        }
        return  IntrospectResponse.builder()
                .valid(true)
                .build();

    }

    private SignedJWT verifyToken(String token, boolean isRefresh) throws JOSEException, ParseException {
        JWSVerifier verifier = new MACVerifier(SIGNER_KEY.getBytes());
        SignedJWT signedJWT = SignedJWT.parse(token);

        Date expityTime = (isRefresh)
                ? new Date(signedJWT.getJWTClaimsSet().getIssueTime().toInstant().plus(refreshDuration, ChronoUnit.MINUTES).toEpochMilli())

                : signedJWT.getJWTClaimsSet().getExpirationTime();

        var verified = signedJWT.verify(verifier);

        if(!verified && expityTime.after(new Date())) {
            throw new JOSEException("Invalid token");
        }

        if (invalidateRepository.existsById(signedJWT.getJWTClaimsSet().getJWTID())){
            throw new JOSEException("Invalid token");
        }
        return signedJWT;
    }

    public void logout(LogoutRequest logoutRequest) throws ParseException, JOSEException {

        try {
            var signToken = verifyToken(logoutRequest.getToken(), true);

            String jid = signToken.getJWTClaimsSet().getJWTID();
            Date expityTime = signToken.getJWTClaimsSet().getExpirationTime();

            InvalidateToken invalidateToken = InvalidateToken.builder()
                    .id(jid)
                    .experiedTime(expityTime)
                    .build();

            invalidateRepository.save(invalidateToken);
        }catch (Exception e) {
            log.info("Invalid token");
        }
    }

    public AuthenticationResponse refreshToken(RefreshTokenRequest request)
            throws Exception {
        var signedJWT = verifyToken(request.getToken(),true);

        var jit = signedJWT.getJWTClaimsSet().getJWTID();
        var expiryTime = signedJWT.getJWTClaimsSet().getExpirationTime();

        InvalidateToken invalidatedToken = InvalidateToken.builder()
                .id(jit)
                .experiedTime(expiryTime)
                .build();

        invalidateRepository.save(invalidatedToken);

        var customeremail = signedJWT.getJWTClaimsSet().getSubject();

        var customer = customerRepository.findByEmail(customeremail).orElseThrow(
                () -> new Exception()
        );

        var token = generateToken(customer.getEmail(),customer.getRightcustomer());

        return AuthenticationResponse.builder()
                .token(token)
                .Id(customer.getId())
                .Name(customer.getFirstname())
                .Email(customer.getEmail())
                .Address(customer.getAddress())
                .Phone(customer.getPhone())
                .build();
    }

    public Customer CurrentUser(String token) throws JOSEException, ParseException {
        JWSVerifier verifier = new MACVerifier(SIGNER_KEY.getBytes());
        SignedJWT signedJWT = SignedJWT.parse(token);
        String customerEmail = signedJWT.getJWTClaimsSet().getSubject();

        // Tìm kiếm khách hàng dựa trên email
        Optional<Customer> customerOptional = customerRepository.findByEmail(customerEmail);

        // Nếu không tìm thấy, ném ngoại lệ
        return customerOptional.orElseThrow(() -> new NoSuchElementException("Customer not found with email: " + customerEmail));
    }

}
