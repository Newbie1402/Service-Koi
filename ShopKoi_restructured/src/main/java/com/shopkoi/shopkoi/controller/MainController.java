package com.shopkoi.shopkoi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
public class MainController {

    @GetMapping("/home")
    public ResponseEntity<String> showHomePage() {
        return ResponseEntity.ok("Welcome to ShopKoi Home Page");
    }

}

