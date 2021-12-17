/**
 * Component composing example
 * https://github.com/c-smile/sciter-js-sdk/blob/main/docs/md/reactor/components.md#composing-components
 */

export class WelcomeGroup extends Element
{
    componentDidMount()
    {
        const group = [
            <welcome name="Ivan" />,
            <welcome name="Olga" />,
            <welcome name="Andrew" />,
        ];

        this.content(group);
    }
}

export class Welcome extends Element
{
    componentDidMount()
    {
        const name = this.attributes["name"] ?? "";

        const welcome = (
            <p>Hello, {name}!</p>
        );

        // replace element content with component
        this.content(welcome);
    }
}
