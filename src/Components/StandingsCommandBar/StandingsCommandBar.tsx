import React from "react";
import { CommandBar } from "office-ui-fabric-react";
import { getStandingsCommandBarCommands } from "./StandingsCommandBarCommands";

export interface IStandingsCommandBar {
  updateStandings: (leagueID: number) => Promise<void>;
}

export const StandingsCommandBar: React.FunctionComponent<
  IStandingsCommandBar
> = (props: IStandingsCommandBar) => {
  const commands = getStandingsCommandBarCommands(props.updateStandings);
  return <CommandBar items={commands} />;
};
