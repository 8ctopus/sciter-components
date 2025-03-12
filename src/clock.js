import Logger from "../node_modules/sciter-logger/src/logger.js";

export class Clock extends Element {
    // private variables
    #time;
    #debug;
    #stop;

    constructor() {
        // get console from parent
        Logger.setConsole();

        // call Element constructor
        super();

        this.#stop = false;
    }

    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount() {
        this.#debug = this.hasAttribute("debug");

        if (this.#debug)
            console.debug(this.tag, "componentDidMount");

        // render component
        this.render();

        // add timer to update component every second
        this.timer(1000, () => {
            this.componentUpdate({
                time: new Date(),
            });

            // true to keep the timer ticking
            return true;
        });
    }

    /**
     * Render component
     */
    render() {
        if (this.#debug)
            console.debug(this.tag, "render");

        if (this.#stop) {
            return;
        }

        // split time in its components
        const [hours, minutes, seconds] = new Date().toLocaleTimeString("en-US").split(/:| /);

        // JSX
        const component = <>
            <span>{hours}</span>
            <span>{minutes}</span>
            <span>{seconds}</span>
            <button>pause/resume</button>
        </>;

        // set component inner html
        this.content(component);
    }

    /**
     * Update component
     *
     * @param {object} properties
     */
    componentUpdate(properties) {
        if (this.#debug)
            console.debug(this.tag, "componentUpdate");

        // update time
        this.#time = properties.time;

        // re-render component html
        //this.render();

        // OR better call parent componentUpdate which will trigger the render
        super.componentUpdate();
    }

    /**
     * Called when element is detached from the DOM tree
     */
    componentWillUnmount() {
        if (this.#debug)
            console.debug(this.tag, "componentWillUnmount");

        // unset timer
        this.timer(1000);
    }

    /**
     * On button click
     *
     * @param {Event} _event
     * @param {Element} element
     */
    ["on click at button"](_event, _element) {
        this.#stop = !this.#stop;
    }
}
