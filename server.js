require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const DB_URI = process.env.DB_URI
const PORT = process.env.PORT || 5000;

const app = express();
const db_uri = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_URI}/${DB_NAME}`;
console.log(db_uri);
mongoose.connect(db_uri).then(() => {
    console.log("MongoDB connected...");
}).catch((err) => {
    console.log(err);
})

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!");
})


app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})