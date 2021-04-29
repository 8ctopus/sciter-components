export class hello extends Element
{
    componentDidMount()
    {
        const user = this.attributes["user"] || "?";

        const component = <h1>Hello {user}!</h1>;

        this.content(component);
    }
}
