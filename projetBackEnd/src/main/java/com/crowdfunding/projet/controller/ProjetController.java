package com.crowdfunding.projet.controller;

import com.crowdfunding.projet.entity.Projet;
import com.crowdfunding.projet.repository.ProjetRepository;
import com.crowdfunding.projet.service.ProjetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000/"})
@RestController
@RequestMapping("/api/test")
public class ProjetController {
    @Autowired
    private ProjetService projetService;
    @Autowired
    private ProjetRepository projetRepository;

    @GetMapping("/projet")
    public List<Projet> getAllProject(){
        return projetService.listAll();
    }

    //for the page that show details about one project
    @GetMapping("/details/{id}")
    public ResponseEntity<?> getOneProject(@PathVariable("id") Long id){
        return new ResponseEntity<>(projetService.projectWithParticipant(id), HttpStatus.OK);
    }
    @GetMapping("/unprojet/{id}")
    public Projet getSimpleOne(@PathVariable("id") Long id){return projetService.oneProject(id);
    }


}
