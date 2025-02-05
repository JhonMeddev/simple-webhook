require("dotenv").config();
const express = require("express");

const app =express();

app.use(express.json());

app.use('/tradingview-buy', (req, res, next) => {
    console.log(req.originalurl);
    console.log(req.body) ;
    res.send("TV Buy!" );
});

app.use('/tradingview-sell', (req, res, next) => {
    console.log(req.originalurl);
    console.log(req.body) ;
    res.send("TV Sell!" );
});

app.use('/', (req, res, next) => {
    console.log(req.originalurl);
    console.log(req.body) ;
    res.send("Hello World" );
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});