var express = require('express');
var router = express.Router();
var dormitory_dal = require('../dal/dormitory_dal');

/*Get users listing. */

router.get('/all',function(req,res,next){
    dormitory_dal.getAll(function (err,result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('dormitory/dormitory_view_all',{dormitory:result[0],was_successful_delete: req.query.was_successful_delete,});
        }
    })
});
router.get('/add', function(req, res) {
    res.render('dormitory/dormitory_add');
});

router.get('/insert', function(req, res) {
    dormitory_dal.insert(req.query, function(err, result) {

        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/dorms/all');
        }
    });
});

router.get('/edit', function(req, res) {
    dormitory_dal.getinfo(req.query.dorm_id, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('dormitory/dormUpdate', {dorms: result[0][0], number_of_dorms: result[1], number_of_rooms_in_dorms: result[2]}
            );
        }
    });
});

router.get('/delete', function(req, res) {
    dormitory_dal.delete(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/dorms/all' + "?&was_successful_delete=1");
        }
    });
});

router.get('/update', function(req, res) {
    dormitory_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/dorms/all');
        }
    });
});

module.exports = router;
