package com.crowdfunding.projet.controller;

import com.crowdfunding.projet.entity.Users;
import com.crowdfunding.projet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/user")
    public List<Users> getUsers(){
        return userService.listUsers();
    }
}
