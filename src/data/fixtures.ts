// Official FIFA World Cup 2026 Match Data
// Source: FIFA official schedule

export type MatchFixture = {
  matchNumber: number;
  group?: string;
  stage: string;
  homeTeam: string;
  homeFlag: string;
  awayTeam: string;
  awayFlag: string;
  date: string;      // ISO date e.g. "2026-06-11"
  time: string;      // Local time at venue e.g. "19:00"
  venue: string;
  city: string;
  country: string;
};

export const FIXTURES: MatchFixture[] = [
  // ===== GROUP A =====
  { matchNumber: 1,  group: 'A', stage: 'Group Stage', homeTeam: 'Mexico',       homeFlag: '🇲🇽', awayTeam: 'South Africa',   awayFlag: '🇿🇦', date: '2026-06-11', time: '20:00', venue: 'Estadio Azteca',             city: 'Mexico City',    country: 'Mexico' },
  { matchNumber: 2,  group: 'A', stage: 'Group Stage', homeTeam: 'Korea Republic',homeFlag: '🇰🇷', awayTeam: 'Czechia',        awayFlag: '🇨🇿', date: '2026-06-12', time: '16:00', venue: 'Estadio Akron',              city: 'Guadalajara',    country: 'Mexico' },
  { matchNumber: 17, group: 'A', stage: 'Group Stage', homeTeam: 'Mexico',       homeFlag: '🇲🇽', awayTeam: 'Czechia',        awayFlag: '🇨🇿', date: '2026-06-16', time: '20:00', venue: 'Estadio Azteca',             city: 'Mexico City',    country: 'Mexico' },
  { matchNumber: 18, group: 'A', stage: 'Group Stage', homeTeam: 'South Africa', homeFlag: '🇿🇦', awayTeam: 'Korea Republic', awayFlag: '🇰🇷', date: '2026-06-16', time: '16:00', venue: 'Estadio Akron',              city: 'Guadalajara',    country: 'Mexico' },
  { matchNumber: 33, group: 'A', stage: 'Group Stage', homeTeam: 'Mexico',       homeFlag: '🇲🇽', awayTeam: 'Korea Republic', awayFlag: '🇰🇷', date: '2026-06-22', time: '20:00', venue: 'Estadio Azteca',             city: 'Mexico City',    country: 'Mexico' },
  { matchNumber: 34, group: 'A', stage: 'Group Stage', homeTeam: 'Czechia',      homeFlag: '🇨🇿', awayTeam: 'South Africa',   awayFlag: '🇿🇦', date: '2026-06-22', time: '20:00', venue: 'Estadio Akron',              city: 'Guadalajara',    country: 'Mexico' },

  // ===== GROUP B =====
  { matchNumber: 3,  group: 'B', stage: 'Group Stage', homeTeam: 'Canada',      homeFlag: '🇨🇦', awayTeam: 'Wales',       awayFlag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', date: '2026-06-12', time: '19:00', venue: 'BMO Field',                  city: 'Toronto',        country: 'Canada' },
  { matchNumber: 4,  group: 'B', stage: 'Group Stage', homeTeam: 'Qatar',       homeFlag: '🇶🇦', awayTeam: 'Switzerland', awayFlag: '🇨🇭', date: '2026-06-13', time: '15:00', venue: "Levi's Stadium",             city: 'San Francisco',  country: 'USA' },
  { matchNumber: 19, group: 'B', stage: 'Group Stage', homeTeam: 'Canada',      homeFlag: '🇨🇦', awayTeam: 'Switzerland', awayFlag: '🇨🇭', date: '2026-06-17', time: '19:00', venue: 'BMO Field',                  city: 'Toronto',        country: 'Canada' },
  { matchNumber: 20, group: 'B', stage: 'Group Stage', homeTeam: 'Wales',       homeFlag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', awayTeam: 'Qatar',       awayFlag: '🇶🇦', date: '2026-06-17', time: '15:00', venue: "Levi's Stadium",             city: 'San Francisco',  country: 'USA' },
  { matchNumber: 35, group: 'B', stage: 'Group Stage', homeTeam: 'Canada',      homeFlag: '🇨🇦', awayTeam: 'Qatar',       awayFlag: '🇶🇦', date: '2026-06-23', time: '20:00', venue: 'BMO Field',                  city: 'Toronto',        country: 'Canada' },
  { matchNumber: 36, group: 'B', stage: 'Group Stage', homeTeam: 'Switzerland', homeFlag: '🇨🇭', awayTeam: 'Wales',       awayFlag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', date: '2026-06-23', time: '20:00', venue: "Levi's Stadium",             city: 'San Francisco',  country: 'USA' },

  // ===== GROUP C =====
  { matchNumber: 5,  group: 'C', stage: 'Group Stage', homeTeam: 'Brazil',  homeFlag: '🇧🇷', awayTeam: 'Morocco',  awayFlag: '🇲🇦', date: '2026-06-13', time: '16:00', venue: 'MetLife Stadium',            city: 'New York/NJ',    country: 'USA' },
  { matchNumber: 6,  group: 'C', stage: 'Group Stage', homeTeam: 'Haiti',   homeFlag: '🇭🇹', awayTeam: 'Scotland', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', date: '2026-06-13', time: '20:00', venue: 'Gillette Stadium',           city: 'Boston',         country: 'USA' },
  { matchNumber: 21, group: 'C', stage: 'Group Stage', homeTeam: 'Brazil',  homeFlag: '🇧🇷', awayTeam: 'Scotland', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', date: '2026-06-17', time: '19:00', venue: 'MetLife Stadium',            city: 'New York/NJ',    country: 'USA' },
  { matchNumber: 22, group: 'C', stage: 'Group Stage', homeTeam: 'Morocco', homeFlag: '🇲🇦', awayTeam: 'Haiti',    awayFlag: '🇭🇹', date: '2026-06-17', time: '16:00', venue: 'Gillette Stadium',           city: 'Boston',         country: 'USA' },
  { matchNumber: 37, group: 'C', stage: 'Group Stage', homeTeam: 'Brazil',  homeFlag: '🇧🇷', awayTeam: 'Haiti',    awayFlag: '🇭🇹', date: '2026-06-23', time: '20:00', venue: 'MetLife Stadium',            city: 'New York/NJ',    country: 'USA' },
  { matchNumber: 38, group: 'C', stage: 'Group Stage', homeTeam: 'Scotland',homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayTeam: 'Morocco',  awayFlag: '🇲🇦', date: '2026-06-23', time: '20:00', venue: 'Gillette Stadium',           city: 'Boston',         country: 'USA' },

  // ===== GROUP D =====
  { matchNumber: 7,  group: 'D', stage: 'Group Stage', homeTeam: 'United States', homeFlag: '🇺🇸', awayTeam: 'Paraguay', awayFlag: '🇵🇾', date: '2026-06-13', time: '19:00', venue: 'SoFi Stadium',               city: 'Los Angeles',    country: 'USA' },
  { matchNumber: 8,  group: 'D', stage: 'Group Stage', homeTeam: 'Australia',     homeFlag: '🇦🇺', awayTeam: 'Romania',  awayFlag: '🇷🇴', date: '2026-06-14', time: '19:00', venue: 'BC Place',                   city: 'Vancouver',      country: 'Canada' },
  { matchNumber: 23, group: 'D', stage: 'Group Stage', homeTeam: 'United States', homeFlag: '🇺🇸', awayTeam: 'Romania',  awayFlag: '🇷🇴', date: '2026-06-18', time: '19:00', venue: 'SoFi Stadium',               city: 'Los Angeles',    country: 'USA' },
  { matchNumber: 24, group: 'D', stage: 'Group Stage', homeTeam: 'Paraguay',      homeFlag: '🇵🇾', awayTeam: 'Australia', awayFlag: '🇦🇺', date: '2026-06-18', time: '19:00', venue: 'BC Place',                   city: 'Vancouver',      country: 'Canada' },
  { matchNumber: 39, group: 'D', stage: 'Group Stage', homeTeam: 'United States', homeFlag: '🇺🇸', awayTeam: 'Australia', awayFlag: '🇦🇺', date: '2026-06-24', time: '20:00', venue: 'SoFi Stadium',               city: 'Los Angeles',    country: 'USA' },
  { matchNumber: 40, group: 'D', stage: 'Group Stage', homeTeam: 'Romania',       homeFlag: '🇷🇴', awayTeam: 'Paraguay',  awayFlag: '🇵🇾', date: '2026-06-24', time: '20:00', venue: 'BC Place',                   city: 'Vancouver',      country: 'Canada' },

  // ===== GROUP E =====
  { matchNumber: 9,  group: 'E', stage: 'Group Stage', homeTeam: 'Germany',      homeFlag: '🇩🇪', awayTeam: 'Curaçao',       awayFlag: '🇨🇼', date: '2026-06-14', time: '14:00', venue: 'AT&T Stadium',               city: 'Dallas',         country: 'USA' },
  { matchNumber: 10, group: 'E', stage: 'Group Stage', homeTeam: "Côte d'Ivoire",homeFlag: '🇨🇮', awayTeam: 'Ecuador',       awayFlag: '🇪🇨', date: '2026-06-14', time: '20:00', venue: 'NRG Stadium',                city: 'Houston',        country: 'USA' },
  { matchNumber: 25, group: 'E', stage: 'Group Stage', homeTeam: 'Germany',      homeFlag: '🇩🇪', awayTeam: 'Ecuador',       awayFlag: '🇪🇨', date: '2026-06-18', time: '19:00', venue: 'AT&T Stadium',               city: 'Dallas',         country: 'USA' },
  { matchNumber: 26, group: 'E', stage: 'Group Stage', homeTeam: 'Curaçao',      homeFlag: '🇨🇼', awayTeam: "Côte d'Ivoire", awayFlag: '🇨🇮', date: '2026-06-18', time: '16:00', venue: 'NRG Stadium',                city: 'Houston',        country: 'USA' },
  { matchNumber: 41, group: 'E', stage: 'Group Stage', homeTeam: 'Germany',      homeFlag: '🇩🇪', awayTeam: "Côte d'Ivoire", awayFlag: '🇨🇮', date: '2026-06-24', time: '20:00', venue: 'AT&T Stadium',               city: 'Dallas',         country: 'USA' },
  { matchNumber: 42, group: 'E', stage: 'Group Stage', homeTeam: 'Ecuador',      homeFlag: '🇪🇨', awayTeam: 'Curaçao',       awayFlag: '🇨🇼', date: '2026-06-24', time: '20:00', venue: 'NRG Stadium',                city: 'Houston',        country: 'USA' },

  // ===== GROUP F =====
  { matchNumber: 11, group: 'F', stage: 'Group Stage', homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Japan',     awayFlag: '🇯🇵', date: '2026-06-14', time: '19:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',    country: 'USA' },
  { matchNumber: 12, group: 'F', stage: 'Group Stage', homeTeam: 'Ukraine',     homeFlag: '🇺🇦', awayTeam: 'Tunisia',   awayFlag: '🇹🇳', date: '2026-06-15', time: '16:00', venue: 'Allegiant Stadium',          city: 'Las Vegas',      country: 'USA' },
  { matchNumber: 27, group: 'F', stage: 'Group Stage', homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Tunisia',   awayFlag: '🇹🇳', date: '2026-06-19', time: '19:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',    country: 'USA' },
  { matchNumber: 28, group: 'F', stage: 'Group Stage', homeTeam: 'Japan',       homeFlag: '🇯🇵', awayTeam: 'Ukraine',   awayFlag: '🇺🇦', date: '2026-06-19', time: '16:00', venue: 'Allegiant Stadium',          city: 'Las Vegas',      country: 'USA' },
  { matchNumber: 43, group: 'F', stage: 'Group Stage', homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Ukraine',   awayFlag: '🇺🇦', date: '2026-06-25', time: '20:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',    country: 'USA' },
  { matchNumber: 44, group: 'F', stage: 'Group Stage', homeTeam: 'Tunisia',     homeFlag: '🇹🇳', awayTeam: 'Japan',     awayFlag: '🇯🇵', date: '2026-06-25', time: '20:00', venue: 'Allegiant Stadium',          city: 'Las Vegas',      country: 'USA' },

  // ===== GROUP G =====
  { matchNumber: 13, group: 'G', stage: 'Group Stage', homeTeam: 'Belgium',     homeFlag: '🇧🇪', awayTeam: 'Egypt',       awayFlag: '🇪🇬', date: '2026-06-15', time: '20:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',        country: 'USA' },
  { matchNumber: 14, group: 'G', stage: 'Group Stage', homeTeam: 'IR Iran',     homeFlag: '🇮🇷', awayTeam: 'New Zealand', awayFlag: '🇳🇿', date: '2026-06-15', time: '19:00', venue: 'Empower Field',             city: 'Denver',         country: 'USA' },
  { matchNumber: 29, group: 'G', stage: 'Group Stage', homeTeam: 'Belgium',     homeFlag: '🇧🇪', awayTeam: 'New Zealand', awayFlag: '🇳🇿', date: '2026-06-19', time: '20:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',        country: 'USA' },
  { matchNumber: 30, group: 'G', stage: 'Group Stage', homeTeam: 'Egypt',       homeFlag: '🇪🇬', awayTeam: 'IR Iran',     awayFlag: '🇮🇷', date: '2026-06-19', time: '19:00', venue: 'Empower Field',             city: 'Denver',         country: 'USA' },
  { matchNumber: 45, group: 'G', stage: 'Group Stage', homeTeam: 'Belgium',     homeFlag: '🇧🇪', awayTeam: 'IR Iran',     awayFlag: '🇮🇷', date: '2026-06-25', time: '20:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',        country: 'USA' },
  { matchNumber: 46, group: 'G', stage: 'Group Stage', homeTeam: 'New Zealand', homeFlag: '🇳🇿', awayTeam: 'Egypt',       awayFlag: '🇪🇬', date: '2026-06-25', time: '20:00', venue: 'Empower Field',             city: 'Denver',         country: 'USA' },

  // ===== GROUP H =====
  { matchNumber: 15, group: 'H', stage: 'Group Stage', homeTeam: 'Spain',       homeFlag: '🇪🇸', awayTeam: 'Cabo Verde',   awayFlag: '🇨🇻', date: '2026-06-15', time: '16:00', venue: 'Hard Rock Stadium',         city: 'Miami',          country: 'USA' },
  { matchNumber: 16, group: 'H', stage: 'Group Stage', homeTeam: 'Saudi Arabia',homeFlag: '🇸🇦', awayTeam: 'Uruguay',      awayFlag: '🇺🇾', date: '2026-06-16', time: '14:00', venue: 'Camping World Stadium',     city: 'Orlando',        country: 'USA' },
  { matchNumber: 31, group: 'H', stage: 'Group Stage', homeTeam: 'Spain',       homeFlag: '🇪🇸', awayTeam: 'Uruguay',      awayFlag: '🇺🇾', date: '2026-06-20', time: '16:00', venue: 'Hard Rock Stadium',         city: 'Miami',          country: 'USA' },
  { matchNumber: 32, group: 'H', stage: 'Group Stage', homeTeam: 'Cabo Verde',  homeFlag: '🇨🇻', awayTeam: 'Saudi Arabia', awayFlag: '🇸🇦', date: '2026-06-20', time: '14:00', venue: 'Camping World Stadium',     city: 'Orlando',        country: 'USA' },
  { matchNumber: 47, group: 'H', stage: 'Group Stage', homeTeam: 'Spain',       homeFlag: '🇪🇸', awayTeam: 'Saudi Arabia', awayFlag: '🇸🇦', date: '2026-06-26', time: '20:00', venue: 'Hard Rock Stadium',         city: 'Miami',          country: 'USA' },
  { matchNumber: 48, group: 'H', stage: 'Group Stage', homeTeam: 'Uruguay',     homeFlag: '🇺🇾', awayTeam: 'Cabo Verde',   awayFlag: '🇨🇻', date: '2026-06-26', time: '20:00', venue: 'Camping World Stadium',     city: 'Orlando',        country: 'USA' },

  // ===== GROUP I =====
  { matchNumber: 49, group: 'I', stage: 'Group Stage', homeTeam: 'France',  homeFlag: '🇫🇷', awayTeam: 'Senegal', awayFlag: '🇸🇳', date: '2026-06-16', time: '19:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',   country: 'USA' },
  { matchNumber: 50, group: 'I', stage: 'Group Stage', homeTeam: 'Bolivia', homeFlag: '🇧🇴', awayTeam: 'Norway',  awayFlag: '🇳🇴', date: '2026-06-16', time: '16:00', venue: 'Snapdragon Stadium',         city: 'San Diego',      country: 'USA' },
  { matchNumber: 51, group: 'I', stage: 'Group Stage', homeTeam: 'France',  homeFlag: '🇫🇷', awayTeam: 'Norway',  awayFlag: '🇳🇴', date: '2026-06-20', time: '19:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',   country: 'USA' },
  { matchNumber: 52, group: 'I', stage: 'Group Stage', homeTeam: 'Senegal', homeFlag: '🇸🇳', awayTeam: 'Bolivia', awayFlag: '🇧🇴', date: '2026-06-20', time: '16:00', venue: 'Snapdragon Stadium',         city: 'San Diego',      country: 'USA' },
  { matchNumber: 53, group: 'I', stage: 'Group Stage', homeTeam: 'France',  homeFlag: '🇫🇷', awayTeam: 'Bolivia', awayFlag: '🇧🇴', date: '2026-06-26', time: '20:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',   country: 'USA' },
  { matchNumber: 54, group: 'I', stage: 'Group Stage', homeTeam: 'Norway',  homeFlag: '🇳🇴', awayTeam: 'Senegal', awayFlag: '🇸🇳', date: '2026-06-26', time: '20:00', venue: 'Snapdragon Stadium',         city: 'San Diego',      country: 'USA' },

  // ===== GROUP J =====
  { matchNumber: 55, group: 'J', stage: 'Group Stage', homeTeam: 'Argentina', homeFlag: '🇦🇷', awayTeam: 'Algeria', awayFlag: '🇩🇿', date: '2026-06-17', time: '20:00', venue: 'MetLife Stadium',            city: 'New York/NJ',    country: 'USA' },
  { matchNumber: 56, group: 'J', stage: 'Group Stage', homeTeam: 'Austria',   homeFlag: '🇦🇹', awayTeam: 'Jordan',  awayFlag: '🇯🇴', date: '2026-06-17', time: '16:00', venue: 'Gillette Stadium',           city: 'Boston',         country: 'USA' },
  { matchNumber: 57, group: 'J', stage: 'Group Stage', homeTeam: 'Argentina', homeFlag: '🇦🇷', awayTeam: 'Jordan',  awayFlag: '🇯🇴', date: '2026-06-21', time: '19:00', venue: 'MetLife Stadium',            city: 'New York/NJ',    country: 'USA' },
  { matchNumber: 58, group: 'J', stage: 'Group Stage', homeTeam: 'Algeria',   homeFlag: '🇩🇿', awayTeam: 'Austria', awayFlag: '🇦🇹', date: '2026-06-21', time: '16:00', venue: 'Gillette Stadium',           city: 'Boston',         country: 'USA' },
  { matchNumber: 59, group: 'J', stage: 'Group Stage', homeTeam: 'Argentina', homeFlag: '🇦🇷', awayTeam: 'Austria', awayFlag: '🇦🇹', date: '2026-06-27', time: '20:00', venue: 'MetLife Stadium',            city: 'New York/NJ',    country: 'USA' },
  { matchNumber: 60, group: 'J', stage: 'Group Stage', homeTeam: 'Jordan',    homeFlag: '🇯🇴', awayTeam: 'Algeria', awayFlag: '🇩🇿', date: '2026-06-27', time: '20:00', venue: 'Gillette Stadium',           city: 'Boston',         country: 'USA' },

  // ===== GROUP K =====
  { matchNumber: 61, group: 'K', stage: 'Group Stage', homeTeam: 'Portugal',   homeFlag: '🇵🇹', awayTeam: 'DR Congo',   awayFlag: '🇨🇩', date: '2026-06-18', time: '20:00', venue: 'Estadio BBVA',              city: 'Monterrey',      country: 'Mexico' },
  { matchNumber: 62, group: 'K', stage: 'Group Stage', homeTeam: 'Uzbekistan', homeFlag: '🇺🇿', awayTeam: 'Colombia',   awayFlag: '🇨🇴', date: '2026-06-18', time: '16:00', venue: 'AT&T Stadium',              city: 'Dallas',         country: 'USA' },
  { matchNumber: 63, group: 'K', stage: 'Group Stage', homeTeam: 'Portugal',   homeFlag: '🇵🇹', awayTeam: 'Colombia',   awayFlag: '🇨🇴', date: '2026-06-22', time: '19:00', venue: 'Estadio BBVA',              city: 'Monterrey',      country: 'Mexico' },
  { matchNumber: 64, group: 'K', stage: 'Group Stage', homeTeam: 'DR Congo',   homeFlag: '🇨🇩', awayTeam: 'Uzbekistan', awayFlag: '🇺🇿', date: '2026-06-22', time: '16:00', venue: 'AT&T Stadium',              city: 'Dallas',         country: 'USA' },
  { matchNumber: 65, group: 'K', stage: 'Group Stage', homeTeam: 'Portugal',   homeFlag: '🇵🇹', awayTeam: 'Uzbekistan', awayFlag: '🇺🇿', date: '2026-06-27', time: '20:00', venue: 'Estadio BBVA',              city: 'Monterrey',      country: 'Mexico' },
  { matchNumber: 66, group: 'K', stage: 'Group Stage', homeTeam: 'Colombia',   homeFlag: '🇨🇴', awayTeam: 'DR Congo',   awayFlag: '🇨🇩', date: '2026-06-27', time: '20:00', venue: 'AT&T Stadium',              city: 'Dallas',         country: 'USA' },

  // ===== GROUP L =====
  { matchNumber: 67, group: 'L', stage: 'Group Stage', homeTeam: 'England', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayTeam: 'Croatia', awayFlag: '🇭🇷', date: '2026-06-20', time: '20:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',   country: 'USA' },
  { matchNumber: 68, group: 'L', stage: 'Group Stage', homeTeam: 'Ghana',   homeFlag: '🇬🇭', awayTeam: 'Panama', awayFlag: '🇵🇦', date: '2026-06-20', time: '16:00', venue: 'SoFi Stadium',               city: 'Los Angeles',    country: 'USA' },
  { matchNumber: 69, group: 'L', stage: 'Group Stage', homeTeam: 'England', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayTeam: 'Panama', awayFlag: '🇵🇦', date: '2026-06-24', time: '19:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',   country: 'USA' },
  { matchNumber: 70, group: 'L', stage: 'Group Stage', homeTeam: 'Croatia', homeFlag: '🇭🇷', awayTeam: 'Ghana',  awayFlag: '🇬🇭', date: '2026-06-24', time: '16:00', venue: 'SoFi Stadium',               city: 'Los Angeles',    country: 'USA' },
  { matchNumber: 71, group: 'L', stage: 'Group Stage', homeTeam: 'England', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayTeam: 'Ghana',  awayFlag: '🇬🇭', date: '2026-06-28', time: '20:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',   country: 'USA' },
  { matchNumber: 72, group: 'L', stage: 'Group Stage', homeTeam: 'Panama',  homeFlag: '🇵🇦', awayTeam: 'Croatia', awayFlag: '🇭🇷', date: '2026-06-28', time: '20:00', venue: 'SoFi Stadium',               city: 'Los Angeles',    country: 'USA' },

  // ===== ROUND OF 32 (Matches 73–88) =====
  // June 28 – July 3, 2026. Rules: Extra time (2×15 min) then penalties if still level after 90 min.
  { matchNumber: 73,  stage: 'Round of 32', homeTeam: 'Runner-up A',       homeFlag: '🏳️', awayTeam: 'Runner-up B',       awayFlag: '🏳️', date: '2026-06-28', time: '12:00', venue: 'SoFi Stadium',              city: 'Los Angeles',    country: 'USA' },
  { matchNumber: 74,  stage: 'Round of 32', homeTeam: 'Winner E',           homeFlag: '🏳️', awayTeam: '3rd (A/B/C/D/F)',   awayFlag: '🏳️', date: '2026-06-29', time: '16:30', venue: 'Gillette Stadium',           city: 'Boston',         country: 'USA' },
  { matchNumber: 75,  stage: 'Round of 32', homeTeam: 'Winner F',           homeFlag: '🏳️', awayTeam: 'Runner-up C',       awayFlag: '🏳️', date: '2026-06-29', time: '19:00', venue: 'Estadio BBVA',               city: 'Monterrey',      country: 'Mexico' },
  { matchNumber: 76,  stage: 'Round of 32', homeTeam: 'Winner C',           homeFlag: '🏳️', awayTeam: 'Runner-up F',       awayFlag: '🏳️', date: '2026-06-29', time: '12:00', venue: 'NRG Stadium',                city: 'Houston',        country: 'USA' },
  { matchNumber: 77,  stage: 'Round of 32', homeTeam: 'Winner I',           homeFlag: '🏳️', awayTeam: '3rd (C/D/F/G/H)',   awayFlag: '🏳️', date: '2026-06-30', time: '17:00', venue: 'MetLife Stadium',            city: 'New York/NJ',    country: 'USA' },
  { matchNumber: 78,  stage: 'Round of 32', homeTeam: 'Runner-up E',        homeFlag: '🏳️', awayTeam: 'Runner-up I',       awayFlag: '🏳️', date: '2026-06-30', time: '12:00', venue: 'AT&T Stadium',               city: 'Dallas',         country: 'USA' },
  { matchNumber: 79,  stage: 'Round of 32', homeTeam: 'Winner A',           homeFlag: '🏳️', awayTeam: '3rd (C/E/F/H/I)',   awayFlag: '🏳️', date: '2026-06-30', time: '19:00', venue: 'Estadio Azteca',             city: 'Mexico City',    country: 'Mexico' },
  { matchNumber: 80,  stage: 'Round of 32', homeTeam: 'Winner L',           homeFlag: '🏳️', awayTeam: '3rd (E/H/I/J/K)',   awayFlag: '🏳️', date: '2026-07-01', time: '12:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',        country: 'USA' },
  { matchNumber: 81,  stage: 'Round of 32', homeTeam: 'Winner D',           homeFlag: '🏳️', awayTeam: '3rd (B/E/F/I/J)',   awayFlag: '🏳️', date: '2026-07-01', time: '17:00', venue: "Levi's Stadium",             city: 'San Francisco',  country: 'USA' },
  { matchNumber: 82,  stage: 'Round of 32', homeTeam: 'Winner G',           homeFlag: '🏳️', awayTeam: '3rd (A/E/H/I/J)',   awayFlag: '🏳️', date: '2026-07-01', time: '13:00', venue: 'Lumen Field',                city: 'Seattle',        country: 'USA' },
  { matchNumber: 83,  stage: 'Round of 32', homeTeam: 'Runner-up K',        homeFlag: '🏳️', awayTeam: 'Runner-up L',       awayFlag: '🏳️', date: '2026-07-02', time: '19:00', venue: 'BMO Field',                  city: 'Toronto',        country: 'Canada' },
  { matchNumber: 84,  stage: 'Round of 32', homeTeam: 'Winner H',           homeFlag: '🏳️', awayTeam: 'Runner-up J',       awayFlag: '🏳️', date: '2026-07-02', time: '13:00', venue: 'SoFi Stadium',               city: 'Los Angeles',    country: 'USA' },
  { matchNumber: 85,  stage: 'Round of 32', homeTeam: 'Winner B',           homeFlag: '🏳️', awayTeam: '3rd (E/F/G/I/J)',   awayFlag: '🏳️', date: '2026-07-02', time: '16:00', venue: 'BC Place',                   city: 'Vancouver',      country: 'Canada' },
  { matchNumber: 86,  stage: 'Round of 32', homeTeam: 'Winner J',           homeFlag: '🏳️', awayTeam: 'Runner-up H',       awayFlag: '🏳️', date: '2026-07-03', time: '13:00', venue: 'Hard Rock Stadium',         city: 'Miami',          country: 'USA' },
  { matchNumber: 87,  stage: 'Round of 32', homeTeam: 'Winner K',           homeFlag: '🏳️', awayTeam: '3rd (D/E/I/J/L)',   awayFlag: '🏳️', date: '2026-07-03', time: '16:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',    country: 'USA' },
  { matchNumber: 88,  stage: 'Round of 32', homeTeam: 'Runner-up D',        homeFlag: '🏳️', awayTeam: 'Runner-up G',       awayFlag: '🏳️', date: '2026-07-03', time: '19:00', venue: 'AT&T Stadium',               city: 'Dallas',         country: 'USA' },

  // ===== ROUND OF 16 (Matches 89–96) =====
  // July 4–7, 2026. Single-elimination; extra time + penalties if tied after 90 min.
  { matchNumber: 89,  stage: 'Round of 16', homeTeam: 'W Match 73',         homeFlag: '🏳️', awayTeam: 'W Match 75',        awayFlag: '🏳️', date: '2026-07-04', time: '12:00', venue: 'NRG Stadium',                city: 'Houston',        country: 'USA' },
  { matchNumber: 90,  stage: 'Round of 16', homeTeam: 'W Match 74',         homeFlag: '🏳️', awayTeam: 'W Match 77',        awayFlag: '🏳️', date: '2026-07-04', time: '16:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',   country: 'USA' },
  { matchNumber: 91,  stage: 'Round of 16', homeTeam: 'W Match 76',         homeFlag: '🏳️', awayTeam: 'W Match 78',        awayFlag: '🏳️', date: '2026-07-05', time: '13:00', venue: 'MetLife Stadium',            city: 'New York/NJ',    country: 'USA' },
  { matchNumber: 92,  stage: 'Round of 16', homeTeam: 'W Match 79',         homeFlag: '🏳️', awayTeam: 'W Match 80',        awayFlag: '🏳️', date: '2026-07-05', time: '19:00', venue: 'Estadio Azteca',             city: 'Mexico City',    country: 'Mexico' },
  { matchNumber: 93,  stage: 'Round of 16', homeTeam: 'W Match 83',         homeFlag: '🏳️', awayTeam: 'W Match 84',        awayFlag: '🏳️', date: '2026-07-06', time: '13:00', venue: 'AT&T Stadium',               city: 'Dallas',         country: 'USA' },
  { matchNumber: 94,  stage: 'Round of 16', homeTeam: 'W Match 81',         homeFlag: '🏳️', awayTeam: 'W Match 82',        awayFlag: '🏳️', date: '2026-07-06', time: '16:00', venue: 'Lumen Field',                city: 'Seattle',        country: 'USA' },
  { matchNumber: 95,  stage: 'Round of 16', homeTeam: 'W Match 86',         homeFlag: '🏳️', awayTeam: 'W Match 88',        awayFlag: '🏳️', date: '2026-07-07', time: '13:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',        country: 'USA' },
  { matchNumber: 96,  stage: 'Round of 16', homeTeam: 'W Match 85',         homeFlag: '🏳️', awayTeam: 'W Match 87',        awayFlag: '🏳️', date: '2026-07-07', time: '16:00', venue: 'BC Place',                   city: 'Vancouver',      country: 'Canada' },

  // ===== QUARTER-FINALS (Matches 97–100) =====
  // July 9–11, 2026.
  { matchNumber: 97,  stage: 'Quarter-Final', homeTeam: 'W Match 89',       homeFlag: '🏳️', awayTeam: 'W Match 90',        awayFlag: '🏳️', date: '2026-07-09', time: '15:00', venue: 'Gillette Stadium',           city: 'Boston',         country: 'USA' },
  { matchNumber: 98,  stage: 'Quarter-Final', homeTeam: 'W Match 91',       homeFlag: '🏳️', awayTeam: 'W Match 92',        awayFlag: '🏳️', date: '2026-07-10', time: '15:00', venue: 'SoFi Stadium',               city: 'Los Angeles',    country: 'USA' },
  { matchNumber: 99,  stage: 'Quarter-Final', homeTeam: 'W Match 93',       homeFlag: '🏳️', awayTeam: 'W Match 94',        awayFlag: '🏳️', date: '2026-07-11', time: '15:00', venue: 'Hard Rock Stadium',         city: 'Miami',          country: 'USA' },
  { matchNumber: 100, stage: 'Quarter-Final', homeTeam: 'W Match 95',       homeFlag: '🏳️', awayTeam: 'W Match 96',        awayFlag: '🏳️', date: '2026-07-11', time: '19:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',    country: 'USA' },

  // ===== SEMI-FINALS (Matches 101–102) =====
  // July 14–15, 2026.
  { matchNumber: 101, stage: 'Semi-Final', homeTeam: 'W Match 97',          homeFlag: '🏳️', awayTeam: 'W Match 99',        awayFlag: '🏳️', date: '2026-07-14', time: '19:00', venue: 'AT&T Stadium',               city: 'Dallas',         country: 'USA' },
  { matchNumber: 102, stage: 'Semi-Final', homeTeam: 'W Match 98',          homeFlag: '🏳️', awayTeam: 'W Match 100',       awayFlag: '🏳️', date: '2026-07-15', time: '19:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',        country: 'USA' },

  // ===== THIRD PLACE PLAY-OFF (Match 103) =====
  // July 18, 2026 — Hard Rock Stadium, Miami
  { matchNumber: 103, stage: 'Third Place',  homeTeam: 'L Match 101',       homeFlag: '🏳️', awayTeam: 'L Match 102',       awayFlag: '🏳️', date: '2026-07-18', time: '15:00', venue: 'Hard Rock Stadium',         city: 'Miami',          country: 'USA' },

  // ===== FINAL (Match 104) =====
  // July 19, 2026 — MetLife Stadium, New York/NJ
  { matchNumber: 104, stage: 'Final',        homeTeam: 'W Match 101',       homeFlag: '🏳️', awayTeam: 'W Match 102',       awayFlag: '🏳️', date: '2026-07-19', time: '19:00', venue: 'MetLife Stadium',            city: 'New York/NJ',    country: 'USA' },
];
