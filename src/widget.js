export class Widget extends Element {
    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount() {
        this.render();
    }

    /**
     * Render component
     */
    render() {
        const message = this.attributes.message || "?";

        const component = (
            <>
                <h1>{message}</h1>
                <button class="expand">+</button>
                <button class="collapse">-</button>
            </>
        );

        // replace element content with component
        this.content(component);
    }

    /**
     * On click expand button
     *
     * @param {Event} _event
     * @param {Element} _element
     */
    ["on click at button.expand"](_event, _element) {
        this.state.expanded = true;

        // no need to call render explicitly, it's called automatically because state changes are watched
    }

    /**
     * On click collapse button
     *
     * @param {Event} _event
     * @param {Element} _element
     */
    ["on click at button.collapse"](_event, _element) {
        this.state.expanded = false;

        // no need to call render explicitly, it's called automatically because state changes are watched
    }
}
