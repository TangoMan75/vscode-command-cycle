const vscode = require('vscode');

let index = 0;

/**
 * @param {Object} args Arguments from keybindings.json containing list of commands to loop
 */
function loop(args) {
	if (args && args.commands) {
		vscode.commands.executeCommand(args.commands[index]);
		
		index = (index + 1) % args.commands.length;
	}
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const disposableloop = vscode.commands.registerCommand('command-cycle.loop', function (args) {
		loop(args);
	});

	context.subscriptions.push(disposableloop);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate,
	loop
}
