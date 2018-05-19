var mysql = require('mysql');
var db = require('./db_connection.js');


/* DATABASE CONFIGURATION */

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM village;';
    connection.query(query,function(err,result){
        callback(err,result);
    });
};
exports.insert = function(params, callback) {
    var query = 'INSERT INTO village (village_name, number_of_dorms,number_of_rooms_in_dorms) VALUES (?,?,?)';
    var queryData = [params.village_name, params.number_of_dorms, params.number_of_rooms_in_dorms];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.getinfo = function(village_id, callback) {
    var query = 'CALL dorm_village_getinfo(?)';
    var queryData = [village_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE village SET village_name = ?, number_of_dorms = ?,number_of_rooms_in_dorms= ? WHERE village_id = ?';
    var queryData = [params.village_name, params.number_of_dorms, params.number_of_rooms_in_dorms,params.village_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.delete = function(params, callback) {
    var query = 'Delete FROM village WHERE village_id = ?';
    var queryData = [params.village_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result)
    });
};
