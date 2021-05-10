const express = require("express");
const http = require("http");

const options = {
  cors: true,
  //   origins: ["http://127.0.0.1:5347"],
};

const port = process.env.PORT || 4001;
// const index = require("./routes/index");

let x = 100;

const app = express();
// app.use(index);

const server = http.createServer(app);

const io = require("socket.io")(server, options);

// const io = socketIo(server); // < Interesting!

const getApiAndEmit = "TODO";

io.of("/user").on("connection", (socket) => {
  console.log("New client connected");

  setInterval(() => {
    socket.emit("FromApi", counter());
  }, 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const counter = () => {
  x = x - 1;
  return x;
};

server.listen(port, () => console.log(`Listening on port ${port}`));
