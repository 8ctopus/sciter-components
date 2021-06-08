export class Search extends Element
{
    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount()
    {
        //console.log("search - mount");

        this.render();
    }

    /**
     * Render component
     */
    render()
    {
        //console.log("search - render");

        const component = [
            <input|text />,
            <button .do>Search</button>
        ];

        this.content(component);
    }

    ["on click at button.do"](event, button) {
        console.log("search - click");

        this.post(new Event("do-search", {data: this.$("input").value} ));
    }

    ["on change at input"](event, input) {
        console.log("search - " + this.value());

        //this.showSuggestionsFor(input.value);
    }

    get value()
    {
        return this.$("input").value;
    }

    set value(value)
    {
        this.$("input").value = value;
    }
}
