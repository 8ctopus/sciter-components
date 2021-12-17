export class Clock extends Element
{
    #time;

    constructor()
    {
        super();

        this.#time = new Date();
    }

    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount()
    {
        //console.log("clock - mount");

        this.render();

        this.timer(1000, () => {
            this.componentUpdate({ time: new Date() });

            // to keep the timer ticking
            return true;
        });
    }

    /**
     * Render component
     */
    render()
    {
        //console.log("clock - render");
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

    /**
     * Update component
     * @param array props
     */
    componentUpdate(props)
    {
        //console.log("clock - update");

        this.#time = props.time;

        this.render();
    }
}
