require("dotenv").config();
const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.post('/api/tradingview-buy', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.body);
    res.send(req);
});

app.post('/api/tradingview-sell', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.body);
    res.send("TV Sell!");
});

app.get('/api/', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.body);
    res.send("Hello World");
});

// Exporta para o Vercel
module.exports = app;
module.exports.handler = serverless(app);