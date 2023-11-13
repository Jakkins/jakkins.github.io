# use case, project init

## use case

1. the user will like, or dislike a phrase
2. the phrase will be sent to the algorithm
3. the phrase will have a +1 or a -1 based on user action

## init project and a first test

### install rust

> in windows use wsl 2

```bash
# https://rustup.rs/
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# rustup self uninstall
cargo new --bin project_name
```

### setup vscode

#### plugins

- rust-analyzer extension or vscode-rust: provides code analysis and editing features
	- code completition, code navigation, etc...
	- when in doubt, try both
- CodeLLDB extension: debugger
- [not maintained anymore, use rust-analyzer] Rust Test Lens: for testing
- [deprecated] Better TOML: syntax highlighting and validation for TOML files
	- Even Better TOML

##### vscode-rust vs rust-analyzer

Both the "vscode-rust" plugin and the "rust-analyzer" extension are tools for Rust development in Visual Studio Code, but they have some differences in terms of features, performance, and development status.

1. Features:
    
    - "vscode-rust" plugin: It provides a range of features such as IntelliSense, syntax highlighting, code formatting, code navigation, error checking, debugging support, test runner, Cargo integration, and documentation integration.
    - "rust-analyzer" extension: It offers advanced code analysis and editing features, including code completion, code navigation, code formatting, diagnostics, refactoring support, documentation integration, and macro expansion.

2. Performance:
   
    - "vscode-rust" plugin: It uses the Rust Language Server (RLS) as the backend, which can sometimes have performance issues, especially in large codebases.
    - "rust-analyzer" extension: It is built from scratch with a focus on performance and aims to provide faster and more reliable code analysis and editing capabilities.

3. Development Status:

    - "vscode-rust" plugin: It has been around for a longer time and has a larger user base. However, the development of the RLS backend has been slower, and there have been some stability and performance issues.
    - "rust-analyzer" extension: It is a newer project that aims to address the limitations of the RLS. It is actively developed and has gained popularity for its improved performance and features.

In summary, the "vscode-rust" plugin is a mature and widely used extension with a comprehensive set of features, while the "rust-analyzer" extension is a newer and more performant alternative that focuses on advanced code analysis and editing capabilities. Depending on your specific needs and preferences, you can choose the one that best suits your Rust development workflow in Visual Studio Code.




