package com.crowdfunding.projet.controller;

import com.crowdfunding.projet.entity.Projet;
import com.crowdfunding.projet.service.ProjetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/home")
public class ProjetController {
    @Autowired
    private ProjetService projetService;

    @RequestMapping("/lien")
    public List<Projet> getAllProject(){
        return projetService.listAll();
    }
}
