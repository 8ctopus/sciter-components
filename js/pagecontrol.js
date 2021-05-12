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
        const component = (
            <div .pagecontrol styleset={__DIR__ + "../css/pagecontrol.css#pagecontrol"}>
                <div .header>
                    <div panel="tabsheet-id1">first tab</div>
                    <div panel="tabsheet-id2" selected>second tab</div>
                    <div panel="tabsheet-id3">third tab</div>
                </div>
                <div .tabsheet #tabsheet-id1>
                    <p> first tabsheet content </p>
                </div>
                <div .tabsheet #tabsheet-id2 expanded>
                    <p> second tabsheet content </p>
                </div>
                <div .tabsheet #tabsheet-id3>
                    <p> third tabsheet content </p>
                </div>
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

        // hide expanded tabsheet
        tabsheet.state.expanded = false;

        // get tabsheet to expand
        const id = control.getAttribute("panel");

        tabsheet = pagecontrol.$("div.tabsheet#" + id);

        // expand tabsheet
        tabsheet.state.expanded = true;
    }
}
