/**
 * Component composing example
 * https://github.com/c-smile/sciter-js-sdk/blob/main/docs/md/reactor/components.md#composing-components
 */
export class Welcome extends Element
{
    componentDidMount()
    {
        this.render();
    }

    render()
    {
        const name = this.attributes["name"] ?? "";

        const welcome = (
            <h1>Hello, {name}!</h1>
        );

        this.content(welcome);
    }
}

export class WelcomeGroup extends Element
{
    componentDidMount()
    {
        this.render();
    }

    render()
    {
        const group = [
            <welcome name="Ivan" />,
            <welcome name="Olga" />,
            <welcome name="Andrew" />,
        ];

        this.content(group);
    }
}
