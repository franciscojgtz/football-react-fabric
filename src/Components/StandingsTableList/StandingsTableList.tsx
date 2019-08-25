import React from "react";
import { DetailsList, IColumn } from "office-ui-fabric-react";
import { standingsTableListColumns } from "./StandingsTableListColumns";

export interface IStandingsTableListItem {
  key: number;
  name: string;
  position: string;
  crestUrl: string;
  points: number;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface IStandingsTableListState {
  items: IStandingsTableListItem[];
}

export interface IStandingsTableListProps {
  standings: IStandingsTableListItem[];
}
export const StandingsTableList: React.FunctionComponent<
  IStandingsTableListProps
> = (props: IStandingsTableListProps) => {
  const standings = props.standings;
  return <DetailsList items={standings} columns={standingsTableListColumns} />;
};
