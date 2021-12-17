export class Search extends Element
{
    /**
     * Called when element is attached to the DOM tree
     * @return void
     */
    componentDidMount()
    {
        //console.debug(this.tag, "componentDidMount");

        this.render();
    }

    /**
     * Render component
     * @return void
     */
    render()
    {
        //console.debug(this.tag, "render");

        const component = [
            <input|text />,
            <button .do>Search</button>
        ];

        this.content(component);
    }

    ["on click at button.do"](event, button) {
        console.debug(this.tag, "button click");

        // send search event
        this.post(new Event("do-search", {
            data: this.$("input").value
        }));
    }

    ["on change at input"](event, input) {
        console.debug(this.tag, this.value);

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
