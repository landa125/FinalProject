var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM energy_meter;';

    connection.query(query,function(err,result){
        callback(err,result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO energy_meter(meter_name, avg_annual_energy_consumed,year) VALUES (?,?,?)';
    var queryData = [params.meter_name, params.avg_annual_energy_consumed, params.year];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};
exports.getinfo = function(meter_id, callback) {
    var query = 'CALL energy_meter_getinfo(?)';
    var queryData = [meter_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE energy_meter SET meter_name = ?, avg_annual_energy_consumed = ?, year= ? WHERE meter_id = ?';
    var queryData = [params.meter_name, params.avg_annual_energy_consumed, params.year, params.meter_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};


exports.delete = function(params, callback) {
    var query = 'Delete FROM energy_meter WHERE meter_id = ?';
    var queryData = [params.meter_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result)
    });
};