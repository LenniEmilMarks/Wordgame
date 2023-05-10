const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db1 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "wordgame",
});

const db2 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "leaderboard",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/words", (req, res) => {
    const sqlSelect = "SELECT * FROM words";
    db1.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/scores", (req, res) => {
    const sqlSelect = "SELECT * FROM scores";
    db2.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});