// All 48 teams with their groups, flags, confederation and FIFA ranking
// Source: FIFA/Coca-Cola Men's World Ranking — April 1, 2026 (latest official update)
export type TeamData = {
  name: string;
  code: string;
  flag: string;
  group: string;
  confederation: string;
  ranking: number;
};

export const TEAMS_DATA: TeamData[] = [
  // Group A
  { name: 'Mexico',         code: 'MEX', flag: '🇲🇽', group: 'A', confederation: 'CONCACAF', ranking: 15 },
  { name: 'South Africa',   code: 'RSA', flag: '🇿🇦', group: 'A', confederation: 'CAF',      ranking: 60 },
  { name: 'Korea Republic', code: 'KOR', flag: '🇰🇷', group: 'A', confederation: 'AFC',      ranking: 25 },
  { name: 'Czechia',        code: 'CZE', flag: '🇨🇿', group: 'A', confederation: 'UEFA',     ranking: 41 },
  // Group B
  { name: 'Canada',         code: 'CAN', flag: '🇨🇦', group: 'B', confederation: 'CONCACAF', ranking: 30 },
  { name: 'Bosnia and Herzegovina', code: 'BIH', flag: '🇧🇦', group: 'B', confederation: 'UEFA',     ranking: 45 },
  { name: 'Qatar',          code: 'QAT', flag: '🇶🇦', group: 'B', confederation: 'AFC',      ranking: 55 },
  { name: 'Switzerland',    code: 'SUI', flag: '🇨🇭', group: 'B', confederation: 'UEFA',     ranking: 19 },
  // Group C
  { name: 'Brazil',         code: 'BRA', flag: '🇧🇷', group: 'C', confederation: 'CONMEBOL', ranking: 6 },
  { name: 'Morocco',        code: 'MAR', flag: '🇲🇦', group: 'C', confederation: 'CAF',      ranking: 8 },
  { name: 'Haiti',          code: 'HAI', flag: '🇭🇹', group: 'C', confederation: 'CONCACAF', ranking: 83 },
  { name: 'Scotland',       code: 'SCO', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C', confederation: 'UEFA',     ranking: 43 },
  // Group D
  { name: 'United States',  code: 'USA', flag: '🇺🇸', group: 'D', confederation: 'CONCACAF', ranking: 16 },
  { name: 'Paraguay',       code: 'PAR', flag: '🇵🇾', group: 'D', confederation: 'CONMEBOL', ranking: 40 },
  { name: 'Australia',      code: 'AUS', flag: '🇦🇺', group: 'D', confederation: 'AFC',      ranking: 27 },
  { name: 'Türkiye',         code: 'TUR', flag: '🇹🇷', group: 'D', confederation: 'UEFA',     ranking: 26 },
  // Group E
  { name: 'Germany',        code: 'GER', flag: '🇩🇪', group: 'E', confederation: 'UEFA',     ranking: 10 },
  { name: 'Curaçao',        code: 'CUW', flag: '🇨🇼', group: 'E', confederation: 'CONCACAF', ranking: 82 },
  { name: "Côte d'Ivoire",  code: 'CIV', flag: '🇨🇮', group: 'E', confederation: 'CAF',      ranking: 37 },
  { name: 'Ecuador',        code: 'ECU', flag: '🇪🇨', group: 'E', confederation: 'CONMEBOL', ranking: 23 },
  // Group F
  { name: 'Netherlands',    code: 'NED', flag: '🇳🇱', group: 'F', confederation: 'UEFA',     ranking: 7 },
  { name: 'Japan',          code: 'JPN', flag: '🇯🇵', group: 'F', confederation: 'AFC',      ranking: 18 },
  { name: 'Sweden',          code: 'SWE', flag: '🇸🇪', group: 'F', confederation: 'UEFA',     ranking: 20 },
  { name: 'Tunisia',        code: 'TUN', flag: '🇹🇳', group: 'F', confederation: 'CAF',      ranking: 44 },
  // Group G
  { name: 'Belgium',        code: 'BEL', flag: '🇧🇪', group: 'G', confederation: 'UEFA',     ranking: 9 },
  { name: 'Egypt',          code: 'EGY', flag: '🇪🇬', group: 'G', confederation: 'CAF',      ranking: 29 },
  { name: 'IR Iran',        code: 'IRN', flag: '🇮🇷', group: 'G', confederation: 'AFC',      ranking: 21 },
  { name: 'New Zealand',    code: 'NZL', flag: '🇳🇿', group: 'G', confederation: 'OFC',      ranking: 85 },
  // Group H
  { name: 'Spain',          code: 'ESP', flag: '🇪🇸', group: 'H', confederation: 'UEFA',     ranking: 2 },
  { name: 'Cabo Verde',     code: 'CPV', flag: '🇨🇻', group: 'H', confederation: 'CAF',      ranking: 69 },
  { name: 'Saudi Arabia',   code: 'KSA', flag: '🇸🇦', group: 'H', confederation: 'AFC',      ranking: 61 },
  { name: 'Uruguay',        code: 'URU', flag: '🇺🇾', group: 'H', confederation: 'CONMEBOL', ranking: 17 },
  // Group I
  { name: 'France',         code: 'FRA', flag: '🇫🇷', group: 'I', confederation: 'UEFA',     ranking: 3 },
  { name: 'Senegal',        code: 'SEN', flag: '🇸🇳', group: 'I', confederation: 'CAF',      ranking: 14 },
  { name: 'Iraq',            code: 'IRQ', flag: '🇮🇶', group: 'I', confederation: 'AFC',      ranking: 58 },
  { name: 'Norway',         code: 'NOR', flag: '🇳🇴', group: 'I', confederation: 'UEFA',     ranking: 31 },
  // Group J
  { name: 'Argentina',      code: 'ARG', flag: '🇦🇷', group: 'J', confederation: 'CONMEBOL', ranking: 1 },
  { name: 'Algeria',        code: 'ALG', flag: '🇩🇿', group: 'J', confederation: 'CAF',      ranking: 28 },
  { name: 'Austria',        code: 'AUT', flag: '🇦🇹', group: 'J', confederation: 'UEFA',     ranking: 24 },
  { name: 'Jordan',         code: 'JOR', flag: '🇯🇴', group: 'J', confederation: 'AFC',      ranking: 63 },
  // Group K
  { name: 'Portugal',       code: 'POR', flag: '🇵🇹', group: 'K', confederation: 'UEFA',     ranking: 5 },
  { name: 'DR Congo',       code: 'COD', flag: '🇨🇩', group: 'K', confederation: 'CAF',      ranking: 46 },
  { name: 'Uzbekistan',     code: 'UZB', flag: '🇺🇿', group: 'K', confederation: 'AFC',      ranking: 50 },
  { name: 'Colombia',       code: 'COL', flag: '🇨🇴', group: 'K', confederation: 'CONMEBOL', ranking: 13 },
  // Group L
  { name: 'England',        code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L', confederation: 'UEFA',     ranking: 4 },
  { name: 'Croatia',        code: 'CRO', flag: '🇭🇷', group: 'L', confederation: 'UEFA',     ranking: 11 },
  { name: 'Ghana',          code: 'GHA', flag: '🇬🇭', group: 'L', confederation: 'CAF',      ranking: 74 },
  { name: 'Panama',         code: 'PAN', flag: '🇵🇦', group: 'L', confederation: 'CONCACAF', ranking: 33 },
];
