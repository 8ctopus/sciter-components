export class Counter extends Element
{
    counter = 0;

    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount()
    {
        this.render();
    }

    /**
     * Render component
     */
    render()
    {
        this.innerHTML = `<button>click me</button> clicked <span>${this.counter}</span> times`;
    }

    /**
     * On button click event
     */
    ["on click at button"](event, button)
    {
        ++this.counter;

        this.render();
    }
}
