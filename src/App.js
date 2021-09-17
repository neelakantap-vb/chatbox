import React, { useState } from "react";
import Chat from "./components/Chat";
import Form from "./components/Form";
import './index.css';
import agentImg from './static/img/vb.png';

function App(props) {
    const [messages, setMessages] = useState(props.messages);
    const count = messages.length;
    function scrollToBottom () {
        document.getElementById('endmsg').scrollIntoView({behavior:"smooth"});
    }
    function addMessage(message) {
        const newMsg = {message : message , createdAt : new Date() , sender : "user" , _id : count+1};
        setMessages([...messages, newMsg]);
        scrollToBottom();
    }
    const messageList = messages.map(msg => (
    <Chat 
      id = {msg._id}
      sender = {msg.sender}
      createdAt = {msg.createdAt}
      message = {msg.message}
      key = {msg._id}
    />
  ));
  return (
    <div className="container-fluid h-100">
        <div className="row justify-content-center h-100">
            <div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
                <div className="card-header">
                    <div className="input-group">
                        <input type="text" placeholder="Search..." name="" className="form-control search"/>
                        <div className="input-group-prepend">
                            <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>
                <div className="card-body contacts_body scrollbar-near-moon thin">
                    <ul className="contacts">
                        <li className="active">
                            <div className="d-flex bd-highlight">
                                <div className="img_cont_con">
                                    <img src={agentImg} className="rounded-circle user_img_con" alt="agent"/>
                                    <span className="online_icon"></span>
                                </div>
                                <div className="user_info">
                                    <span>Valuebound</span>
                                    <p>VB is online</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card-footer"></div>
            </div></div>
            <div className="col-md-8 col-xl-6 chat">
                <div className="card">
                    <div className="card-header msg_head">
                        <div className="d-flex bd-highlight">
                            <div className="img_cont">
                                <img src={agentImg} className="rounded-circle user_img" alt="agent"/>
                                <span className="online_icon"></span>
                            </div>
                            <div className="user_info">
                                <span>Chat with Valuebound</span>
                                <p>{count} Messages</p>
                            </div>
                            <div className="video_cam">
                                <span><i className="fas fa-video"></i></span>
                                <span><i className="fas fa-phone"></i></span>
                            </div>
                        </div>
                        <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                        <div className="action_menu">
                            <ul>
                                <li><i className="fas fa-user-circle"></i> View profile</li>
                                <li><i className="fas fa-users"></i> Add to close friends</li>
                                <li><i className="fas fa-plus"></i> Add to group</li>
                                <li><i className="fas fa-ban"></i> Block</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body msg_card_body scrollbar-near-moon thin">
                        {messageList}
                        <div id="endmsg"></div>
                    </div>
                    <Form addMessage={addMessage} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
