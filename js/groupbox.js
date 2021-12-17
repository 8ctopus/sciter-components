export class GroupBox extends Element
{
    /**
     * Called when element is attached to the DOM tree
     * @return void
     */
    componentDidMount()
    {
        this.render();
    }

    /**
     * Render component
     * @return void
     */
    render()
    {
        const title = this.attributes["title"] ?? "";

        const html = `<legend>${title}</legend>` + this.innerHTML;

        // create groupbox
        const groupbox = (
            <fieldset styleset={__DIR__ + "groupbox.css#groupbox"} state-html={html} />
        );

        // replace element content with component
        this.content(groupbox);
    }
}
