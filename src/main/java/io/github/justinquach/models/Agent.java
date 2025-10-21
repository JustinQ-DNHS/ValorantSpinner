package io.github.justinquach.models;

import java.util.Arrays;

public class Agent {
    // Variable declaration
    private String name, role;
    final private boolean[] banned = new boolean[5];
    private boolean taken = false;
    // Variable modifiers
    public String getName() {return name;}
    public String getRole() {return role;}
    public boolean getIsBanned(int party) {return banned[party];}
    public void ban(int party) {banned[party] = !banned[party];}
    public boolean isTaken() {return taken;}
    public void takeAgent() {taken = true;}
    public void newRoll() {taken = false;}
    @Override
    public String toString() {
        return String.format("[name: %s, role: %s, banned: %s]", name, role, Arrays.toString(banned));
    }
}