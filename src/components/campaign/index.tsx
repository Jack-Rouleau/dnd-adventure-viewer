import * as React from "react";
import { CSSProperties } from "react";
import { IDndLocation } from "../location";
import DndLocation from "../location";
import { CRAGMAW_HIDEOUT, PHANDALIN } from "../../data/lmop/locations";

export interface ICampgaignProps {
  readonly locations: IDndLocation[];
}

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  paddingTop: "5rem",
  paddingRight: "10rem",
  paddingLeft: "10rem",
  gap: "2rem",
};

const nameStlye: CSSProperties = {
  fontSize: 14,
  fontWeight: "bold",
};

const Campaign = ({ locations }: ICampgaignProps) => {
  return (
    <div style={containerStyle}>
      {locations.map((location) => (
        <DndLocation key={location.id} location={location} />
      ))}
    </div>
  );
};

export default Campaign;
