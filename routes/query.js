var express = require('express');
var router = express.Router();
var query_dal = require('../dal/query_dal');
router.get('/query_1',function (req,res,next) {
    query_dal.getAll(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('query/query_1', {results: result});
        }
    })

});
router.get('/query_2',function (req,res,next) {
    query_dal.getAll2(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('query/query_2', {results: result});
        }
    })

});
router.get('/query_3',function (req,res,next) {
    query_dal.getAll3(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('query/query_3', {results: result});
        }
    })

});
router.get('/query_4',function (req,res,next) {
    query_dal.getAll4(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('query/query_4', {results: result});
        }
    })

});
router.get('/query_5',function (req,res,next) {
    query_dal.getAll5(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('query/query_5', {results: result});
        }
    })

});

router.get('/query_6',function (req,res,next) {
    query_dal.getAll6(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('query/query_6', {results: result});
        }
    })

});
router.get('/query_7',function (req,res,next) {
    query_dal.getAll7(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('query/query_7', {results: result});
        }
    })

});
router.get('/query_8',function (req,res,next) {
    query_dal.getAll8(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('query/query_8', {results: result});
        }
    })

});
router.get('/query_9',function (req,res,next) {
    query_dal.getAll9(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('query/query_9', {results: result});
        }
    })

});
router.get('/query_10',function (req,res,next) {
    query_dal.getAll10(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('query/query_10', {results: result});
        }
    })

});

module.exports = router;
