const conn = require("./db");

module.exports = function(app) {
    app.get('/buildings', function(req, res) {
        conn().findBuildings(function(data, err) {
            res.send(data);
        });
    });
};
