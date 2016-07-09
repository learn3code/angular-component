const url = 'mongodb://learn2code:learn2code@ds017205.mlab.com:17205/learn2code';
const MongoClient = require('mongodb').MongoClient;

module.exports = function() {
    return {
        find: function(qry, callback) {
            if (arguments.length > 0) {
                MongoClient.connect(url, function(err1, db) {
                    var collection = db.collection(qry);
                    collection.find({}).toArray(function(err2, data) {
                        db.close();
                        callback(data, err2);
                    });

                });
            }
        },
        findPatent: function(callback) {
            return this.find('patent', callback);
        },
        findBuildings: function(callback) {
            return this.find('buildings', callback);
        },
        insert: function() {
            if (arguments.length > 0) {
                MongoClient.connect(url, function(err, db) {
                    // TODO----
                    db.close();
                });
            }
        }
    };
}