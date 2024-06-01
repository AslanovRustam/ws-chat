import { w3cwebsocket as Socket } from "websocket";
import { useState, useEffect, useContext } from "react";
import Form from "../Form/Form";
import { ThemeContext } from "../../context/ThemeContext";
import s from "./chat.module.scss";

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
    <div className={s.container}>
      <ul className={s.messages}>
        {messages.map((message, key) => (
          <li
            key={key}
            className={`${s.message} ${
              userName === message.userName ? s.flexEnd : s.flexStart
            }`}
          >
            <div className={s.avatar}>{message.userName[0].toUpperCase()}</div>
            <p className={s.text}>
              <strong>{message.userName}:</strong>{" "}
              <span>{message.message}</span>
            </p>
          </li>
        ))}
      </ul>
      <div className={s.bottomForm}>
        <Form submitForm={onSend} placeholder="message" btnName="send" />
      </div>
    </div>
  );
}

export default Chat;
