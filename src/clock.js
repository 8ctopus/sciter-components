export class Clock extends Element
{
    // private variables
    #time;
    #debug;

    constructor()
    {
        // call Element constructor
        super();
    }

    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount()
    {
        this.#debug = this.hasAttribute("debug");

        if (this.#debug)
            console.debug(this.tag, "componentDidMount");

        // set time
        this.#time = new Date();

        // render component
        this.render();

        // add timer to update component every second
        this.timer(1000, () => {
            this.componentUpdate({
                time: new Date(),
            });

            // to keep the timer ticking
            return true;
        });
    }

    /**
     * Render component
     */
    render()
    {
        if (this.#debug)
            console.debug(this.tag, "render");

        // split time in its components
        const [hours, minutes, seconds] = new Date().toLocaleTimeString("en-US").split(/:| /);

        // JSX
        const component = <>
            <span>{hours}</span>
            <span>{minutes}</span>
            <span>{seconds}</span>
            <button>DEL</button>
        </>;

        // set component inner html
        this.content(component);
    }

    /**
     * Update component
     * @param {object} props
     */
    componentUpdate(props)
    {
        if (this.#debug)
            console.debug(this.tag, "componentUpdate");

        // update time
        this.#time = props.time;

        // re-render component html
        //this.render();

        // OR better call parent componentUpdate which will trigger the render
        super.componentUpdate();
    }

    /**
     * Called when element is detached from the DOM tree
     */
    componentWillUnmount()
    {
        if (this.#debug)
            console.debug(this.tag, "componentWillUnmount");

        // unset timer
        this.timer(1000, null);
    }

    /**
     * On button click
     */
    ["on click at button"]()
    {
        this.remove();
    }
}
