package com.crowdfunding.projet.repository;

import com.crowdfunding.projet.entity.Investissement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvestissementRepository extends JpaRepository<Investissement,Long> {
}
