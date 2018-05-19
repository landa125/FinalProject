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
            res.render('dormitory/dormitory_view_all',{dormitory:result[0],});
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
            res.redirect(302, '/dormitory/all');
        }
    });
});
module.exports = router;
