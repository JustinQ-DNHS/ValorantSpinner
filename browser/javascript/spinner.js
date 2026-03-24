import {agentFulls} from "./buildTable.js";
document.getElementById('select').addEventListener('click', spin);

async function spin() {
    const select = document.getElementById('select');
    let pointer = Math.floor(Math.random() * 28);
    for (let i = 0; i < (agentFulls.length * 3); i++) {
        select.innerHTML = "";
        select.appendChild(agentFulls[(pointer + i)%agentFulls.length]);
        await sleep(i);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}