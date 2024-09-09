const express = require("express");
const server = express();
const ejs = require("ejs");

server.set("view engine" , "ejs");

server.get("/", (req, res) => {
    res.render('main')
})

server.listen(2002, () => {
    console.log('server chalu che kam kar http://127.0.0.1:2002');
})