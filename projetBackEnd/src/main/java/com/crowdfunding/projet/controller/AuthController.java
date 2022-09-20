package com.crowdfunding.projet.controller;


import com.crowdfunding.projet.entity.Users;
import com.crowdfunding.projet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.Serializable;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping("/loop/auth")
public class AuthController {

    @Autowired
    UserRepository userRepository;
//    @Autowired
//    RoleRepository roleRepository;

    @PostMapping("/signin")
    public Users authenticateUser(@Valid @RequestBody Users userDetails) {

        Users user = userRepository.findByEmail(userDetails.getEmail());

        if (user != null) {
            System.out.println(user.toString());

            if (user.getEmail().equals(userDetails.getEmail()) && user.getMotDePasse().equals(userDetails.getMotDePasse())) {
                return user;
            }
        }
            return null;
    }

}
