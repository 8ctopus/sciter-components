export class Checkbox extends Element
{
    componentDidMount()
    {
        const id    = this.attributes["id"] || "?";
        const label = this.attributes["label"] || "?";

        const component = (
            <div>
                <input type="checkbox" id="{id}" name="{id}"></input>
                <label for="{id}">{label}</label>
            </div>
        );

        this.content(component);
    }
}
