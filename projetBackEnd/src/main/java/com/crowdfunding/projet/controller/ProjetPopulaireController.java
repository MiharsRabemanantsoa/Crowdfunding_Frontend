package com.crowdfunding.projet.controller;

import com.crowdfunding.projet.entity.Projet;
import com.crowdfunding.projet.repository.ProjetPopulaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ProjetPopulaireController {
    @Autowired
    private ProjetPopulaireRepository projetPopulaireRepository;

    public List<Projet> getPopulaireProjet(){
        return projetPopulaireRepository.findAll();
    }
}
