export class PageControl extends Element
{
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
        const headers = tabs.map(function(element, i) {
            i++;

            // get header caption
            const caption = element.attributes["caption"];

            // get header selected
            const selected = (element.attributes["selected"] == "") ? true : false;

            return (
                <div panel={"tabsheet-" + i} state-selected={selected}>{caption}</div>
            );
        });

        // create tabsheets
        const tabsheets = tabs.map(function(element, i) {
            i++;

            const expanded = (element.attributes["selected"] == "") ? true : false;

            const html = element.innerHTML;

            return (
                <div .tabsheet id={"tabsheet-" + i} state-expanded={expanded} state-html={html}>
                </div>
            );
        });

        // create pagecontrol
        const pagecontrol = (
            <div .pagecontrol styleset={__DIR__ + "../css/pagecontrol.css#pagecontrol"}>
                <div .header>
                    {headers}
                </div>
                {tabsheets}
            </div>
        );

        this.content(pagecontrol);
    }

    /**
     * Tabsheet header click event
     */
    ["on click at div.pagecontrol div.header > div"](event, control)
    {
        // get header
        const header = control.parentElement;

        // loop through header tabs
        for (let child of header.children)
            child.state.selected = false;

        // select clicked header
        control.state.selected = true;

        // get pagecontrol
        const pagecontrol = header.parentElement;

        // get expanded tabsheet
        let tabsheet = pagecontrol.querySelector("div.tabsheet:expanded");

        if (tabsheet != null)
            // hide expanded tabsheet
            tabsheet.state.expanded = false;
        else
            console.error("tabsheet element does not exist");

        // get tabsheet to expand
        const id = control.getAttribute("panel");

        tabsheet = pagecontrol.$("div.tabsheet#" + id);

        if (tabsheet != null)
            // expand tabsheet
            tabsheet.state.expanded = true;
        else
            console.error("tabsheet element does not exist");
    }
}
