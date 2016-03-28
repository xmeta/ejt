"use strict";
var Commands = (function () {
    function Commands() {
        this._commands = {};
    }
    Commands.prototype.add = function (command) {
        this._commands[command.name] = command;
    };
    Commands.prototype.execute = function (name) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        var command = this._commands[name];
        if (command && command.executable) {
            var args = [];
            for (var i = 1, j = arguments.length; i < j; i++) {
                args.push(arguments[i]);
            }
            return command.execute.apply(this, args);
        }
    };
    return Commands;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Commands;
