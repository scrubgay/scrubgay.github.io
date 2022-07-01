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

createCollapses();
createExpandAll();