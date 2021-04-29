export class Checkbox extends Element
{
    componentDidMount()
    {
        const id    = this.attributes["id"] || "?";
        const label = this.attributes["label"] || "?";

        // A multi-line JSX expression must be wrapped in parentheses.
        // A JSX expression must have exactly one outermost element.
        const component = (
            <div>
                <input type="checkbox" id="{id}" name="{id}"></input>
                <label for="{id}">{label}</label>
            </div>
        );

        this.content(component);
    }
}
