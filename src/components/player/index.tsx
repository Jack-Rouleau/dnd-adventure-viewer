import "./index.scss";
import * as React from "react";
import Informations from "./informations";

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
  readonly playerName: string;
  readonly characterClass: string;
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
  readonly weaponProficiencies: string[];
  readonly otherProficiencies: string[];
  readonly hasInspiration: boolean;
  readonly features: string[];
  readonly profienciencyBonus: number;
  readonly savingThrows: SavingThrows[];
  readonly skills: Skills[];
  readonly languagues: string[];
}

export interface IPlayerProps {
  readonly player: IPlayer;
}

const Player = ({ player: { name }, player }: IPlayerProps) => {
  return (
    <div className="player__wrapper">
      <div className="player__top-container">
        <div className="player__name-container">{name}</div>
        <Informations stats={player} />
      </div>
      <div className="player__bottom-container">
        <div className="player__bottom-left-container">
          {/* <Stats /> */}
          <div className="player__skills-column">
            <div className="player__inspiration"></div>
            <div className="player__proficiency-bonus"></div>
            {/* <SavingThrows /> */}
            {/* <Skills /> */}
          </div>
          <div className="player__passive-wisdom"></div>
          <div className="player__proficiencies-container"></div>
        </div>
        <div className="player__bottom-middle-container">
          <div className="player__bottom-middle-top-container">
            <div>
              <div className="player__armor-class"></div>
              <div className="player__initiative"></div>
              <div className="player__speed"></div>
            </div>
            <div className="player__current-hp-container">
              <span className="player__maximum-hit-points"></span>
              <div></div>
            </div>
            <div className="player__temporary-hp"></div>
            <div>
              <div className="player__hit-dice"></div>
              {/* <DeathSaves player={player}} /> */}
            </div>
          </div>
          <div className="player__attacks-and-spellcasting">{/* TODO */}</div>
          {/* <Inventory /> */}
        </div>
        <div className="player__right-container"></div>
      </div>
    </div>
  );
};

export default Player;
