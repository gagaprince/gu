"use strict";
//var gutil = require('./gutil');

require('../../../build/gu.min.js');

$(function(){
    var Promise = gu.Promise;
    new Promise(function(p){
        setTimeout(function(){
            console.log(1);
            p.resolve();
        },1000);
    }).then(function(p){
        setTimeout(function(){
            console.log(2);
            p.resolve();
        },1000);
    }).then(function(p){
        setTimeout(function(){
            console.log(3);
            p.resolve();
        },1000);
    });
})