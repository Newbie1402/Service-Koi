package com.shopkoi.shopkoi.exception;

public enum ErrorCode {

    // General errors
    INTERNAL_SERVER_ERROR("ERR_500", "Internal server error"),
    BAD_REQUEST("ERR_400", "Bad request"),
    UNAUTHORIZED("ERR_401", "Unauthorized access"),
    FORBIDDEN("ERR_403", "Forbidden access"),
    NOT_FOUND("ERR_404", "Resource not found"),

    // Authentication & Authorization errors
    AUTHENTICATION_FAILED("AUTH_001", "Authentication failed"),
    ACCESS_DENIED("AUTH_002", "Access denied"),

    // User-related errors
    USER_NOT_FOUND("USER_001", "User not found"),
    USER_ALREADY_EXISTS("USER_002", "User already exists"),
    INVALID_USER_DETAILS("USER_003", "Invalid user details"),

    // Booking-related errors
    BOOKING_NOT_FOUND("BOOKING_001", "Booking not found"),
    BOOKING_ALREADY_EXISTS("BOOKING_002", "Booking already exists"),
    INVALID_BOOKING_DETAILS("BOOKING_003", "Invalid booking details"),

    // Vet-related errors
    VET_NOT_FOUND("VET_001", "Vet not found"),
    VET_UNAVAILABLE("VET_002", "Vet is unavailable"),

    // Service-related errors
    SERVICE_NOT_FOUND("SERVICE_001", "Service not found"),
    SERVICE_UNAVAILABLE("SERVICE_002", "Service is unavailable"),

    // Customer-related errors
    CUSTOMER_NOT_FOUND("CUSTOMER_001", "Customer not found"),
    INVALID_CUSTOMER_DETAILS("CUSTOMER_002", "Invalid customer details");

    private final String code;
    private final String message;

    ErrorCode(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public class ErrorResponse {
        private String code;
        private String message;

        // Constructor để tạo ErrorResponse từ ErrorCode
        public ErrorResponse(ErrorCode errorCode) {
            this.code = errorCode.getCode();
            this.message = errorCode.getMessage();
        }

        // Getters và setters
        public String getCode() {
            return code;
        }

        public void setCode(String code) {
            this.code = code;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
