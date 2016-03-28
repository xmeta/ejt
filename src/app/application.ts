import Commands  from './commands';
import Workspace from './workspace';

export default class Application {

  private _events: Object;
  public commands: Commands;
  public workspace: Workspace;

  constructor() {
    this._events = {};
    this.commands = new Commands();
    this.workspace = new Workspace();
  }

  on(name: string, fn: (...p) => void) {
    this._events[name] = this._events[name] || [];
    this._events[name].push(fn);
  }

  run(name: string, ...p) {
    let args = [];
    for (let i = 1, j = arguments.length; i < j; i++) {
      args.push(arguments[i]);
    }
    this._events[name] = this._events[name] || [];
    this._events[name].forEach(function(fn) {
      fn.apply(this, args);
    });
  }
}
