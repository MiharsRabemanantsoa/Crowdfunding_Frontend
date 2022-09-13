package com.crowdfunding.projet.repository;

import com.crowdfunding.projet.entity.Projet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjetRepository extends JpaRepository<Projet, Long> {
    @Query(value = "SELECT * FROM projet ORDER BY somme_collecte DESC LIMIT 3;", nativeQuery = true)
    List<Projet> listAll();



}
