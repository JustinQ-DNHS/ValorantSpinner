import { GlobalEnv } from "./globalEnv.js";
// Adds function on press for the spinner
document.getElementById('select').addEventListener('click', spin);

// Generates a random agent
async function spin() {
    const select = document.getElementById('select');
    const validAgents = [];
    for (const agent of GlobalEnv.agentData) {
        if (!agent['removed']) {validAgents.push(agent['id'])}
    }
    // Random number from 0 - 28 (29 agents in spinner)
    let agent = GlobalEnv.agentFulls[validAgents[Math.floor(Math.random() * validAgents.length)]]
    select.innerHTML = "";
    select.appendChild(agent);
    // let pointer = Math.floor(Math.random() * validAgents.length);
    // for (let i = 0; i < (GlobalEnv.agentFulls.length * 3); i++) {
    //     // Clears image
    //     select.innerHTML = "";
    //     select.appendChild(GlobalEnv.agentFulls[(pointer + i)%GlobalEnv.agentFulls.length]);
    //     await sleep(i);
    // }
}

// Adds delay in between each image
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/*
    CREATE A GLOBAL FILE
    1) Get a list of removed agents
        a. Create a function that adds removed agents to a list
    2) Create a list without removed agents
        a. 
    3) Generate a random number
    4) Display agent
*/