const express = require("express");
const PORT = process.env.PORT;
const HOST_IP = process.env.IP;

var app = express();

app.use(express.static('src'));

app.listen(PORT, HOST_IP, function() {
    console.log('Server started on port : ' + PORT);
});