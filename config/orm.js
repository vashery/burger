// Import connection
var connection = require("../config/connection.js");


var orm = {
  selectAll: function(table, callback) {
    var query = "SELECT * FROM " + table + ";";
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },

  insertOne: function(table, values, callback) {
    var query = "INSERT INTO " + table + "(burger_name, devoured) VALUES (?,?)"

    console.log(query);

    connection.query(query, values, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },

  updateOne: function(table, value, id, callback) {
    var queryString = "UPDATE " + table + " SET devoured=" + value + " WHERE id = " + id;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  }
};

// Export the ORM
module.exports = orm;
