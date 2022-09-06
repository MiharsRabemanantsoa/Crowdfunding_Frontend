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
public class Categorie implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_categorie", nullable = false)
    private Long idCategorie;

    @Column(nullable = false,length = 50)
    private String nomCateg;
    @OneToMany(mappedBy = "categProjet")
    private List<Projet> projetListCateg;
}
