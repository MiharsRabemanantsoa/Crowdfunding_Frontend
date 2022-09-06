package com.crowdfunding.projet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Statut implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_statut", nullable = false)
    private Long idStatut;

    @Column(nullable = false,length = 20)
    private String typeStatut;

    @OneToMany(mappedBy = "statut")
    private List<Projet> projetList;

}
