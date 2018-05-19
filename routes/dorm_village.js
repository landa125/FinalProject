var express = require('express');
var router = express.Router();
var dorm_village_dal = require('../dal/dorm_village_dal');

/*Get users listing. */

router.get('/all',function(req,res,next){
    dorm_village_dal.getAll(function (err,result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('village/dorm_village_view_all',{villages:result,was_successful_delete: req.query.was_successful_delete});
        }
    })
});

router.get('/add',function(req,res){
    res.render('village/village_add');
});

router.get('/insert', function(req, res) {
    dorm_village_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/dorm_village/all');
        }
    });
});



router.get('/edit', function(req, res) {
    dorm_village_dal.getinfo(req.query.village_id, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('village/dormvillUpdate', {village: result[0][0], number_of_dorms: result[1], number_of_rooms_in_dorms: result[2]}
            );
        }
    });
});

router.get('/update', function(req, res) {
    dorm_village_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/dorm_village/all');
        }
    });
});

router.get('/delete', function(req, res) {
    dorm_village_dal.delete(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/dorm_village/all' + "?&was_successful_delete=1");
        }
    });
});
module.exports = router;
