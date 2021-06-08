export class Checkbox extends Element
{
    constructor()
    {
        super();
    }

    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount()
    {
        const id    = this.attributes["id"] || "?";
        const label = this.attributes["label"] || "?";

        // option 1 using one outermost element
        const component1 = (
            <div>
                <input type="checkbox" id={id} name={id} />
                <label for={id}>{label}</label>
            </div>
        );

        // option 2 using an array
        const component2 = [
            <input type="checkbox" id={id} name={id} />,
            <label for={id}>{label}</label>
        ];

        /*
        doesn't work
        const component3 = [
            <input|checkbox #{id} ({id})></input>,
            <label for="{id}">{label}</label>
        ];
        */

        this.content(component2);
    }
}
