"use strict";
/*
    CClick
    单双击/长按不冲突的解决方案
    By: 小淳

    调用方法:
    let a = new CClick(document.getElementById(""));
    a.click((e) => {// TODO});
    a.dbClick((e) => {// TODO});
    a.longClick((e) => {// TODO});
*/
var CClick = /** @class */ (function () {
    function CClick(element) {
        var _this = this;
        this.func_click = null;
        this.func_dbClick = null;
        this.func_longClick = null;
        var CONST_LONG_TIME = 700; // 长按多少ms执行
        var CONST_DOUBLE_TIME = 250; // 双击的间隔
        var isLong = false;
        var timer_long;
        var clickTimes = 0;
        var timer_db;
        element.onmousedown = function (event) {
            if (event.button !== 0) {
                return;
            }
            isLong = false;
            timer_long = setTimeout(function () {
                isLong = true;
                if (_this.func_longClick !== null) {
                    _this.func_longClick(event);
                }
            }, CONST_LONG_TIME);
        };
        element.onmouseup = function (event) {
            if (event.button !== 0) {
                return;
            }
            if (isLong == false) {
                clearTimeout(timer_long);
                clickTimes++;
                if (clickTimes >= 2) {
                    clearTimeout(timer_db);
                    clickTimes = 0;
                    if (_this.func_dbClick !== null) {
                        _this.func_dbClick(event);
                    }
                    return;
                }
                timer_db = setTimeout(function () {
                    clickTimes = 0;
                    if (_this.func_click !== null) {
                        _this.func_click(event);
                    }
                }, CONST_DOUBLE_TIME);
            }
        };
    }
    CClick.prototype.click = function (callback) {
        this.func_click = callback;
    };
    CClick.prototype.dbClick = function (callback) {
        this.func_dbClick = callback;
    };
    CClick.prototype.longClick = function (callback) {
        this.func_longClick = callback;
    };
    return CClick;
}());
module.exports = CClick;
