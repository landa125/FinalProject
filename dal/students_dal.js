var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM students ORDER BY student_id;';

    connection.query(query,function(err,result){
        callback(err,result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO students(ssn, grade_level, first_name, last_name, dorm_name) VALUES (?,?,?,?,?)';
    var queryData = [params.ssn, params.grade_level, params.first_name, params.last_name, params.dorm_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(student_id, callback) {
    var query = 'CALL student_getinfo(?)';
    var queryData = [student_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE students SET ssn = ?, grade_level = ?, first_name= ?, last_name = ?, dorm_name= ? WHERE meter_id = ?';
    var queryData = [params.ssn, params.grade_level, params.first_name, params.last_name, params.dorm_name, params.student_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};



exports.delete = function(params, callback) {
    var query = 'Delete FROM students WHERE student_id = ?';
    var queryData = [params.student_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result)
    });
};