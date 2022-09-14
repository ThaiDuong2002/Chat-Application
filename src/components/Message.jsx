import React from 'react';

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/9225856/pexels-photo-9225856.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/9225856/pexels-photo-9225856.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
