package com.crowdfunding.projet.controller;

import com.crowdfunding.projet.entity.Projet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.crowdfunding.projet.service.ProjetService;

import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000/"})
@RestController
@RequestMapping("/api/test")
public class ProjetController {
    @Autowired
    ProjetService projetService;

    //@GetMapping("/lien" )

    @GetMapping("/projet")
    public List<Projet> getAllProject(){
        System.out.println("mandeveeeee");
        return projetService.listAll();
    }

    //for the page that show details about one project
    @GetMapping("/details/{id}")
    public ResponseEntity<?> getOneProject(@PathVariable("id") Long id){
        return new ResponseEntity<>(projetService.projectWithParticipant(id), HttpStatus.OK);
    }
}
