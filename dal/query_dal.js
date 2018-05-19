var mysql = require('mysql');
var db = require('./db_connection.js');
var connection = mysql.createConnection(db.config);

exports.getAll = function (callback) {
    var query = "SELECT dorm_name, village_name\n" +
        "FROM dormitory D \n" +
        "WHERE village_name =\n" +
        "                    (SELECT village_name \n" +
        "                     FROM village V\n" +
        "                     WHERE V.village_name = \n" +
        "                               D.village_name);";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll2 = function (callback) {
    var query = "SELECT village.village_name, dormitory.dorm_name\n" +
        "FROM village\n" +
        "JOIN dormitory ON village.village_name=dormitory.village_name;";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll3 = function (callback) {
    var query = "SELECT first_name, last_name FROM student WHERE student_id  in (SELECT dorm_id FROM dormitory);\n";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};

exports.getAll4 = function (callback) {
    var query = "SELECT village_name FROM dormitory  WHERE EXISTS (SELECT village_name FROM village WHERE village.village_name = dormitory.village_name); \n";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll5 = function (callback) {
    var query = "";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll6 = function (callback) {
    var query = "SELECT meter_id,SUM(avg_annual_energy_consumed)As total \n" +
        "FROM energy_meter\n" +
        "GROUP BY meter_id;";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll7 = function (callback) {
    var query = "";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll8 = function (callback) {
    var query = "SELECT meter_id,SUM(avg_annual_energy_consumed)As total \n" +
        "FROM energy_meter\n" +
        "GROUP BY meter_id\n" +
        "ORDER BY SUM(avg_annual_energy_consumed) DESC;" ;
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};

exports.getAll9 = function (callback) {
    var query = "SELECT dorm_name FROM dormitory\n" +
        "UNION\n" +
        "SELECT village_name FROM village;" ;
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll10 = function (callback) {
    var query = "SELECT DISTINCT last_name \n" +
        "FROM student;" ;
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
