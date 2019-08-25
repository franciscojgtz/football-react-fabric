import React from "react";
import { Fabric } from "office-ui-fabric-react";
import {
  StandingsTableList,
  IStandingsTableListItem
} from "./Components/StandingsTableList/StandingsTableList";
import { getStandingsData } from "./API/standings";

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

  private async updateS() {
    const standings = await getStandingsData(2014).then(e => e);
    this.setState({ leagueID: 2014, standings });
  }

  render() {
    return (
      <Fabric>
        <button onClick={() => this.updateS()}>button</button>
        <StandingsTableList standings={this.state.standings} />
      </Fabric>
    );
  }
}
