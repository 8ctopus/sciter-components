# sciter components

This project is an introduction to [sciter.js](https://sciter.com/) components. It explores how to build components using `Reactor` which is Sciter's equivalent to [ReactJS](https://reactjs.org/). Having experience with ReactJS is not required, but greatly helps in understanding sciter components.

All controls except the `checkbox` and `groupbox` come from examples found on the sciter website and documentation.

![sciter components](https://github.com/8ctopus/sciter-components/raw/master/screenshot.png)

## demo

- git clone the repository
- install packages `npm install`
- install latest sciter sdk `npm run install-sdk`
- start the demo `npm run scapp`

### demo requirements

- A recent version of Node.js `node` (tested with 22 LTS) and its package manager `npm`.
    - On Windows [download](https://nodejs.dev/download/) and run the installer
    - On Linux check the [installation guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-2-%E2%80%94-installing-node-js-with-apt-using-a-nodesource-ppa)

## components

### function components

The simplest component is just a function that returns a virtual node.

```js
function HelloWorld(attributes) {
    return <h2>hello {attributes.name}!</h2>;
};

// add component to body
document.body.content(<HelloWorld />);
```

Passed function arguments are:

```js
function HelloWorld(attributes, children [, parent])
```

### class components

Components can also extend on the `Element` class. Components are javascript modules therefore they use strict js syntax.
Here's the simplest example of such a component:

`index.css`

```css
hello {
    prototype: HelloWorld url("src/helloworld.js");
    display: block;
}
```

`src/helloworld.js`

```js
export class HelloWorld extends Element {
    constructor(props, children [, parent]) {
        // parent constructor
        super();
        ...
    }

    /// Called when element is attached to the DOM tree
    componentDidMount() {
        const html = <h1>Hello World!</h1>;

        this.content(html);
    }
}
```

When the component is attached to the DOM tree, `componentDidMount()` is called. Inside it, the inner HTML is created using JSX and finally added to the DOM tree using `content()`.

Reference: [https://sciter.com/tutorial-learn-sciters-html-components-in-5-minutes/](https://sciter.com/tutorial-learn-sciters-html-components-in-5-minutes/)

### key methods

The following methods are important for components:

- `componentDidMount()` - called once immediately after element was attached to the DOM tree

- `render()` - method that calls content() internally
  - `content(vnode)` - set element content (innerHTML)
  - `element.patch(vnode, [onlyChildren:true])` - alternative to `content()` patches content of the element by vnode using rules of React[or]. If second parameter is true, the function patches only children but not the element itself.

- `componentUpdate(props)` - patch properties and enqueue rendering (calls Element.`render()` method)

- `componentWillUnmount()` - called once immediately before Element removal from the DOM tree

_Note_: `componentDidMount`, `render`, `componentWillUnmount` do not exist in the `Element` class, only in the derived class.

### more methods

- `requestPaint()` WIP
- `clear()` WIP

### events

```jsx
["on eventname"](event) {}
["on eventname at selector"](event, selectorElement) {}
```

where:

- `on` marks the function as event handler
- `eventname` is the name of event – either a standard HTML one like `click`, `input`, `focus`, … or a custom event name
- `at` signifies that a selector will follow. The selector is the CSS selector of the child element inside this element. When event handler will be called, the `selectorElement` argument will  reference the matching child that generated the event.

### styling

Components can be styled using style sets.

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

The style set can also be assigned from code:

```jsx
const component = (
    <div styleset={__DIR__ + "clock.css#clock"}>
        <h2>{this.time.toLocaleTimeString()}</h2>
    </div>
);
```

### JSX

All components in this repo use `JSX`. JSX stands for JavaScript XML and it allows to write HTML code inside javascript.

JSX was directly integrated in sciter's javascript engine, while browsers only support JSX by using the `Babel` compiler.

#### rules

- A multi-line JSX expression must start on the same line as `=` or `return` or should be wrapped in parentheses. (The reason of this lies in the famous "Automatic semicolon insertion": https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi)

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
// doesn't work as there are two outermost elements
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

- JSX does not support “tail-less” HTML tags like: `<img>`, `<input>` or `<br>`, and you must close them with ` />`

```jsx
// doesn't work
<input type="checkbox">

// works
<input type="checkbox" />
```

- JSX elements inside an array must all be valid React elements, they must be enclosed within an HTML tag or a React fragment.

```jsx
// doesn't work
const component = [
    <button>click me</button>,
    button clicked <span>{this.counter}</span> times
];
```

_NOTE_: The issue here is that the second array item, button clicked <span>{this.counter}</span> times, contains raw text outside of JSX tags.

- variables inside JSX expressions must be enclosed in `{}`
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

- [Sciter components doc](https://gitlab.com/sciter-engine/sciter-js-sdk/-/blob/main/docs/md/reactor/component.md)
- [Sciter Reactor JSX](https://sciter.com/tutorials/reactor-jsx/)
- [Sciter JSX official documentation](https://github.com/c-smile/quickjspp/blob/master/doc/jsx.md)

## Sublime Text JSX support

Sublime Text 4 supports JSX out of the box (just update syntax for all .js files to use JSX)

Sublime Text 3 plugin to support JSX [https://packagecontrol.io/packages/Babel](https://packagecontrol.io/packages/Babel)
