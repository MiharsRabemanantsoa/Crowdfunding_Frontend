package com.crowdfunding.projet.repository;

import com.crowdfunding.projet.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Users, Long> {
}
