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
  leagueId: number;
}
export class StandingsTableList extends React.Component<
  IStandingsTableListProps,
  IStandingsTableListState
> {
  private _leagueID: number;
  private _columns: IColumn[];

  constructor(props: IStandingsTableListProps) {
    super(props);
    this._leagueID = this.props.leagueId;
    this._columns = standingsTableListColumns;
    this.state = {
      items: []
    };
  }

  private async getItems(leagueId: number) {
    const response = await fetch(
      `http://api.football-data.org/v2/competitions/${leagueId}/standings`,
      {
        headers: { "X-Auth-Token": "06ce053959a04bb8adf57acba0586981" }
      }
    );

    return response.json();
  }

  async componentDidMount() {
    const response = await this.getItems(this._leagueID).then(items => items);
    let items: IStandingsTableListItem[] = [];
    const standingsTable =
      (response.standings &&
        response.standings[0] &&
        response.standings[0].table) ||
      [];
    for (const standing of standingsTable) {
      const item = {
        key: standing.team.id,
        name: standing.team.name,
        position: standing.position,
        crestUrl: standing.team.crestUrl,
        points: standing.points,
        playedGames: standing.playedGames,
        won: standing.won,
        draw: standing.draw,
        lost: standing.lost,
        goalsFor: standing.goalsFor,
        goalsAgainst: standing.goalsAgainst,
        goalDifference: standing.goalDifference
      };

      items.push(item);
    }

    this.setState({ items });
  }

  public render(): JSX.Element {
    const { items } = this.state;
    return <DetailsList items={items} columns={this._columns} />;
  }
}
