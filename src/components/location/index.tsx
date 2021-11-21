import { CSSProperties } from "react";
import * as React from "react";
import NPC, { IPeople } from "../npc";
import Collapsible from "../collapsible";

export interface IDndLocation {
  readonly name: string;
  readonly description: string;
  readonly geography: string;
  readonly people: IPeople[];
  readonly id: string;
  readonly locations?: IDndLocation[];
  readonly exteriorImageUrl?: string;
  readonly interiorImageUrl?: string;
  readonly interiorMapUrl?: string;
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
    id,
    locations,
    geography,
    exteriorImageUrl,
    interiorImageUrl,
    interiorMapUrl,
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
          <h3>Locations</h3>
          <Collapsible id={""} text={`${name} locations`}>
            <div style={subContainer}>
              {locations?.map((location) => (
                <DndLocation key={location.id} location={location} />
              ))}
            </div>
          </Collapsible>
        </div>
      )}

      <div>
        <h3>NPCs</h3>
        <Collapsible id={""} text={`${name} NPCs`}>
          <div style={subContainer}>
            {people.map((person) => (
              <NPC key={person.id} npc={person} />
            ))}
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default DndLocation;
