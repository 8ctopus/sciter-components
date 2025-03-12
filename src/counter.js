export class Counter extends Element {
    // private variable
    #counter;

    constructor() {
        // call Element constructor
        super();

        this.#counter = 0;
    }

    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount() {
        this.render();
    }

    /**
     * Render component
     */
    render() {
        const component = <>
            <button #increment>+</button>
            <button #decrement>-</button>
            clicked <span>{this.#counter}</span> times
        </>;

        // replace element content with component
        this.content(component);
    }

    /**
     * On button click
     *
     * @param {Event} _event
     * @param {Element} element
     */
    ["on click at button"](_event, element) {
        element.id === "increment" ? ++this.#counter : --this.#counter;

        this.render();
    }
}
