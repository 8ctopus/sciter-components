export class GroupBox extends Element
{
    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount()
    {
        this.render();
    }

    /**
     * Render component
     */
    render()
    {
        // get title attribute
        const title = this.attributes["title"] ?? "";

        const html = `<legend>${title}</legend>` + this.innerHTML;

        // create groupbox
        //const groupbox = <fieldset styleset={__DIR__ + "groupbox.css#groupbox"} state-html={html} />;
        const groupbox = <fieldset state-html={html} />;

        // replace element content with component
        this.content(groupbox);
    }
}
