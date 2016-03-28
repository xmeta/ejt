export interface ICommand {
  name: string;
  label: string;
  execute: (...rest) => any;
  visible?: boolean;
  executable?: boolean;
}

export default class Commands {

  private _commands: Object;

  constructor() {
    this._commands = {};
  }

  add(command: ICommand) {
    this._commands[command.name] = command;
  }

  execute(name: string, ...p) {
    let command = <ICommand> this._commands[name];
    if (command && command.executable) {
      let args = [];
      for (let i = 1, j = arguments.length; i < j; i++) {
        args.push(arguments[i]);
      }
      return command.execute.apply(this, args);
    }
  }
}
