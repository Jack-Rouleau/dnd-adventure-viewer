import * as React from "react";
import { CSSProperties } from "react";
import { IDndLocation } from "../components/location";
import DndLocation from "../components/location";
import { CRAGMAW_HIDEOUT, PHANDALIN } from "../data/lmop/locations";

export interface IIndexPageProps {
  readonly locations: IDndLocation[];
}

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  paddingTop: "5rem",
  paddingRight: "10rem",
  paddingLeft: "10rem",
  gap: "2rem",
  fontFamily: "'M PLUS 1', sans-serif",
};

const nameStlye: CSSProperties = {
  fontSize: 14,
  fontWeight: "bold",
};

const IndexPage = () => {
  const locations = React.useMemo(() => [PHANDALIN, CRAGMAW_HIDEOUT], []);
  return (
    <div style={containerStyle}>
      {locations.map((location) => (
        <DndLocation key={location.id} location={location} />
      ))}
    </div>
  );
};

export default IndexPage;
