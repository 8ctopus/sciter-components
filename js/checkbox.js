export class Checkbox extends Element
{
    /**
     * Called when element is attached to the DOM tree
     * @return void
     */
    componentDidMount()
    {
        // get attributes
        const id    = this.attributes["id"] || "?";
        const label = this.attributes["label"] || "?";

        // create component html
        // option 1 using one outermost element fragment
        let component = (
            <>
                <input type="checkbox" id={id} name={id} />
                <label for={id}>{label}</label>
            </>
        );

        // option 2 using an array
        component = [
            <input type="checkbox" id={id} name={id} />,
            <label for={id}>{label}</label>
        ];

        // replace element content with component
        this.content(component);
    }
}
