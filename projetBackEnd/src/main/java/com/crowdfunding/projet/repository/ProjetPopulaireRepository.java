package com.crowdfunding.projet.repository;

import com.crowdfunding.projet.entity.Projet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjetPopulaireRepository  extends JpaRepository<Projet, Long> {

}
