package io.github.justinquach;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Random;
import java.util.Scanner;

import javax.swing.JOptionPane;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.github.justinquach.models.Agent;
/**
 * AgentRandomizer manages the random picking of agents.
 */
public class AgentRandomizer {
    public static void main(String[] args) {
        Agent[] agents = fetchJSONData();
        // Actual randomization aspect
        try {
            String input = JOptionPane.showInputDialog(null,
                    "What is your party size? (1 - 5)",
                    "Party Size",
                    JOptionPane.QUESTION_MESSAGE);
            if (input == null) System.exit(0); // user pressed Cancel
            int partyNum = Integer.parseInt(input);
            pickRandomAgents(agents, partyNum);
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "Invalid number entered!", "Error", JOptionPane.ERROR_MESSAGE);
        } catch (IllegalArgumentException e) {
            JOptionPane.showMessageDialog(null, e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
        } finally {
            System.exit(0); // clean exit
        }
    }

    /**
     * fetchJSONData fetches the json data saved in agents.json (resources/data) as a array of Agents (model/Agent.java)
     * @return agents An array of the class Agent.java located in models folder.
     */
    public static Agent[] fetchJSONData() {
        // Gets agents.json file and creates a path to it
        try (InputStream inputStream = AgentRandomizer.class.getClassLoader().getResourceAsStream("data/agents.json")) {
            // Creates Scanner object and attempts to reference agents.json using file path from InputStream
            try (Scanner scanner = new Scanner(inputStream, StandardCharsets.UTF_8)) {
                // Reads the entire json file as a singular string
                String jsonString = scanner.useDelimiter("\\A").next();
                // Maps data from agents.json to Agent.java array
                ObjectMapper mapper = new ObjectMapper();
                Agent[] agents = mapper.readValue(jsonString, Agent[].class);
                return agents;
            }
        } catch (Exception e) {
            System.out.println("wtf is happening");
            return null;
        }
    }

    /**
     * Randomly outputs unique agents from the agentList, amount of agents outputted is equal to partyNum
     * @param agentList An array of the Agent class
     * @param partyNum An integer value between 1 and 5 (1 <= n <= 5)
     */
    public static void pickRandomAgents(Agent[] agentList, int partyNum) {
        if (partyNum < 1 || partyNum > 5) {throw new IllegalArgumentException("Party size is not valid");}
        Random random = new Random();
        boolean agentFound;
        String output = "";
        // Loops over for each party member
        for (int i = 0; i < partyNum; i++) {
            agentFound = false;
            Agent agent = agentList[random.nextInt(agentList.length)];
            do {
                if (agent.isTaken() == false) {
                    output += String.format("Your agent is %s\n", agent.getName());
                    agent.takeAgent();
                    agentFound = true;
                } else {
                    agent = agentList[random.nextInt(agentList.length)];
                }
            } while (!agentFound);
        }
        JOptionPane.showMessageDialog(null, output, "Agent List!", JOptionPane.INFORMATION_MESSAGE);
    }
}