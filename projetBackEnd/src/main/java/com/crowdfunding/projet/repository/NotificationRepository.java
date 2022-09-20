package com.crowdfunding.projet.repository;

import com.crowdfunding.projet.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface NotificationRepository  extends JpaRepository<Notification, Long> {

    //liste Notification
    @Query(value="select * from notification where read  = false",nativeQuery = true)
    List<Notification> getByNotification();
    //recuperation du comptage notification
    @Query(value="SELECT COUNT (DISTINCT id_notification)FROM public.notification where read  = false", nativeQuery = true)
     Long getCountNotif(Long id_notification);

    //non lu
    Optional<Notification> findById(Long id);
}
