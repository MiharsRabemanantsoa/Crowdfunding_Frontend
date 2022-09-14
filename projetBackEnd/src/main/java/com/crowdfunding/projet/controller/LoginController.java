package com.crowdfunding.projet.controller;

import com.crowdfunding.projet.entity.Users;
import com.crowdfunding.projet.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private LoginRepository loginRepository;

    @GetMapping("/login")
    public List<Users> getUser(){
        return loginRepository.findAll();
    }
}
