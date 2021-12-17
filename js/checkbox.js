export class Checkbox extends Element
{
    constructor()
    {
        // call Element constructor
        super();
    }

    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount()
    {
        const id    = this.attributes["id"] || "?";
        const label = this.attributes["label"] || "?";

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

        this.content(component);
    }
}
