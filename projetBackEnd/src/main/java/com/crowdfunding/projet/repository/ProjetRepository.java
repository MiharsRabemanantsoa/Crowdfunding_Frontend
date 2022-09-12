package com.crowdfunding.projet.repository;

import com.crowdfunding.projet.entity.Projet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjetRepository extends JpaRepository<Projet, Long> {
    // obtenir la liste descendant des investissements par rapport au somme collecté
    @Query(value = "SELECT * FROM ORDER BY", nativeQuery = true)
}
