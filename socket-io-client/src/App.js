import React, { useState, useEffect } from "react";
import socketIOClient, { io } from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:4001/user");
    // const socket = io("/user");
    socket.on("FromApi", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}

export default App;
