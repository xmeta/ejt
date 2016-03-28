"use strict";
var application_1 = require('../src/app/application');
var app = new application_1.default();
describe('app events', function () {
    it('should be able to register(on) and trigger(run)', function () {
        var hi_called = false;
        app.on('hi', function () {
            hi_called = true;
        });
        app.run('hi');
        expect(hi_called).toBeTruthy();
    });
    it('should pass parameters to execution', function () {
        var hi_called = false;
        app.on('hi', function (p1, p2, p3, p4) {
            hi_called = true;
            expect(p1).toBe(1);
            expect(p2).toBe("xx");
            expect(p3).toBeNull;
            expect(p4).toEqual({ a: 1 });
        });
        app.run('hi', 1, "xx", null, { a: 1 });
        expect(hi_called).toBeTruthy();
    });
});
