/**
 * A simple pagecontrol component
 * @author hello@octopuslabs.io
 */

// import functions from sciter libraries
import * as sys from "@sys";
import {encode,decode} from "@sciter";

export class PageControl extends Element
{
    constructor()
    {
        super();
    }

    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount()
    {
        this.render();
    }

    /**
     * Render component
     */
    render()
    {
        // get tabs
        const tabs = this.$$("tab");

        // create tab headers
        const headers = this.createHeaders();

        // create tabsheets
        const tabsheets = this.createTabsheets();

        // header position
        const position = this.attributes["header"] ?? "";

        let headersFirst = true;
        let classes      = "";

        switch (position) {
            case "right":
                headersFirst = false;
                classes      = "side";
                break;

            case "bottom":
                headersFirst = false;
                break;

            case "left":
                classes = "side";
                break;
        }

        // create pagecontrol
        const pagecontrol = (
            <div class={classes} styleset={__DIR__ + "../css/pagecontrol.css#pagecontrol"}>
                {headersFirst ? headers : tabsheets}
                {headersFirst ? tabsheets : headers}
            </div>
        );

        this.content(pagecontrol);
    }

    /**
     * Create headers
     * @return JSX expression
     */
    createHeaders()
    {
        // get tabs
        const tabs = this.$$("tab");

        // create headers
        let headers = tabs.map(function(element, i) {
            i++;

            // get caption
            const caption = element.attributes["title"] || `tab ${i}`;

            // get selected
            const selected = (element.attributes["selected"] == "") ? true : false;

            return (
                <div panel={"tabsheet-" + i} state-selected={selected}>{caption}</div>
            );
        });

        headers = (
            <div .header>
                {headers}
            </div>
        );

        return headers;
    }

    /**
     * Create tabsheets
     * @return JSX expression
     */
    createTabsheets()
    {
        // get tabs
        const tabs = this.$$("tab");

        // create tabsheets
        let tabsheets = tabs.map(function(element, i) {
            i++;

            const expanded = (element.attributes["selected"] == "") ? true : false;

            const src = element.attributes["src"] || null;

            let html         = "";
            let stylesetname = "";

            if (!src)
                html = element.innerHTML;
            else {
                // read file
                const buffer = sys.fs.$readfile(src);

                // decode buffer
                html = decode(buffer, "utf-8");

                // search file for css style
                const matches = html.match(/<style>([^<]*?)<\/style>/);

                if (matches != null) {
                    // remove style from html
                    html = html.replace(matches[0], "");

                    // get style
                    const style = matches[1];

                    // set styleset name
                    stylesetname = `tabsheet-${i}`;

                    // create styleset
                    let styleset = `@set ${stylesetname} { ${style} }`;

                    // inject styleset in head
                    document.head.insertAdjacentHTML("beforeend", `<style> ${styleset} </style>`);

                    // set styleset name for component
                    stylesetname = `#${stylesetname}`;
                }
            }

            return (
                <div .tabsheet id={"tabsheet-" + i} state-expanded={expanded} state-html={html} styleset={stylesetname} />
            );
        });

        tabsheets = (
            <div .tabsheets>
                {tabsheets}
            </div>
        );

        return tabsheets;
    }

    /**
     * Tabsheet header click event
     * @param string event
     * @param element clicked element
     */
    ["on click at pagecontrol div.header > div"](event, element)
    {
        // unselect all headers
        this.unselectHeaders();

        // collapse all tabs
        this.collapseTabs();

        // select clicked header
        element.state.selected = true;

        // get tabsheet to expand
        const id = element.getAttribute("panel");

        this.expandTab(id);
    }

    /**
     * Unselect all headers
     * @return void
     */
    unselectHeaders()
    {
        const header = this.$("div.header");

        // loop through header tabs
        for (let child of header.children)
            child.state.selected = false;
    }

    /**
     * Collapse all tabs
     * @return void
     */
    collapseTabs()
    {
        const tabsheet = this.querySelector("div.tabsheet:expanded");

        if (tabsheet != null)
            // hide expanded tabsheet
            tabsheet.state.expanded = false;
    }

    /**
     * Expand tab
     * @param string tab id
     * @return void
     */
    expandTab(id)
    {
        let tabsheet = this.$("div.tabsheet#" + id);

        if (tabsheet != null)
            // expand tabsheet
            tabsheet.state.expanded = true;
        else
            console.error("tabsheet element does not exist");
    }

    /**
     * Set tab by id
     * @param string tab id
     * @return void
     */
    setTab(id)
    {
        // unselect all headers
        this.unselectHeaders();

        // collapse all tabs
        this.collapseTabs();

        // expand tab
        this.expandTab(id);

        // select header
        const header = this.$("div.header div[panel=" + id + "]");

        header.state.selected = true;
    }

    /**
     * Show next tab
     * @return void
     */
    nextTab()
    {
        this.previousNextTab(+1);
    }

    /**
     * Show previous tab
     * @return void
     */
    previousTab()
    {
        this.previousNextTab(-1);
    }

    /**
     * Show previous or next tab
     * @param int +1 next, -1 previous
     * @return void
     */
    previousNextTab(direction)
    {
        // get selected header
        const header = this.$("div.header div:selected");

        let next = (direction == +1) ? header.nextElementSibling : header.previousElementSibling;

        if (next == null) {
            const parent = header.parentElement;

            next = (direction == +1) ? parent.firstChild : parent.lastChild;
        }

        this.setTab(next.attributes["panel"]);
    }

    /**
     * Toggle header visibility
     * @return void
     */
    toggleHeader()
    {
        // get header
        const header = this.$("div.header");

        header.classList.toggle("hide");
    }
}
