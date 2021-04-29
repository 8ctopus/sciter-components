# sciter components demo app

This is a [sciter.js](https://sciter.com/) components demo app.

    https://sciter.com/tutorial-learn-sciters-html-components-in-5-minutes/

## get started

- git clone the repository
- run `install.bat` to download the latest sciter binaries and library
- start `scapp.exe`
- to refresh the app after changes to the html/css click `F5`

## debug app

- start `inspector.exe`
- inside the `scapp.exe` window click `CTRL + SHIFT + I` to connect to the inspector
- click `CTRL + SHIFT + left click` to inspect an element

## JSX

The components in this demo use JSX. JSX stands for JavaScript XML and it allows to write HTML inside javascript.

JSX was directly integrated in sciter's javascript engine, while browser javascript only support JSX by using the Babel compiler.

[Sciter's JSX official documentation](https://github.com/c-smile/quickjspp/blob/master/doc/jsx.md)

### rules

- A JSX expression must have exactly one outermost element
- A multi-line JSX expression must be wrapped in parentheses
- HTML elements must be properly closed, don't forget to close empty elements with `/>`
- variables within JSX must be enclosed in `{ }`
