export class GroupBox extends Element {
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
        const title = this.attributes.title ?? "default title";

        const html = `<legend>${title}</legend>` + this.innerHTML;

        const groupbox = <fieldset state-html={html} />;

        this.content(groupbox);
    }
}
