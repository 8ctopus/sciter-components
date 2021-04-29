export class Hello extends Element
{
    componentDidMount()
    {
        var user = this.attributes["user"] || "?";
        this.content(<h1>Hello {user}!</h1>);
    }
}
