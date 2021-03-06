import { CSSProperties } from "react";
import * as React from "react";
import NPC, { INpc } from "../npc";
import Collapsible from "../collapsible";

export interface IDndLocation {
  readonly name: string;
  readonly description: string;
  readonly geography: string;
  readonly people: INpc[];
  readonly id: string;
  readonly locations?: IDndLocation[];
  readonly exteriorImageUrl?: string;
  readonly exteriorMapUrl?: string;
  readonly interiorImageUrl?: string;
  readonly interiorMapUrl?: string;
  readonly loot?: string[];
  readonly informations?: string[];
}

export interface IDndLocationProps {
  readonly location: IDndLocation;
}
const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  border: "1px solid #000",
  borderRadius: 5,
  padding: "0.75rem",
};

const informationContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const subContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const nameStlye: CSSProperties = {
  fontSize: 26,
  fontWeight: "bold",
  marginRight: "5rem",
};

const label: CSSProperties = {
  fontSize: 14,
  fontWeight: "bold",
};

const DndLocation = ({
  location: {
    name,
    description,
    people,
    loot,
    id,
    locations,
    geography,
    exteriorImageUrl,
    exteriorMapUrl,
    interiorImageUrl,
    interiorMapUrl,
    informations,
  },
}: IDndLocationProps) => {
  return (
    <div style={containerStyle} id={`${id}`}>
      <div style={informationContainerStyle}>
        <span style={nameStlye}>{name}</span>
        <span>{description}</span>
      </div>
      {!!geography && (
        <>
          <div style={label}>Geography:</div>
          <div>{geography}</div>
        </>
      )}

      {locations?.length > 0 && (
        <div>
          <Collapsible id={""} text={`${name} locations`}>
            <div style={subContainer}>
              {locations?.map((location) => (
                <DndLocation key={location.id} location={location} />
              ))}
            </div>
          </Collapsible>
        </div>
      )}

      {people.length > 0 && (
        <>
          <Collapsible id={""} text={`${name} NPCs`}>
            <div style={subContainer}>
              {people.map((person) => (
                <NPC key={person.id} npc={person} />
              ))}
            </div>
          </Collapsible>
        </>
      )}

      {loot && loot.length > 0 && (
        <>
          <Collapsible id={""} text={`Loot`}>
            <div style={subContainer}>
              {loot.map((item) => (
                <div>{item}</div>
              ))}
            </div>
          </Collapsible>
        </>
      )}

      {informations && informations.length > 0 && (
        <>
          <Collapsible id={""} text={`Information`}>
            <div style={subContainer}>
              {informations.map((item) => (
                <div>{item}</div>
              ))}
            </div>
          </Collapsible>
        </>
      )}

      {!!exteriorImageUrl && (
        <Collapsible id={""} text={"Image ext??rieure"}>
          <img src={exteriorImageUrl} alt="" />
        </Collapsible>
      )}

      {!!exteriorMapUrl && (
        <Collapsible id={""} text={"Carte ext??rieure"}>
          <img src={exteriorMapUrl} alt="" />
        </Collapsible>
      )}

      {!!interiorImageUrl && (
        <Collapsible id={""} text={"Image int??rieure"}>
          <img src={interiorImageUrl} alt="" />
        </Collapsible>
      )}

      {!!interiorMapUrl && (
        <Collapsible id={""} text={"Carte int??rieure"}>
          <img src={interiorMapUrl} alt="" />
        </Collapsible>
      )}
    </div>
  );
};

export default DndLocation;
