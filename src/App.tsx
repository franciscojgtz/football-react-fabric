import React from "react";
import { Fabric } from "office-ui-fabric-react";
import {
  StandingsTableList,
  IStandingsTableListItem
} from "./Components/StandingsTableList/StandingsTableList";
import { getStandingsData } from "./API/standings";
import { StandingsCommandBar } from "./Components/StandingsCommandBar/StandingsCommandBar";

export interface IAppProps {}

export interface IAppState {
  leagueID: number;
  standings: IStandingsTableListItem[];
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      leagueID: 2019,
      standings: []
    };
  }

  async componentDidMount() {
    const standings = await getStandingsData(this.state.leagueID).then(e => e);
    this.setState({ standings });
  }

  private updateStandings = async (leagueID: number) => {
    const standings = await getStandingsData(leagueID).then(e => e);
    this.setState({ leagueID, standings });
  };

  render() {
    return (
      <Fabric>
        <StandingsCommandBar updateStandings={this.updateStandings} />
        <StandingsTableList standings={this.state.standings} />
      </Fabric>
    );
  }
}
