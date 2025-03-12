/**
 * Component composing example
 *
 * https://gitlab.com/sciter-engine/sciter-js-sdk/-/blob/main/docs/md/reactor/component.md?ref_type=heads#composing-components
 */

export class WelcomeGroup extends Element {
    componentDidMount() {
        const group = [
            <welcome name="Ivan" />,
            <welcome name="Olga" />,
            <welcome name="Andrew" />,
        ];

        this.content(group);
    }
}

export class Welcome extends Element {
    componentDidMount() {
        // get name attribute
        const name = this.attributes.name ?? "anonymous";

        const welcome = <p>Hello, {name}!</p>;

        // replace element content with component
        this.content(welcome);
    }
}
