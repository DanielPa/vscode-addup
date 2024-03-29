// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-addup" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('addUp.clipboard', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user

		

		vscode.env.clipboard.readText().then((text)=>{
			
			let lines = text.split("\n")
			let sum = 0

			lines.forEach(line => {
				
					let intVal = parseInt(line)
					if (intVal > 0) {
						sum += intVal
					}
				}
			);
			
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(vscode.window.activeTextEditor.selection.active, sum.toString())
			})
		})
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
