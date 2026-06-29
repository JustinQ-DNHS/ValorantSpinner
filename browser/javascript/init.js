import { GlobalEnv } from "./globalEnv.js";
import { BuildTable } from "./buildTable.js";

// Calls at the start of page and manages all function calls
async function init() {
    // Fetches agent information from JSON file, pushing their names only to validAgents
    try {
        // Grabs agent resources from agents.json and converts to an array
        const response = await fetch("browser/resources/agents.json")
        const agentData = await response.json();
        GlobalEnv.agentData = agentData;
        // Lefthand table which chooses agents is created
        BuildTable.createTable(GlobalEnv.agentData);
        // Array of agents full art added to array to be chosen from when randomizing
        BuildTable.createAgentFullArray(GlobalEnv.agentData);
    } catch(err) {
        console.error(err);
    }
} 

document.getElementById('dev').addEventListener('click', function() {
    console.log(GlobalEnv.agentData)
})

init();