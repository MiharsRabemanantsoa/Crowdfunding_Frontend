package com.crowdfunding.projet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.nio.file.Paths;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_user", nullable = false)
    private Long idUser;

    @Column(nullable = false, length = 50)
    private String nom;

    @Column(nullable = false, length = 50)
    private String prenom;

    @Column(nullable = false, length = 50, unique = true)
    private String email;

    @Column(nullable = false)
    private String motDePasse;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Calendar dateNaissance;

    @Column(nullable = true, length = 150)
    private String adresse;

    @Column(nullable = true, length = 30)
    private String ville;

    @Column(nullable = true, length = 20)
    private String Pays;

    @Column(nullable = true)
    private String photoProfil;

    @Column(nullable = true)
    private String cinRecto;

    @Column(nullable = true)
    private String cinVerso;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(updatable=false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateInscription;

    @Column
    private boolean isLogedIn = false;

    @ManyToOne
    private Role role;

    @OneToMany(mappedBy = "users")
    private List<Investissement> investissementList;

    @OneToMany(mappedBy = "users")
    private List<ProjetSuivi> projetSuivis;
}
