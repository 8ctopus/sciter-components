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
     */
    componentDidMount()
    {
        this.#debug = this.hasAttribute("debug");

        if (this.#debug)
            console.debug(this.tag, "componentDidMount");

        this.render();

        this.timer(1000, () => {
            this.componentUpdate({ time: new Date() });

            // to keep the timer ticking
            return true;
        });
    }

    /**
     * Update component
     * @param array props
     */
    componentUpdate(props)
    {
        if (this.#debug)
            console.debug(this.tag, "componentUpdate");

        this.#time = props.time;

        this.render();
    }

    /**
     * Render component
     */
    render()
    {
        if (this.#debug)
            console.debug(this.tag, "render");
        //<div styleset={__DIR__ + "clock.css#clock"}>

        const [hours, minutes, seconds] = new Date().toLocaleTimeString("en-US").split(/:| /)

        const component = (
            <div>
                <span>{hours}</span>
                <span>{minutes}</span>
                <span>{seconds}</span>
            </div>
        );

        this.content(component);
    }
}
