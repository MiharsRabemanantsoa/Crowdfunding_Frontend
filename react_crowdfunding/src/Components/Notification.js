import React,{useState} from 'react'
import { useEffect } from 'react';
import NotificationService from '../Services/NotificationService';
import { IoNotificationsOutline  } from "react-icons//io5";
import Moment from 'react-moment';




function Notification() {
    const [notification, setNotification] = useState([]);
    const [showCount, setShowCount] = useState(false);
    
    const [isHover,setIsHover] =useState(false);
    
  
    useEffect(() => {
        getNotification();
        getAfficheComptage();
        
    }, []);

    // action notificaton
    const getNotification = () => {
        NotificationService.getNotification().then((response) => {
            setNotification(response.data);
            
            console.log(response.data);
            
        })
    };
    // action affichage
    const getAfficheComptage = () => {
      NotificationService.getAfficheComptage().then((response) => {
          setShowCount(response.data);
          
          console.log(response.data);
          
      })
  };


  // action read
  const handleMouseEnter = (id_notification) => {
   NotificationService.changeNotifStatusToRead(id_notification).then(res=>console.log(res));
   setIsHover(!isHover);   
 
    
    window.location.reload(false);
   
 };


  return (
    <div>
        <a  className="nav-link nav-icon"  href="creerprojet.html" data-bs-toggle="dropdown">
        <IoNotificationsOutline style={{fontSize:30}} />
          <span className="badge bg-primary badge-number">{showCount}</span>
                                    
        </a>
          
        <ul className="dropdown-menu" style={{background:'#302c51', width:"400px",borderRadius:10}}>
        { notification.map((notification, index) =>(
                
                <li className="nav-item" >
                  <h4 key = {notification.id_notification}   style={{color:"#ff6015", fontWeight: 'bold'}}
                   onMouseLeave = {() => handleMouseEnter(notification.id_notification)} className="nav-link" >
                   <Moment format='MMMM Do YYYY, h:mm:ss a'>{notification.daterecu}</Moment>    
                   </h4>
                   <p style={{color:"white", marginLeft:"10px"}}>{notification.corps}</p>
                   <hr class="dropdown-divider"></hr> 
                </li>  
                
                
                ))
        }      
                                     
        </ul>
       
    </div>
  );
}

export default Notification
