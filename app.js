import express from "express";

const app = express();
const PORT = 3004;

app.use(express.static('public'));



app.get('/', (req,res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`); 
});