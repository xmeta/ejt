"use strict";
var commands_1 = require('./commands');
var workspace_1 = require('./workspace');
var Application = (function () {
    function Application() {
        this._events = {};
        this.commands = new commands_1.default();
        this.workspace = new workspace_1.default();
    }
    Application.prototype.on = function (name, fn) {
        this._events[name] = this._events[name] || [];
        this._events[name].push(fn);
    };
    Application.prototype.run = function (name) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        var args = [];
        for (var i = 1, j = arguments.length; i < j; i++) {
            args.push(arguments[i]);
        }
        this._events[name] = this._events[name] || [];
        this._events[name].forEach(function (fn) {
            fn.apply(this, args);
        });
    };
    return Application;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Application;
