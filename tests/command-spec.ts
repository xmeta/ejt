import Application from '../src/app/application';

let app = new Application();

describe('app commands', () => {

	it ('should be created already', () => {
		expect(app.commands).not.toBeNull();
	});

	it ('should be able to register(add) and excute', () => {
		let hi_called = false;
		app.commands.add({
			"name":"file:open",
			"label": "Open",
			"executable": true,
			"execute": () => {
				hi_called = true;
			}
		});
		app.commands.execute('file:open');
		expect(hi_called).toBeTruthy();
	});

	it ('should not be able excute if excutable is not set', () => {
		let hi_called = false;
		app.commands.add({
			"name":"file:open",
			"label": "Open",
			"execute": () => {
			}
		});
		app.commands.execute('file:open');
		expect(hi_called).not.toBeTruthy();
	});

	it ('should pass parameters to execution', () => {
		let hi_called = false;
		app.commands.add({
			"name":"file:open",
			"label": "Open",
			"executable": true,
			"execute": (p1, p2, p3, p4) => {
				hi_called = true;
				expect(p1).toBe(1);
				expect(p2).toBe("xx");
				expect(p3).toBeNull;
				expect(p4).toEqual({a:1});
			}
		});
		app.commands.execute('file:open', 1, "xx", null, {a: 1});
		expect(hi_called).toBeTruthy();
	});
});
