import React, { useState } from "react";

function Form(props) {
  const [msg, setMsg] = useState('');

  function handleChange(e) {
    setMsg(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (msg !== '') {
      props.addMessage(msg);
    }
    setMsg("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="card-footer">
        <div className="input-group">
          <div className="input-group-append">
            <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
          </div>
          <textarea
            name="message" 
            className="form-control type_msg" 
            placeholder="Type your message..."
            autoComplete="off"
            value={msg}
            onChange={handleChange}
            >
          </textarea>
          <div className="input-group-append">
            <button type="submit" className="input-group-text send_btn">
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;