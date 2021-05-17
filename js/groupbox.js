/**
 * A simple groupbox component
 * @author hello@octopuslabs.io
 */

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
        const title = this.attributes["title"] ?? "";

        const html = `<legend>${title}</legend>` + this.innerHTML;

        // create groupbox
        const groupbox = (
            <fieldset styleset={__DIR__ + "groupbox.css#groupbox"} state-html={html} />
        );

        this.content(groupbox);
    }
}
