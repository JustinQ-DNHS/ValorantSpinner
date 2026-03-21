// Global vars
const validAgents = [];
const agentArray = [];

// Fetches agent data
async function init() {
    try {
        const response = await fetch("browser/resources/agents.json")
        const agentData = await response.json();
        agentData.forEach(x => {
            validAgents.push(x["name"]);
        });
        createTable(agentData);
        console.log(validAgents);
    } catch(err) {
        console.error(err);
    }
} 

function createTable(data) {
    // Create an array of icons to place in table of each agent
    for (let i = 0; i < data.length; i++) {
        // Define divs
        const div = document.createElement('div');
        div.classList.add('agentIcon');
        div.addEventListener('click', function() {fly(data[i]['name'])});
        // Define image
        const img = document.createElement('img');
        img.src = "browser/resources/images/" + data[i]['name'].toLowerCase().replace("/", "") + 
        "Icon.png";
        img.classList.add("agentIconImage")
        // Define agent name
        const agent = document.createElement("p");
        agent.classList.add("agentName");
        agent.innerHTML = data[i]["name"];
        // line.classList.add("")
        div.appendChild(img);
        div.appendChild(agent);
        agentArray.push(div);
        document.getElementById("table").appendChild(div)
    }
}
function fly(name) {
    console.log(name)
}

init()