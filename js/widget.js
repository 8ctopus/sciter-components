export class Widget extends Element
{
    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount()
    {
        const message = this.attributes["message"] || "?";

        const component = (
            <div #widget>
                <h1>{message}</h1>
                <button .expand>+</button>
                <button .collapse>-</button>
            </div>
        );

        this.content(component);
    }

    ["on click at button.expand"](event)
    {
        this.state.expanded = true;
    }

    ["on click at button.collapse"](event)
    {
        this.state.collapsed = true;
    }
}
