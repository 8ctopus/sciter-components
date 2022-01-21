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
            <button>click me</button>
            clicked <span>{this.#counter}</span> times
        </>;

        /*
        does not work because the line must start and end with html tags!
        const component = [
            <button>click me</button>,
            button clicked <span>{this.counter}</span> times
        ];
        */

        // replace element content with component
        this.content(component);
    }

    /**
     * On button click event
     * @param {object} event
     * @param {Element} element
     */
    ["on click at button"](_event, _element) {
        ++this.#counter;

        this.render();
    }
}
