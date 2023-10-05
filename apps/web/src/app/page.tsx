"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";
import { v4 } from "uuid";

const socket = io("http://localhost:3334");

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    const receiveMessage = (data: any) => {
      const newMessage = {
        id: v4(),
        name: data.name,
        text: data.text,
      };

      console.log("newMessage", data);

      setMessages([...messages, newMessage]);
    };

    socket.on("message-to-client", (data) => {
      console.log("data", data);

      setMessages([...messages, data]);

      // receiveMessage(data);
    });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("message-to-server", message);
      setMessage("");
    } else {
      console.error("Digite uma mensagem válida.");
    }
  };

  return (
    <div>
      <div>
        <div>
          {messages.map((msg: any, index: number) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}
