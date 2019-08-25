import React from "react";
import { IStandingsTableListItem } from "./StandingsTableList";
import { IColumn } from "office-ui-fabric-react";

export const standingsTableListColumns: IColumn[] = [
  {
    key: "positionColumn",
    name: "Pos",
    fieldName: "position",
    minWidth: 20,
    maxWidth: 50,
    isResizable: true
  },
  {
    key: "standingCrestColumn",
    name: "Logo",
    minWidth: 20,
    maxWidth: 50,
    isResizable: true,
    onRender: (item: IStandingsTableListItem) => {
      return <img width="20" height="20" src={item.crestUrl} />;
    }
  },
  {
    key: "standingNameColumn",
    name: "Name",
    fieldName: "name",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true
  },
  {
    key: "standingPlayedGamesColumn",
    name: "PG",
    fieldName: "playedGames",
    minWidth: 10,
    maxWidth: 50,
    isResizable: true
  },
  {
    key: "standingWonColumn",
    name: "Won",
    fieldName: "won",
    minWidth: 10,
    maxWidth: 50,
    isResizable: true
  },
  {
    key: "standingDrawColumn",
    name: "Draw",
    fieldName: "draw",
    minWidth: 10,
    maxWidth: 50,
    isResizable: true
  },
  {
    key: "standingLostColumn",
    name: "Lost",
    fieldName: "lost",
    minWidth: 10,
    maxWidth: 50,
    isResizable: true
  },
  {
    key: "standingGoalsForColumn",
    name: "Gl+",
    fieldName: "goalsFor",
    minWidth: 10,
    maxWidth: 50,
    isResizable: true
  },
  {
    key: "standingGoalsAgainstColumn",
    name: "Gl-",
    fieldName: "goalsAgainst",
    minWidth: 10,
    maxWidth: 50,
    isResizable: true
  },
  {
    key: "standingGoalDifferenceColumn",
    name: "Gl+/-",
    fieldName: "goalDifference",
    minWidth: 10,
    maxWidth: 50,
    isResizable: true
  },
  {
    key: "standingPointsColumn",
    name: "Pts",
    fieldName: "points",
    minWidth: 10,
    maxWidth: 50,
    isResizable: true
  }
];
