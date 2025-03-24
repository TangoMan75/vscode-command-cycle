const assert = require('assert');
const vscode = require('vscode');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});

	test('loop executes commands in a cycle', async () => {
		let executedCommands = [];
		const mockCommands = ['command1', 'command2', 'command3'];

		// Mock executeCommand to track executed commands
		const originalExecuteCommand = vscode.commands.executeCommand;
		vscode.commands.executeCommand = (command) => {
			executedCommands.push(command);
			return Promise.resolve(undefined);
		};

		const { loop } = require('../extension');

		loop({ commands: mockCommands });
		loop({ commands: mockCommands });
		loop({ commands: mockCommands });

		vscode.commands.executeCommand = originalExecuteCommand;

		assert.deepStrictEqual(executedCommands, ['command1', 'command2', 'command3']);
	});

	test('command-cycle.loop command is registered', () => {
		vscode.commands.getCommands().then((commands) => {
			assert.ok(commands.includes('command-cycle.loop'));
		});
	});
});
