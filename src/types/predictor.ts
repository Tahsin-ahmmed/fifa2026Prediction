export type Team = {
  id: string;
  name: string;
  code: string;
  flag_url: string;
  group_id?: string;
};

export type Group = {
  id: string;
  name: string;
  teams: Team[];
};

export type Match = {
  id: string;
  home_team?: Team | null;
  away_team?: Team | null;
  winner?: Team | null;
  stage: string;
  match_number: number;
};

export type PredictorState = {
  // Data loaded from Supabase
  availableGroups: Group[];
  
  // User's predictions
  groupRankings: Record<string, Team[]>; // Key: group_id, Value: Ordered array of teams (1st to 4th)
  selectedThirdPlaceTeams: Team[]; // Exactly 8 teams
  knockoutMatches: Record<string, Match>; // Key: match_id
  
  // Actions
  setAvailableGroups: (groups: Group[]) => void;
  reorderGroup: (groupId: string, activeId: string, overId: string) => void;
  toggleThirdPlaceTeam: (team: Team) => void;
  setMatchWinner: (matchId: string, winner: Team) => void;
};
