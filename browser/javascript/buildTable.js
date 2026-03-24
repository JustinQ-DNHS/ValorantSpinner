// Global vars
const agentIcons = [];
export const agentFulls = [];

// Fetches agent data
async function init() {
    // Fetches agent information from JSON file, pushing their names only to validAgents
    try {
        const response = await fetch("browser/resources/agents.json")
        const agentData = await response.json();
        createTable(agentData);
        createAgentFullArray(agentData).forEach(x => agentFulls.push(x));
    } catch(err) {
        console.error(err);
    }
} 
// Creates the table and adds the divs for each into an array to be manipulated later
function createTable(data) {
    // Create an array of icons to place in table of each agent
    for (let i = 0; i < data.length; i++) {
        // Define divs
        const div = document.createElement('div');
        div.classList.add('agentIcon');
        div.addEventListener('click', function() {div.classList.toggle('disabled')});
        // Define image
        const img = document.createElement('img');
        img.src = "browser/resources/images/" + data[i]['name'].toLowerCase().replace("/", "") + 
        "Icon.png";
        img.classList.add("agentIconImage")
        // Define agent name
        const agent = document.createElement("p");
        agent.classList.add("agentName");
        agent.innerHTML = data[i]["name"];
        div.appendChild(img);
        div.appendChild(agent);
        agentIcons.push(div);
        document.getElementById("table").appendChild(div)
    }
}

function createAgentFullArray(data) {
    const agentFulls = [];
    for (let i = 0; i < data.length; i++) {
        // Define divs
        const div = document.createElement('div');
        div.classList.add('agentFull');
        // Define image
        const img = document.createElement('img');
        img.src = "browser/resources/images/" + data[i]['name'].toLowerCase().replace("/","") + "Full.png";
        img.classList.add("agentFullImage")
        // Define agent name
        const agent = document.createElement('p');
        agent.classList.add("agentNameFull");
        agent.innerHTML = data[i]['name'];
        div.appendChild(img);
        div.appendChild(agent);
        agentFulls.push(div);
    }
    return agentFulls;
}

init()