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
        const component = `<button>click me</button> clicked <span>${this.counter}</span> times`;

        // option 1
        this.innerHTML = component;

        // option 2
        //this.content(component);
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
