# sciter components

This is a [sciter.js](https://sciter.com/) components demo.

It explores how to build components using `Reactor` which is Sciter's equivalent to [ReactJS](https://reactjs.org/).

All controls except the `checkbox`, `groupbox` and `pagecontrol` come from examples found on the sciter website and documentation. The pagecontrol development was moved [here](https://github.com/8ctopus/sciter-pagecontrol).

![sciter components](screenshot.png)

## demo

- git clone the repository
- on Linux/Mac `chmod +x install.sh start.sh`
- run `install.bat` (Win) or `./install.sh` (Linux/Mac) to download the latest sciter binaries and the sciter package manager
- install packages `php bin/spm.phar install`
- run `start.bat` (Win) or `./start.sh` (Linux/Mac)

## JSX

The components in this demo use JSX. JSX stands for JavaScript XML and it allows to write HTML inside javascript.

JSX was directly integrated in sciter's javascript engine, while browser javascript only support JSX by using the Babel compiler.

### rules

- A multi-line JSX expression must start on the same line as `=` or `return ` or should be wrapped in parentheses. (The reason of this lies in the famous "Automatic semicolon insertion": https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi)

```jsx
const component = <p>
    a paragraph
</p>;
```

```jsx
const component = (
    <p> a paragraph </p>
);
```

- A JSX expression must have exactly one outermost element, or use an array, or use a fragment.

```jsx
// doesn't work
const component = (
    <p> first paragraph </p>
    <p> second paragraph </p>
);

// works
const component = (
    <div>
        <p> first paragraph </p>
        <p> second paragraph </p>
    </div>
);

// array alternative that works
const component = [
    <p> first paragraph </p>,
    <p> second paragraph </p>
];

// fragment alternative that also works
const component = <>
    <p> first paragraph </p>
    <p> second paragraph </p>
</>;
```

- JSX does not support “tail-less” HTML tags like: `<img>`, `<input>` or `<br>`, close them with ` />`

```jsx
// doesn't work
<input type="checkbox">

// works
<input type="checkbox" />
```

- variables inside JSX expressions must be enclosed in `{ }`
- JSX doesn't support variable interpolation inside an attribute value

```jsx
// doesn't work
<input type="checkbox" id="{id}" name="{id}" />

// works
<input type="checkbox" id={id} name={id} />
```

- specify state with `state-`

```jsx
const component = 
  <div state-selected={ selected } />
```

- specify component value

```jsx
<checkbox state-value="checked" />
```

- adding literal html content

```jsx
const html = "<b>some</b> literal <i>HTML</i>";
<div state-html={html} />
```

- using a variable for tag name

```jsx
JSX(tagName, {id: "hw"}, ["Hello, world!"]);
```

More rules and examples can be found here

- [Sciter Reactor JSX](https://sciter.com/tutorials/reactor-jsx/)
- [Sciter JSX official documentation](https://github.com/c-smile/quickjspp/blob/master/doc/jsx.md)

## components

Components javascript code is set to strict.

### basics

[https://sciter.com/tutorial-learn-sciters-html-components-in-5-minutes/](https://sciter.com/tutorial-learn-sciters-html-components-in-5-minutes/)

### lifecycle

Sciter out of the box provides three lifecycle methods:

- `constructor()` called when DOM element is not attached to the DOM yet
- `componentDidMount()` called once when element is attached to DOM tree
- `componentWillUnmount()` called once immediately before removal from DOM tree
- `componentUpdate(props)` call this method to update the state of the element
- `render()`

### events

```
["on eventname"](event) {}
["on eventname at selector"](event, selectorElement) {}
```

where:

- `on ` marks the function as event handler
- eventname is a name of event – either standard HTML’s one like click, input, focus, … or custom event name
- ` at ` - [optional] signifies that selector will follow. selector is CSS selector of child element inside this element. When event handler will be triggered selectorElement argument of the function will get reference to the matching child that generated the event.

## styling

Components can be styled with style sets.

```css
clock {
    prototype: Clock url('clock.js');
    style-set: clock;
}

@set clock {
    :root {
        ...
    }

    span {
        ...
    }
}
```

`:root` stands for the clock element and `:root` is needed for styling the element itself and using other selectors on it like immediate children.

The style set can also be assigned from the code

```jsx
const component = (
    <div styleset={__DIR__ + "clock.css#clock"}>
        <h2>{this.time.toLocaleTimeString()}</h2>
    </div>
);
```

## Sublime Text 3 JSX support

[https://packagecontrol.io/packages/Babel](https://packagecontrol.io/packages/Babel)
