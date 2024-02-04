import express from "express";
import https from "https";
import fs from "fs";

const app = express();
const PORT = 3000;

// // For local
// app.listen(PORT, ()=>console.log("Started"));

// For public
app.use(express.static(process.cwd() + "/dist"));
const sslServer = https.createServer({
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
}, app);
sslServer.listen(PORT, ()=>
    console.log(`Example app listening on https://mintek.top`)
);