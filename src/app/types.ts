export type Player = {
  _id: string;
  position: string;
  detailedPosition: string;
  commonName: string;
  firstName: string;
  lastName: string;
  name: string;
  displayName: string;
  imagePath: string;
  height: number;
  weight: number;
  dateOfBirth: string;
  statistics: PlayerStats[];
};

export type PlayerStats = {
  _id: string;
  playerId: string;
  seasonId: number;
  totalGoals: number;
  goals: number;
  penalties: number;
  assists: number;
  yellowCardsAway: number;
  yellowCardsHome: number;
  yellowCards: number;
  minutesPlayed: number;
  appearances: number;
  lineups: number;
  goalsConceded: number;
  cleanSheets: number;
  cleanSheetsHome: number;
  cleanSheetsAway: number;
  ownGoals: number;
};
