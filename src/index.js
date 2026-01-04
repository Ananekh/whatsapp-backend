import http from "http";
import app from "./app.js";
import connectDB from "./configs/db.js";
import { Server } from "socket.io";

connectDB();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

import SocketServer from "./SocketServer.js";
SocketServer(io);

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
