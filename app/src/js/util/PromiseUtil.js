"use strict";
var HClass=require('../base/HClass');
var Promise = HClass.extend({
    isExe:false,
    callback:null,
    callbackFail:null,
    nextPromise:null,
    ctor:function(call,callFailed,isLate){//isLate 是否要延后执行
        this.callback = call;
        this.callbackFail = callFailed;
        if(!isLate){
            this.callback(this);
            this.isExe = true;
        }
    },
    resolve:function(data){
        if(this.nextPromise){
            this.nextPromise.excute(data);
        }
    },
    reject:function(data){
        if(this.nextPromise){
            this.nextPromise.excuteReject(data);
        }
    },
    excuteReject:function(data){
        if(!this.isExe){
            this.callbackFail(this,data);
            this.isExe = false;
        }
    },
    excute:function(data){
        if(!this.isExe){
            this.callback(this,data);
            this.isExe = false;
        }
    },
    then:function(newCall,newCallFailed){
        this.nextPromise = new Promise(newCall,newCallFailed,true);
        return this.nextPromise;
    }
});

var PromiseUtil = {
    Promise:Promise
}
module.exports = PromiseUtil;