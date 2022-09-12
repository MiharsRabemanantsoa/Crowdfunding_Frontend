package com.crowdfunding.projet.controller;

import com.crowdfunding.projet.entity.Users;
import com.crowdfunding.projet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public String save(@RequestBody Users user){
        userService.saveUser(user);
        return "Inscription réussi";
    }
}
