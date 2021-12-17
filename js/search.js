export class Search extends Element
{
    /**
     * Called when element is attached to the DOM tree
     * @return void
     */
    componentDidMount()
    {
        //console.debug(this.tag, "componentDidMount");

        const component = [
            <input|text />,
            <button .do>Search</button>
        ];

        // replace element content with component
        this.content(component);
    }

    /**
     * On button click
     */
    ["on click at button.do"](event, button) {
        console.debug(this.tag, "button click");

        // send search event
        this.post(new Event("do-search", {
            data: this.$("input").value
        }));
    }

    /**
     * On text enter
     */
    ["on change at input"](event, input) {
        console.debug(this.tag, this.val);

        //this.showSuggestionsFor(input.value);
    }

    /**
     * Val property getter
     */
    get val()
    {
        return this.$("input").value;
    }

    /**
     * Val property setter
     */
    set val(value)
    {
        this.$("input").value = value;
    }
}
