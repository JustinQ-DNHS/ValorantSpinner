// Global vars
import { GlobalEnv } from "./globalEnv.js";

export class BuildTable {
    // Creates the table and adds the divs for each into an array to be manipulated later
    static createTable(data) {
        // Create an array of icons to place in table of each agent
        for (let i = 0; i < data.length; i++) {
            // Define divs
            const div = document.createElement('div');
            div.classList.add('agentIcon');
            // Function that manages whether an agent is filtered or not
            div.addEventListener('click', function() {
                div.classList.toggle('disabled');
                GlobalEnv.agentData[i]['removed'] = !GlobalEnv.agentData[i]['removed'];
            });
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
            GlobalEnv.agentIcons.push(div);
            document.getElementById("table").appendChild(div)
        }
    }
    
    // Array of agents full arts, reference when 
    static createAgentFullArray(data) {
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
            GlobalEnv.agentFulls.push(div);
        }
    }
}