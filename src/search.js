export class Search extends Element {
    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount() {
        //console.debug(this.tag, "componentDidMount");

        const component = [
            <input type="text" />,
            <button class="do">Search</button>,
        ];

        // replace element content with component
        this.content(component);
    }

    /**
     * On button click
     * @param {object} event
     * @param {Element} button
     */
    ["on click at button.do"](event, button) {
        console.debug(this.tag, "button click");

        // send search event
        this.post(new Event("do-search", {
            data: this.$("input").value,
        }));
    }

    /**
     * On text enter
     * @param {object} event
     * @param {Element} input
     */
    ["on change at input"](event, input) {
        console.debug(this.tag, this.val);

        //this.showSuggestionsFor(input.value);
    }

    /**
     * Val property getter
     */
    get val() {
        return this.$("input").value;
    }

    /**
     * Val property setter
     * @param {string} value
     */
    set val(value) {
        this.$("input").value = value;
    }
}
