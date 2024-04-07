async function get_methalis (url) {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json()
    }
    else {
        console.log(response.status)
        return null
    }
}

const get_myl = (methalis) => {
    const today = Math.floor(Date.now()/(1000*60*60*24));
    const random = new Math.seedrandom(today);
    const index = Math.floor((methalis.length+1) * random.quick());

    return methalis[index];
}

function insert_myl(myl) {

    const methali = document.querySelector("#methali");
    methali.textContent = myl.text;

    const exp = document.querySelector("#explanation")
    exp.textContent = myl.explanation;

    const source = document.querySelector("#citation");
    const source_link = document.createElement("a");
    source_link.textContent = "University of Illinois Center for African Studies";
    source_link.href = myl.source;
    source.appendChild(source_link);
    let cite_text = " ";
    for (let cit of myl.citations) {
        cite_text += cit.source + " " + cit.page + ". "
    }
    const cites = document.createTextNode(cite_text);
    source.appendChild(cites);
}

async function main() {
    const methalis = await get_methalis("methalis.json").then(data => data);
    const myl = get_myl(methalis);
    console.log(myl);
    insert_myl(myl);
}

main();