package com.crowdfunding.projet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjetSuivi implements Serializable {
    @Id
    @Column(name = "id_projet_suivi", nullable = false)
    private Long id_projet_suivi;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(updatable=false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateNotif;

    @Column(nullable = false,columnDefinition = "DATE")
    private String commentaire;

    @ManyToOne
    private Users users;

    @OneToOne
    private Projet projetSuivi;
}
