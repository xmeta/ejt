import Application from '../src/app/application';

let app = new Application();

describe('app events', () => {
	it ('should be able to register(on) and trigger(run)', () => {
		let hi_called = false;
		app.on('hi', () => {
			hi_called = true;
		});
		app.run('hi');
		expect(hi_called).toBeTruthy();
	});

	it ('should pass parameters to execution', () => {
		let hi_called = false;
		app.on('hi', (p1, p2, p3, p4) => {
			hi_called = true;
			expect(p1).toBe(1);
			expect(p2).toBe("xx");
			expect(p3).toBeNull;
			expect(p4).toEqual({a:1});
		});
		app.run('hi', 1, "xx", null, {a: 1});
		expect(hi_called).toBeTruthy();
	});
});
