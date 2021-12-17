export class Clock extends Element
{
    // private variables
    #time;
    #debug;

    constructor()
    {
        // call Element constructor
        super();

        this.#time = new Date();
    }

    /**
     * Called when element is attached to the DOM tree
     * @return void
     */
    componentDidMount()
    {
        this.#debug = this.hasAttribute("debug");

        if (this.#debug)
            console.debug(this.tag, "componentDidMount");

        // render component
        this.render();

        // add timer to update component every second
        this.timer(1000, () => {
            this.componentUpdate({
                time: new Date()
            });

            // to keep the timer ticking
            return true;
        });
    }

    /**
     * Update component
     * @param object props
     * @return void
     */
    componentUpdate(props)
    {
        if (this.#debug)
            console.debug(this.tag, "componentUpdate");

        // update time
        this.#time = props.time;

        // re-render component
        this.render();
    }

    /**
     * Render component
     * @return void
     */
    render()
    {
        if (this.#debug)
            console.debug(this.tag, "render");
        //<div styleset={__DIR__ + "clock.css#clock"}>

        // split time in its components
        const [hours, minutes, seconds] = new Date().toLocaleTimeString("en-US").split(/:| /)

        // JSX
        const component = (
            <div>
                <span>{hours}</span>
                <span>{minutes}</span>
                <span>{seconds}</span>
            </div>
        );

        // replace element content with component
        this.content(component);
    }
}
