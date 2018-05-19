var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
   // var query = 'SELECT * FROM dormitory ORDER BY dorm_id;';
    var query = 'CALL dorms_getall();';
    connection.query(query,function(err,result){
        callback(err,result);
    });
};

exports.insert = function(params,callback){
    var query = 'INSERT INTO dormitory(dorm_name, dorm_number, number_of_students, village_name, meter_name) VALUES (?,?,?,?,?)';
    var queryData= [params.dorm_name, params.dorm_number,params.number_of_students,params.village_name,params.meter_name];
    connection.query(query,queryData,function(err,result) {
        callback(err,result);
    });
};