export class Hello extends Element
{
    /**
     * Called when element is attached to the DOM tree
     * @return void
     */
    componentDidMount()
    {
        // get user attribute
        const user = this.attributes["user"] || "?";

        const component = <h1>Hello {user}!</h1>;

        // replace element content with component
        this.content(component);
    }
}
