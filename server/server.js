const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.get('/log', (req, res) => {
    res.send({express: 'got request'});
})

app.listen(3000, () => {
    console.log("listening pn port 3000");
})