export class widget extends Element
{
    componentDidMount()
    {
        const message = this.attributes["message"] || "?";

        const component = [
            <h1>{message}</h1>,
            <button .expand>+</button>,
            <button .collapse>-</button>,
        ];

        this.content(component);
    }

    ["on click at button.expand"]()
    {
        this.state.expanded = true;
    }

    ["on click at button.collapse"]()
    {
        this.state.collapsed = true;
    }
}
