var express = require('express');
var router = express.Router();
var students_dal = require('../dal/students_dal');
var dormitory_dal = require('../dal/dormitory_dal');
/*Get users listing. */

router.get('/all',function(req,res,next){
    students_dal.getAll(function (err,result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('students/students_view_all',{students:result,was_successful_delete: req.query.was_successful_delete});
        }
    })
});


router.get('/add',function(req,res){
    students_dal.getAll(function(err,result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('students/students_add', {dormitory_result: result[0]});
        }
    });
});

router.get('/insert', function(req, res) {
    students_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/student/all');
        }
    });
});

router.get('/edit', function(req, res) {
    students_dal.getinfo(req.query.student_id, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('students/studentUpdate', {students: result[0][0], ssn: result[1],
                grade_level:result[2], first_name:result[3],last_name:result[4],dorm_name:result[5]}
            );
        }
    });
});


router.get('/delete', function(req, res) {
    students_dal.delete(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/student/all' + "?&was_successful_delete=1");
        }
    });
});

router.get('/update', function(req, res) {
    students_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/student/all');
        }
    });
});
module.exports = router;

