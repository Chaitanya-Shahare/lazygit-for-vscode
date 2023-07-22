import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let terminal: vscode.Terminal | undefined;
  terminal = vscode.window.terminals[0];
  let disposable = vscode.commands.registerCommand(
    "lazygit.openLazygit",
    async () => {
      if (!terminal) {
        // If the terminal doesn't exist, create it
        terminal = vscode.window.createTerminal();
      }
      terminal.sendText("lazygit");
      terminal.show();
      // workbench.action.terminal.moveToEditor;
      await vscode.commands.executeCommand(
        "workbench.action.terminal.moveToEditor"
      );
      // console.log(vscode.window.terminals)
      // if (vscode.window.terminals === undefined || vscode.window.terminals === null ){
      //   vscode.window.createTerminal();
      // }
    }
  );

  vscode.window.onDidCloseTerminal((closedTerminal) => {
    if (terminal && terminal.processId === closedTerminal.processId) {
      terminal = undefined;
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
