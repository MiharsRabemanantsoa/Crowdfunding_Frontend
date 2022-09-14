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
public class Role implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_role", nullable = false)
    private Long idRole;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;

//    @OneToMany(mappedBy = "role")
//    private List<Users> usersList;
}
