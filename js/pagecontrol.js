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
        const str = this.attributes["tabs"] || "";

        const tabs = str.split(",");

        // create tab headers
        let headers = tabs.map(function(i) {
            let selected = (i == 1) ? "selected" : "";

            return (
                <div panel={"tabsheet-" + i} {selected}>tab {i}</div>
            );
        });

        // create tabsheets
        let tabsheets = tabs.map(function(i) {
            let expanded = (i == 1) ? "expanded" : "";

            return (
                <div .tabsheet id={"tabsheet-" + i} {expanded}>
                    <p> tabsheet {i} content </p>
                </div>
            );
        });

        const component = (
            <div .pagecontrol styleset={__DIR__ + "../css/pagecontrol.css#pagecontrol"}>
                <div .header>
                    {headers}
                </div>
                {tabsheets}
            </div>
        );

        this.content(component);
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

        console.log(id);

        tabsheet = pagecontrol.$("#" + id);

        if (tabsheet != null)
            // expand tabsheet
            tabsheet.state.expanded = true;
        else
            console.error("tabsheet element does not exist");
    }
}
