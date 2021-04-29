export class Hello extends Element
{
    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount()
    {
        const user = this.attributes["user"] || "?";

        const component = <h1>Hello {user}!</h1>;

        this.content(component);
    }
}
