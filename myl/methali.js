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
    const anch = document.querySelector("main");

    const h1 = document.createElement("h1");
    h1.textContent = "Methali ya leo...";

    const h2 = document.createElement("h2");
    h2.textContent = myl.text;

    const exp = document.createElement("p");
    const exptext = document.createElement("em");
    exptext.textContent = myl.explanation;
    exp.appendChild(exptext);

    const source = document.createElement("p");
    source.textContent = "Sourced from the University of Illinois, Urbana-Champaign, Center for African Studies (http://swahiliproverbs.afrst.illinois.edu/index.htm). Citations: "
    for (let cit of myl.citations) {
        source.textContent += cit.source + " " + cit.page + ". "
    }

    anch.appendChild(h1);
    anch.appendChild(h2);
    anch.appendChild(exp);
    anch.appendChild(source);
}

async function main() {
    const methalis = await get_methalis("methalis.json").then(data => data);
    console.log(methalis);
    const myl = get_myl(methalis);
    console.log(myl);
    insert_myl(myl);
}