import React from 'react';
import '../index.css';
import agentImg from '../static/img/vb.png';
import userImg from '../static/img/user.png';

export default function Chat(props){
  function timeAgo(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " year(s)";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " month(s)";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " day(s)";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hour(s)";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minute(s)";
    }
    // return Math.floor(seconds) + " second(s)";
    return "few seconds";
  }
  if (props.sender==="user") {
    return(
        <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
                {props.message}
                <span className="msg_time_send">{timeAgo(new Date(props.createdAt))} Ago</span>
            </div>
            <div className="img_cont_msg">
                <img src={userImg} className="rounded-circle user_img_msg" alt="user"/>
            </div>
        </div>
    );
  } else {
    return(
        <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
                <img src={agentImg} className="rounded-circle user_img_msg" alt="agent"/>
            </div>
            <div className="msg_cotainer">
                {props.message}
                <span className="msg_time">{timeAgo(new Date(props.createdAt))} Ago</span>
            </div>
        </div>
    );
  }
}