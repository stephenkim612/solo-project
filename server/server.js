const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const controller = require('./controller');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors())
app.use(bodyParser.json())

app.get('/log', controller.getLog, (req, res) => {
    console.log(res.locals.log.rows)
    res.status(200).json(res.locals.log.rows);
})

app.post('/new', controller.addExpense, (req, res) => {
    // console.log(req.body)
    res.status(200).json({'good': 'work'})
})

app.post('/delete', controller.deleteExpense, (req, res) => {
    // console.log(req.body);
    res.status(200).json({id: `deleted ${req.body.id}`})
})

app.post('/create', controller.createUser, (req, res) => {
    res.status(200).json("USER CREATED");
})

// GLOBAL ERROR HANDLER
app.use((req, res) => {
    res.status(400).json({error: 'error'})
})


app.listen(3000, () => {
    console.log("listening pn port 3000");
})

module.exports = app;