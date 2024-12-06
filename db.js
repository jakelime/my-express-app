require('dotenv').config();
const mongoose = require('mongoose');

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const DB_URI = process.env.DB_URI

const db_uri = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_URI}/${DB_NAME}`;

mongoose.connect(db_uri).then(() => {
    console.log("MongoDB connected...");
}).catch((err) => {
    console.log(err);
})
