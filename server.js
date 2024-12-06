require("./db.js")
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();
const api_version = "/api/v1";

app.use(express.json());
app.use(cors({}))
app.get("/", (req, res) => {
    res.send("express app is running fine!");
})

app.get(`${api_version}/envis/get_username`, (req, res) => {
    res.send({ message: "Arun Kumar!" });
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})