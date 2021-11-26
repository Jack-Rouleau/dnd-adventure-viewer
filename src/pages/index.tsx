import * as React from "react";
import { IDndLocation } from "../components/location";
import { CRAGMAW_HIDEOUT, PHANDALIN } from "../data/lmop/locations";
import { Role } from "../components/login";
import Campaign from "../components/campaign";
import Player from "../components/player";
import Login from "../components/login";
import "normalize.css";
import "../index.css";

export interface IIndexPageProps {
  readonly locations: IDndLocation[];
}

const wrapperStyle: React.CSSProperties = {
  marginBottom: "10rem",
};

const IndexPage = () => {
  const [role, setRole] = React.useState(undefined as Role);
  const locations = React.useMemo(() => [PHANDALIN, CRAGMAW_HIDEOUT], []);
  return (
    <div style={wrapperStyle}>
      {role === Role.Admin && <Campaign locations={locations} />}
      {role === Role.Player && <Player />}
      {role == undefined && <Login setRoleOnLogin={setRole} />}
    </div>
  );
};

export default IndexPage;
