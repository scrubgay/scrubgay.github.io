// to operate on projects page

// adds contents to TOC and adds a refer back link to table of contents
function populateTOC() {
    const contents = document.querySelectorAll("article > section:not(#toc)");
    const table = document.querySelector("article > section#toc > ul");

    /*                        <div class="prominent toc-return">
                            <a href="#toc">Return to top...</a>
                        </div> */
    // referback

    for (let content of contents) {
        // add to TOC
        let contentHeader = content.querySelector("h2");;
        if (contentHeader !== null) {
            let contentName = contentHeader.textContent;
            let id = content.id;

            let tableContent = document.createElement("a");
            tableContent.href = "#" + id;
            tableContent.textContent = contentName;

            let tableItem = document.createElement("li");
            tableItem.appendChild(tableContent);

            table.appendChild(tableItem);
        }

        // add refer back link
        let tocReturn = document.createElement("a");
        tocReturn.href = "#toc";
        tocReturn.textContent = "Return to top";
        let tocReturnDiv = document.createElement("div");
        tocReturnDiv.classList.add("prominent", "toc-return");
        tocReturnDiv.appendChild(tocReturn);

        content.appendChild(tocReturnDiv);
    }
    return;
}

function createCollapses() {
    const collapsibles = document.querySelectorAll(".collapsible");
    for (let collapsible of collapsibles) {
        let header = collapsible.querySelector("h2, h3");
        header.addEventListener("click", () => collapsible.classList.toggle("collapsed"));
        header.addEventListener('keydown', (event) => {
            if (event.code === 'Space' || event.code === 'Enter') {
              header.click();
            }
          });
    }
}

function createExpandAll() {
    const expandAllButton = document.querySelector(".toggleCollapseAll");
    const collapsibles = document.querySelectorAll(".collapsible");
    expandAllButton.addEventListener("click", () => {
        console.log(expandedAllFlag);
        if (expandedAllFlag) {
            expandedAllFlag = false;
            expandAllButton.textContent = "Collapse all";
            for (let collapsible of collapsibles) {
                if (collapsible.classList.contains("collapsed")) {
                    collapsible.classList.remove("collapsed");
                }
            }
        }
        else {
            expandedAllFlag = true;
            expandAllButton.textContent = "Expand all";
            for (let collapsible of collapsibles) {
                if (!(collapsible.classList.contains("collapsed"))) {
                    collapsible.classList.add("collapsed");
                }
            }
        }
    })
}

let expandedAllFlag = false;

populateTOC();
createCollapses();
createExpandAll();