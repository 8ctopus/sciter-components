export class Widget extends Element
{
    /**
     * Called when element is attached to the DOM tree
     * @return void
     */
    componentDidMount()
    {
        this.#render();
    }

    /**
     * Render component
     * @return void
     */
    #render()
    {
        const message = this.attributes["message"] || "?";

        const component = (
            <>
                <h1>{message}</h1>
                <button .expand>+</button>
                <button .collapse>-</button>
            </>
        );

        // replace element content with component
        this.content(component);
    }

    /**
     * On click expand button
     */
    ["on click at button.expand"](event, element)
    {
        this.state.expanded = true;

        // no need to call render, it's called automatically
    }

    /**
     * On click collapse button
     */
    ["on click at button.collapse"](event, element)
    {
        this.state.expanded = false;

        // no need to call render, it's called automatically
    }
}
