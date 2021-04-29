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

        /*
        does not work because the line must start and end with html tags!
        const component = [
            <button>click me</button>,
            clicked <span>{this.counter}</span> times
        ];
        */

        // option 1 (preferred as it will process arrays)
        this.content(component);

        // option 2 (raw assign without processing)
        //this.innerHTML = component;
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
