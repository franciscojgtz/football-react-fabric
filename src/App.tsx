import React from "react";
import { Fabric } from "office-ui-fabric-react";
import { StandingsTableList } from "./Components/StandingsTableList/StandingsTableList";

export const App: React.FunctionComponent = () => {
  return (
    <Fabric>
      <StandingsTableList leagueId={3} />
    </Fabric>
  );
};
