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
export class StandingsTableList extends React.Component<
  IStandingsTableListProps,
  IStandingsTableListState
> {
  private _columns: IColumn[];

  constructor(props: IStandingsTableListProps) {
    super(props);
    this._columns = standingsTableListColumns;
  }

  public render(): JSX.Element {
    const standings = this.props.standings;
    return <DetailsList items={standings} columns={this._columns} />;
  }
}
