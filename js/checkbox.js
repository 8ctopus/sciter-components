export class checkbox extends Element
{
    componentDidMount()
    {
        const id    = this.attributes["id"] || "?";
        const label = this.attributes["label"] || "?";

        // option 1
        const component1 = (
            <div>
                <input type="checkbox" id="{id}" name="{id}"></input>
                <label for="{id}">{label}</label>
            </div>
        );

        // option 2
        const component2 = [
            <input type="checkbox" id="{id}" name="{id}"></input>,
            <label for="{id}">{label}</label>
        ];

        this.content(component2);
    }
}
