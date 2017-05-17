"use strict";
var gutil = require('./gutil');

//require('../../../build/gu.min.js');

$(function(){
    var Promise = gu.Promise;
    new Promise(function(p){
        setTimeout(function(){
            console.log(1);
//            p.resolve(1);
            p.reject(-1);
        },1000);
    }).then(function(p,lastData){
        setTimeout(function(){
            console.log("上家的数据:"+lastData);
            console.log(2);
            p.resolve(2);
        },1000);
    },function(p,lastData){
        console.log("出错了");
        setTimeout(function(){
            console.log("出错了上家的数据:"+lastData);
            console.log(2);
            p.resolve(2);
        },1000);
    }).then(function(p,lastData){
        setTimeout(function(){
            console.log("上家的数据:"+lastData);
            console.log(3);
            p.resolve(3);
        },1000);
    });
})