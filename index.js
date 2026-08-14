import express from "express";
import { config } from "./data.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(config.serverName);
});

app.listen(config.port, () => {
    console.log("Server is live!");
});
