// Import orm
var orm = require("../config/orm.js");

var burger = {

  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
      console.log(res)
    });
  },

  insertOne: function(vals, callback) {
    orm.insertOne("burgers", vals, function(res) {
      callback(res);
    });
  },

  updateOne: function(value, id, callback) {
    orm.updateOne("burgers", value, id, function(res) {
      console.log(res);
      callback(res);
    });
  }
};

// export burger object
module.exports = burger;
