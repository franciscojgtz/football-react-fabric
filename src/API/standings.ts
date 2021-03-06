import { IStandingsTableListItem } from "../Components/StandingsTableList/StandingsTableList";

export interface IStandingsLeague {
  team: IStandingsTableListItem[];
  leagueName: string;
}

export async function getStandingsFromAPI(leagueID: number): Promise<any> {
  const response = await fetch(
    `https://api.football-data.org/v2/competitions/${leagueID}/standings`,
    {
      headers: { "X-Auth-Token": "06ce053959a04bb8adf57acba0586981" }
    }
  );

  return response.json();
}

export async function getStandingsData(
  leagueID: number
): Promise<IStandingsLeague> {
  const response = await getStandingsFromAPI(leagueID).then(items => items);
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

  const leagueName =
    (response && response.competition && response.competition.name) || "";
  const league: IStandingsLeague = {
    team: items,
    leagueName
  };
  return league;
}
