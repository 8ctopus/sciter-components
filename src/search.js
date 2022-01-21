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
     * @param {object} _event
     * @param {Element} _button
     */
    ["on click at button.do"](_event, _button) {
        console.debug(this.tag, "button click");

        // send search event
        this.post(new Event("do-search", {
            data: this.$("input").value,
        }));
    }

    /**
     * On text enter
     * @param {object} _event
     * @param {Element} _input
     */
    ["on change at input"](_event, _input) {
        console.debug(this.tag, this.val);

        //this.showSuggestionsFor(input.value);
    }

    /**
     * Val property getter
     * @returns {string}
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
