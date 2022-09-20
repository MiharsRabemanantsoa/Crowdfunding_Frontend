package com.crowdfunding.projet.controller;


import com.crowdfunding.projet.entity.Notification;
import com.crowdfunding.projet.repository.NotificationRepository;
import com.crowdfunding.projet.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/notification")
public class NotificationController {

    @Autowired
    NotificationRepository notificationRepository;

    @Autowired
    NotificationService notificationService;

    //prend la list de la notification
    @GetMapping("/notific")
    public List<Notification> getNotification() {
        return notificationRepository.getByNotification() ;
    }

    //affichage comptage du notification

    @GetMapping("/comptage")
    public Long getAfficheComptage(Long id_notification){
        return notificationRepository.getCountNotif(id_notification);
    }

    //pour changer en lu
    @PutMapping("/read/{id_notification}")
    public ResponseEntity changeNotifStatusToRead(@PathVariable Long id_notification) {
        return ResponseEntity.ok(notificationService.changeNotifStatusToRead(id_notification));
    }


}
