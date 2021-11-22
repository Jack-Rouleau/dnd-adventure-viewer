import { CSSProperties } from "react";
import * as React from "react";

export enum SavingThrows {
  Strength = "Strength",
  Dexterity = "Dexterity",
  Constitution = "Constitution",
  Intelligence = "Intelligence",
  Wisdom = "Wisdom",
  Charisma = "Charisma",
}

export enum Skills {
  Acrobatics = "Acrobatics",
  AnimalHandling = "Animal Handling",
  Arcana = "Arcana",
  Athletics = "Athletics",
  Deception = "Deception",
  History = "History",
  Insight = "Insight",
  Intimidation = "Intimidation",
  Investigation = "Investigation",
  Nature = "Nature",
  Medicine = "Medicine",
  Perception = "Perception",
  Performance = "Performance",
  Persuasion = "Persuasion",
  Religion = "Religion",
  SleightofHand = "Sleight of Hand",
  Stealth = "Stealth",
  Survival = "Survival",
}

export interface IPlayer {
  readonly name: string;
  readonly class: string;
  readonly background: string;
  readonly race: string;
  readonly allignment: string;
  readonly experience: string;
  readonly strength: number;
  readonly dexterity: number;
  readonly constitution: number;
  readonly intelligence: number;
  readonly wisdom: number;
  readonly charisma: number;
  readonly maximumHitPoints: number;
  readonly currentHitPoints: number;
  readonly armorClass: number;
  readonly initiative: number;
  readonly speed: number;
  readonly hitDice: string;
  readonly personalityTraits: string[];
  readonly ideals: string[];
  readonly bonds: string[];
  readonly flaws: string[];
  readonly inventory: string[];
  readonly armorProficiencies: string[];
  readonly otherProficiencies: string[];
  readonly hasInspiration: boolean;
  readonly features: string[];
  readonly profienciencyBonus: number;
  readonly savingThrows: SavingThrows[];
  readonly skills: Skills[];
}

// const example: IPlayer = {
//   name: "",
//   class: "",
//   background: "",
//   race: "",
//   allignment: "",
//   experience: "",
//   strength: 0,
//   dexterity: 0,
//   constitution: 0,
//   intelligence: 0,
//   wisdom: 0,
//   charisma: 0,
//   maximumHitPoints: 0,
//   currentHitPoints: 0,
//   armorClass: 0,
//   initiative: 0,
//   speed: 0,
//   hitDice: "",
//   personalityTraits: ["First", "Second"],
//   ideals: ["", ""],
//   bonds: ["", ""],
//   flaws: ["", ""],
//   inventory: ["", ""],
//   armorProficiencies: ["", ""],
//   otherProficiencies: ["", ""],
//   hasInspiration: false,
//   features: ["", ""],
//   profienciencyBonus: 2,
//   savingThrows: ["Strength", "Dexterity"],
//   skills: ["Animal Handling", "Perception"],
// };

const containerStyle: CSSProperties = {
  display: "flex",
  backgroundColor: "black",
  justifyContent: "center",
  alignItems: "end",
  width: "100vw",
  height: "100vh",
  background: "url('https://i.imgur.com/WvFnFSa.jpeg')",
};

const comingSoonStyle: CSSProperties = {
  color: "white",
  fontSize: "64px",
  marginBottom: "15rem",
};

const Player = () => {
  return (
    <div style={containerStyle}>
      <span style={comingSoonStyle}>Coming soon!</span>
    </div>
  );
};

export default Player;
