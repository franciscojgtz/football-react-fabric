import React from "react";
import { DetailsList } from "office-ui-fabric-react";
import { worker } from "cluster";
export interface IStandingsTableListItem {
  key: number;
  name: string;
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
  leagueId: number;
}
export class StandingsTableList extends React.Component<
  IStandingsTableListProps,
  IStandingsTableListState
> {
  constructor(props: IStandingsTableListProps) {
    super(props);

    this.state = {
      items: []
    };
  }
  public render(): JSX.Element {
    const { items } = this.state;
    return <DetailsList items={items} />;
  }
}
