package com.shopkoi.shopkoi.controller;

import com.nimbusds.jose.JOSEException;
import com.shopkoi.shopkoi.Service.AuthenticationService;
import com.shopkoi.shopkoi.dto.AuthenticationRequest;
import com.shopkoi.shopkoi.dto.IntrospectRequest;
import com.shopkoi.shopkoi.dto.LogoutRequest;
import com.shopkoi.shopkoi.dto.RefreshTokenRequest;
import com.shopkoi.shopkoi.dto.response.AuthenticationResponse;
import com.shopkoi.shopkoi.dto.response.IntrospectResponse;
import com.shopkoi.shopkoi.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;



    @PostMapping("/login-staff")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            AuthenticationResponse response = authenticationService.authenticateStaff(authenticationRequest);
            return ResponseEntity.ok(response); // Trả về response với token
        } catch (JOSEException e) {
            // Nếu xảy ra lỗi, có thể là do thông tin xác thực không hợp lệ
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(AuthenticationResponse.builder()
                            .token(null)
                            .build());
        } catch (Exception e) {
            // Xử lý ngoại lệ khác nếu cần thiết
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(AuthenticationResponse.builder()

                            .token(null)
                            .build());
        }
    }

    @PostMapping("/login-customer")
    public ResponseEntity<AuthenticationResponse> authenticateCustomer(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            // Gọi phương thức authenticateCustomer từ AuthenticationService để xác thực và lấy thông tin khách hàng
            AuthenticationResponse response = authenticationService.authenticateCustomer(authenticationRequest);
            return ResponseEntity.ok(response); // Trả về response với token và thông tin khách hàng
        } catch (JOSEException e) {
            // Xử lý ngoại lệ do thông tin xác thực không hợp lệ
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(AuthenticationResponse.builder()

                            .token(null)
                            .build());
        } catch (Exception e) {
            // Xử lý các ngoại lệ khác nếu cần thiết
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(AuthenticationResponse.builder()

                            .token(null)
                            .build());
        }
    }


    //kiem tra tinh valid cua token
    @PostMapping("/introspect-customer")
    public ResponseEntity<IntrospectResponse> introspect(@RequestBody IntrospectRequest introspectRequest) throws ParseException, JOSEException {
        var result = authenticationService.introspectCustomer(introspectRequest);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/introspect-staff")
    public ResponseEntity<IntrospectResponse> introspectstaff(@RequestBody IntrospectRequest introspectRequest) throws ParseException, JOSEException {
        var result = authenticationService.introspectStaff(introspectRequest);
        return ResponseEntity.ok(result);
    }



//    // Endpoint logout cho staff
//    @PostMapping("/logout-staff")
//    public ResponseEntity<String> logoutStaff() {
//        // Xóa thông tin xác thực trong SecurityContext dành cho staff
//        SecurityContextHolder.clearContext();
//        return ResponseEntity.status(HttpStatus.OK).body("Staff logout successful");
//    }
//
//    // Endpoint logout cho customer
//    @PostMapping("/logout-customer")
//    public ResponseEntity<String> logoutCustomer() {
//        // Xóa thông tin xác thực trong SecurityContext dành cho customer
//        SecurityContextHolder.clearContext();
//        return ResponseEntity.status(HttpStatus.OK).body("Customer logout successful");
//    }

    @PostMapping("/logout-customer")
    public ResponseEntity<Void> logoutCustomer(@RequestBody LogoutRequest logoutRequest) throws ParseException, JOSEException {
        authenticationService.logout(logoutRequest);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/logout-staff")
    public ResponseEntity<Void> logoutStaff(@RequestBody LogoutRequest logoutRequest) throws ParseException, JOSEException {
        authenticationService.logout(logoutRequest);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/refreshtoken")
    public ResponseEntity<AuthenticationResponse> refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) throws Exception {
        var result = authenticationService.refreshToken(refreshTokenRequest);
        return ResponseEntity.ok(result);
    };







}
