export class Clock extends Element
{
    time = new Date();

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

        const component = (
            <div styleset={__DIR__ + "clock.css#clock"}>
                <h2>{this.time.toLocaleTimeString()}</h2>
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

        this.time = props.time;

        this.render();
    }
}
