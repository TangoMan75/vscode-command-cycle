![GH language](https://img.shields.io/github/languages/top/TangoMan75/vscode-command-cycle)
[![GH release](https://img.shields.io/github/v/release/TangoMan75/vscode-command-cycle)](https://github.com/TangoMan75/vscode-command-cycle/releases)
[![GH license](https://img.shields.io/github/license/TangoMan75/vscode-command-cycle)]((https://github.com/TangoMan75/vscode-command-cycle/blob/master/LICENSE))
[![GH stars](https://img.shields.io/github/stars/TangoMan75/vscode-command-cycle)](https://github.com/TangoMan75/vscode-command-cycle/stargazers)
[![VSCode Extension CI](https://github.com/TangoMan75/vscode-command-cycle/workflows/VSCode%20Extension%20CI/badge.svg)](https://github.com/TangoMan75/vscode-command-cycle/actions/workflows/shellcheck.yml)
![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FTangoMan75%2Fvscode-command-cycle&labelColor=%23697689&countColor=%2337d67a&style=flat)

🔁 TangoMan vscode-command-cycle
================================

The **TangoMan vscode-command-cycle** extension for _Visual Studio Code_ enables the repeated execution of a user-defined sequence of commands. These command sequences are configured within the `keybindings.json` file, providing a customizable workflow.

🚀 Installation
---------------

### Step 1: Install the Extension

Install the extension directly from the Visual Studio Code marketplace or via the command line:

```bash
code --install-extension TangoMan75.command-cycle
```

Or install the `.vsix` package manually:

1. Open the Extensions View in VSCOde.
2. Click on the Extensions icon in the Activity Bar.
3. Click on the three dots icon in the top right corner.
4. From the dropdown menu that appears, select "Install from VSIX...".

### Step 2: Configure Keybindings

Edit your VSCode keybindings configuration in `keybindings.json` file to define the commands to cycle.

For example, while using `wmaurer.change-case` extension you can cycle through various text case transformations (e.g., sentence case, title case, camelCase, etc.) by pressing `ctrl+k ctrl+t` repeatedly.

```json
{
    "key": "ctrl+k ctrl+t",
    "command": "command-cycle.loop",
    "args": {
        "commands": [
            "extension.changeCase.sentence",
            "extension.changeCase.title",
            "extension.changeCase.camel",
            "extension.changeCase.pascal"
        ]
    },
    "when": "editorTextFocus && !editorReadonly"
},
```

Replace the commands in the `commands` array with the ones you want to cycle through.

🔥 Usage
--------

1. Press the keybinding you configured (e.g., `ctrl+k ctrl+t`).
2. The extension will execute the commands in the order specified in the `commands` array.
3. Each subsequent key press will execute the next command in the cycle.

📝 Notes
--------

- Ensure that the commands you specify in the `commands` array are valid Visual Studio Code commands.
- You can find available commands by opening the Command Palette (`Ctrl+Shift+P`) and typing `>`.

🤝 Contributing
---------------

Thank you for your interest in contributing to **TangoMan vscode-command-cycle**.

Please review the [code of conduct](https://github.com/TangoMan75/vscode-command-cycle/blob/master/CODE_OF_CONDUCT.md) and [contribution guidelines](https://github.com/TangoMan75/vscode-command-cycle/blob/master/CONTRIBUTION.md) before starting to work on any features.

If you want to open an issue, please check first if it was not [reported already](https://github.com/TangoMan75/vscode-command-cycle/issues) before creating a new one.

📜 License
----------

Copyrights (c) 2025 &quot;Matthias Morin&quot; &lt;mat@tangoman.io&gt;

[![License](https://img.shields.io/badge/Licence-MIT-green.svg)](LICENSE)
Distributed under the MIT license.

If you like **TangoMan vscode-command-cycle** please star, follow or tweet:

[![GitHub stars](https://img.shields.io/github/stars/TangoMan75/vscode-command-cycle?style=social)](https://github.com/TangoMan75/vscode-command-cycle/stargazers)
[![GitHub followers](https://img.shields.io/github/followers/TangoMan75?style=social)](https://github.com/TangoMan75)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FTangoMan75%2Fvscode-command-cycle)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FTangoMan75%2Fvscode-command-cycle)

... And check my other cool projects.
