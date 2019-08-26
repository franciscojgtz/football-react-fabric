import { ICommandBarItemProps } from "office-ui-fabric-react/lib/components/CommandBar";

export function getStandingsCommandBarCommands(
  updateStandings: (leagueID: number) => Promise<void>
): ICommandBarItemProps[] {
  return [
    {
      key: "SpainCommand",
      text: "Spain",
      onClick: () => {
        updateStandings(2014);
      }
    },
    {
      key: "EnglandCommand",
      text: "England",
      onClick: () => {
        updateStandings(2021);
      }
    },
    {
      key: "BrazilCommand",
      text: "Brazil",
      onClick: () => {
        updateStandings(2013);
      }
    },
    {
      key: "FranceCommand",
      text: "France",
      onClick: () => {
        updateStandings(2015);
      }
    },
    {
      key: "GermanyCommand",
      text: "Germany",
      onClick: () => {
        updateStandings(2002);
      }
    },
    {
      key: "NetherlandsCommand",
      text: "Netherlands",
      onClick: () => {
        updateStandings(2003);
      }
    },
    {
      key: "PortugalCommand",
      text: "Portugal",
      onClick: () => {
        updateStandings(2017);
      }
    },
    {
      key: "ItalyCommand",
      text: "Italy",
      onClick: () => {
        updateStandings(2019);
      }
    }
  ];
}
