const conn = require("./db");

module.exports = function(app) {
    app.get('/buildings', function(req, res) {
        conn().findBuildings(function(err, data) {
            if (err) {
                res.status(404).send('Sorry cant find that!');
            }
            else {
                res.send(data);
            }
        });
    });
};
