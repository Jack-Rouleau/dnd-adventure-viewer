import { CSSProperties } from "react";
import * as React from "react";
import Quest, { IQuest } from "../quest";
import Collapsible from "../collapsible";

export interface IPeople {
  readonly name: string;
  readonly description: string;
  readonly id: string;
  readonly quests: IQuest[];
  readonly imageUrl?: string;
  readonly informations: string[];
  readonly possessions?: string[];
}

export interface IPeopleProps {
  readonly npc: IPeople;
}

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  border: "1 solid black",
  borderRadius: 5,
  boxShadow: "5px 5px 15px 5px #000000",
  maxWidth: "80%",
  padding: "1rem",
};

const informationContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  marginBottom: "1rem",
};

const nameStlye: CSSProperties = {
  fontSize: 18,
  fontWeight: "bold",
  marginRight: "5rem",
};

const questContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const informationContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  fontSize: 14,
  fontWeight: "thin",
};

const NPC = ({
  npc: { name, description, id, quests, informations, imageUrl },
}: IPeopleProps) => {
  return (
    <div style={containerStyle} id={id}>
      <div style={informationContainerStyle}>
        <span style={nameStlye}>{name}</span>
        <span>{description}</span>
      </div>

      <Collapsible id={""} text={`Quests`}>
        <div style={questContainer}>
          {quests.map((quest) => (
            <Quest key={quest.id} quest={quest} />
          ))}
        </div>
      </Collapsible>

      <Collapsible id={""} text={`Informations`}>
        <div style={informationContainer}>
          {informations.map((information) => (
            <div>{information}</div>
          ))}
        </div>
      </Collapsible>
    </div>
  );
};

export default NPC;
