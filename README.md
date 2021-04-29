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

[Sciter Reactor JSX](https://sciter.com/tutorials/reactor-jsx/)
[Sciter's JSX official documentation](https://github.com/c-smile/quickjspp/blob/master/doc/jsx.md)

### rules

- A JSX expression must have exactly one outermost element or use an array
- A multi-line JSX expression must be wrapped in parentheses
- JSX does not support “tail-less” HTML tags like: `<img>`, `<input>` or `<br>`, close them with ` />`
- variables` within `JSX `must`be enclosed in `{ }`

## components

### basics

[https://sciter.com/tutorial-learn-sciters-html-components-in-5-minutes/](https://sciter.com/tutorial-learn-sciters-html-components-in-5-minutes/)

### lifecycle

Sciter out of the box provides three lifecycle methods:

- `constructor(props,kids,parent)` called when DOM element is not attached to the DOM yet
- `componentDidMount()` called once when element is attached to DOM tree
- `componentWillUnmount()` called once immediately before removal from DOM tree
- `componentUpdate(props)` call this method to update the state of the element
- `render(props,kids)`

### events

```
["on eventname"](event) {}
["on eventname at selector"](event, selectorElement) {}
```

Where:

- `on ` marks the function as event handler
- eventname is a name of event – either standard HTML’s one like click, input, focus, … or custom event name
- ` at ` - [optional] signifies that selector will follow. selector is CSS selector of child element inside this element. When event handler will be triggered selectorElement argument of the function will get reference to the matching child that generated the event.

## Sublime Text JSX support

    https://packagecontrol.io/packages/Babel

