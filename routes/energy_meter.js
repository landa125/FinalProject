var express = require('express');
var router = express.Router();
var energy_meter_dal = require('../dal/energy_meter_dal');

/*Get users listing. */

router.get('/all',function(req,res,next){
    energy_meter_dal.getAll(function (err,result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('energy_meter/energy_meter_view_all',{energy_meters:result,was_successful_delete: req.query.was_successful_delete});
        }
    })
});
router.get('/add', function(req, res) {
    res.render('energy_meter/energy_meter_add');
});



router.get('/insert', function(req, res) {
    energy_meter_dal.insert(req.query, function(err, result) {

        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/energy_meter/all');
        }
    });
});


router.get('/delete', function(req, res) {
    energy_meter_dal.delete(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/energy_meter/all' + "?&was_successful_delete=1");
        }
    });
});

router.get('/update', function(req, res) {
    energy_meter_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/energy_meter/all');
        }
    });
});



module.exports = router;
