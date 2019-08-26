import React from "react";
import { Fabric, Breadcrumb } from "office-ui-fabric-react";
import {
  StandingsTableList,
  IStandingsTableListItem
} from "./Components/StandingsTableList/StandingsTableList";
import { getStandingsData } from "./API/standings";
import { StandingsCommandBar } from "./Components/StandingsCommandBar/StandingsCommandBar";
import "./App.css";

export interface IAppProps {}

export interface IAppState {
  leagueID: number;
  leagueName: string;
  standings: IStandingsTableListItem[];
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      leagueID: 2014,
      leagueName: "",
      standings: []
    };
  }

  async componentDidMount() {
    const league = await getStandingsData(this.state.leagueID).then(
      league => league
    );
    const standings = league.team;
    const leagueName = league.leagueName;
    this.setState({ standings, leagueName });
  }

  private updateStandings = async (leagueID: number) => {
    const league = await getStandingsData(leagueID).then(league => league);
    const standings = league.team;
    const leagueName = league.leagueName;
    this.setState({ leagueID, standings, leagueName });
  };

  render() {
    return (
      <Fabric>
        <div className="app-container">
          <StandingsCommandBar updateStandings={this.updateStandings} />
          <Breadcrumb items={[{ key: "test", text: this.state.leagueName }]} />
          <StandingsTableList standings={this.state.standings} />
        </div>
      </Fabric>
    );
  }
}
