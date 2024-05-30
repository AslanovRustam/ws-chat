import { w3cwebsocket as Socket } from "websocket";
import { useState, useEffect } from "react";
import Form from "../Form/Form";

const client = new Socket("ws://localhost:8000");

function Chat({ userName }) {
  const [myMessage, setMyMessage] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <div className="title">Socket Chat: {userName}</div>
      <Form submitForm={setMyMessage} placeholder="message" btnName="send" />
    </div>
  );
}

export default Chat;
