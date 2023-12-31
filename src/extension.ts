import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "lazygit.openLazygit",
    async () => {
      // Always create a new terminal
      let terminal = vscode.window.createTerminal();

      terminal.sendText("lazygit && exit");
      terminal.show();

      // Move the terminal to the editor area
      await vscode.commands.executeCommand(
        "workbench.action.terminal.moveToEditor"
      );

      // Move focus back to the editor view
      await vscode.commands.executeCommand(
        "workbench.action.focusActiveEditorGroup"
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
