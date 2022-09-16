package com.crowdfunding.projet.controller;

import com.crowdfunding.projet.entity.Users;
import com.crowdfunding.projet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    //inscription user
    @PostMapping("/users")
    public String save(@RequestBody Users user){
        userService.saveUser(user);
        return "Inscription réussi";
    }
    
    //get all the users
    @GetMapping("/user")
    public List<Users> getUsers(){
        return userService.listUsers();}
}
