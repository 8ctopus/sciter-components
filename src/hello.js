export class Hello extends Element {
    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount() {
        // get user attribute
        const user = this.attributes.user || "anonymous";

        const component = <h1>Hello {user}!</h1>;

        // replace element content with component
        this.content(component);
    }
}
