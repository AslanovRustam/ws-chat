import { w3cwebsocket as Socket } from "websocket";
import { useState, useEffect, useContext } from "react";
import Form from "../Form/Form";
import { ThemeContext } from "../../context/ThemeContext";

const client = new Socket("ws://localhost:8000");

function Chat() {
  const { userName } = useContext(ThemeContext);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      setMessages((messages) => [
        ...messages,
        {
          message: data.message,
          userName: data.userName,
        },
      ]);
    };
  }, []);

  const onSend = (value) => {
    client.send(
      JSON.stringify({
        type: "message",
        message: value,
        userName,
      })
    );
    console.log(value);
  };

  return (
    <div>
      <div className="messages">
        {messages.map((message, key) => (
          <div
            key={key}
            className={`message ${
              userName === message.userName ? "flex-end" : "flex-start"
            }`}
          >
            <section>{message.userName[0].toUpperCase()}</section>
            <h4>{message.userName + ":"}</h4>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
      <Form submitForm={onSend} placeholder="message" btnName="send" />
    </div>
  );
}

export default Chat;
