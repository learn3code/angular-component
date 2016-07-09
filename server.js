const express = require("express");
const PORT = process.env.PORT;
const HOST_IP = process.env.IP;

const routes = require('./back-end/routes.js');

var app = express();

app.use(express.static('public'));

app.listen(PORT, HOST_IP, function() {
    console.log('Server started on port : ' + PORT);
});

routes(app);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
})