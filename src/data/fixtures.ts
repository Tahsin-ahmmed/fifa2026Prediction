// Official FIFA World Cup 2026 Match Data
// IMPORTANT: All dates and times stored in BDT (Bangladesh Standard Time = UTC+6)
// to match the official schedule shown to Bangladeshi users.
// formatBSTTime() in timezone.ts just appends "BST" label — no conversion needed.

export type MatchFixture = {
  matchNumber: number;
  group?: string;
  stage: string;
  homeTeam: string;
  homeFlag: string;
  awayTeam: string;
  awayFlag: string;
  date: string;  // BDT date  e.g. "2026-06-12"
  time: string;  // BDT 24h   e.g. "01:00"
  venue: string;
  city: string;
  country: string;
};

export const FIXTURES: MatchFixture[] = [

  // ===== GROUP A ===== (Mexico, South Africa, Korea Republic, Czechia)
  { matchNumber: 1,  group: 'A', stage: 'Group Stage', homeTeam: 'Mexico',        homeFlag: '🇲🇽', awayTeam: 'South Africa',         awayFlag: '🇿🇦', date: '2026-06-12', time: '01:00', venue: 'Estadio Azteca',             city: 'Mexico City',   country: 'Mexico' },
  { matchNumber: 2,  group: 'A', stage: 'Group Stage', homeTeam: 'Korea Republic',homeFlag: '🇰🇷', awayTeam: 'Czechia',               awayFlag: '🇨🇿', date: '2026-06-12', time: '08:00', venue: 'Estadio Akron',              city: 'Guadalajara',   country: 'Mexico' },
  { matchNumber: 17, group: 'A', stage: 'Group Stage', homeTeam: 'Czechia',       homeFlag: '🇨🇿', awayTeam: 'South Africa',         awayFlag: '🇿🇦', date: '2026-06-18', time: '22:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',       country: 'USA'    },
  { matchNumber: 18, group: 'A', stage: 'Group Stage', homeTeam: 'Mexico',        homeFlag: '🇲🇽', awayTeam: 'Korea Republic',       awayFlag: '🇰🇷', date: '2026-06-19', time: '07:00', venue: 'Estadio Akron',              city: 'Guadalajara',   country: 'Mexico' },
  { matchNumber: 33, group: 'A', stage: 'Group Stage', homeTeam: 'Czechia',       homeFlag: '🇨🇿', awayTeam: 'Mexico',               awayFlag: '🇲🇽', date: '2026-06-25', time: '07:00', venue: 'Estadio Azteca',             city: 'Mexico City',   country: 'Mexico' },
  { matchNumber: 34, group: 'A', stage: 'Group Stage', homeTeam: 'South Africa',  homeFlag: '🇿🇦', awayTeam: 'Korea Republic',       awayFlag: '🇰🇷', date: '2026-06-25', time: '07:00', venue: 'Estadio BBVA',               city: 'Monterrey',     country: 'Mexico' },

  // ===== GROUP B ===== (Canada, Bosnia and Herzegovina, Qatar, Switzerland)
  { matchNumber: 3,  group: 'B', stage: 'Group Stage', homeTeam: 'Canada',              homeFlag: '🇨🇦', awayTeam: 'Bosnia and Herzegovina', awayFlag: '🇧🇦', date: '2026-06-13', time: '01:00', venue: 'BMO Field',                  city: 'Toronto',       country: 'Canada' },
  { matchNumber: 4,  group: 'B', stage: 'Group Stage', homeTeam: 'Qatar',               homeFlag: '🇶🇦', awayTeam: 'Switzerland',            awayFlag: '🇨🇭', date: '2026-06-14', time: '01:00', venue: "Levi's Stadium",             city: 'San Francisco', country: 'USA'    },
  { matchNumber: 19, group: 'B', stage: 'Group Stage', homeTeam: 'Switzerland',         homeFlag: '🇨🇭', awayTeam: 'Bosnia and Herzegovina', awayFlag: '🇧🇦', date: '2026-06-19', time: '01:00', venue: 'SoFi Stadium',               city: 'Los Angeles',   country: 'USA'    },
  { matchNumber: 20, group: 'B', stage: 'Group Stage', homeTeam: 'Canada',              homeFlag: '🇨🇦', awayTeam: 'Qatar',                  awayFlag: '🇶🇦', date: '2026-06-19', time: '04:00', venue: 'BC Place',                   city: 'Vancouver',     country: 'Canada' },
  { matchNumber: 35, group: 'B', stage: 'Group Stage', homeTeam: 'Switzerland',         homeFlag: '🇨🇭', awayTeam: 'Canada',                 awayFlag: '🇨🇦', date: '2026-06-25', time: '01:00', venue: 'BC Place',                   city: 'Vancouver',     country: 'Canada' },
  { matchNumber: 36, group: 'B', stage: 'Group Stage', homeTeam: 'Bosnia and Herzegovina', homeFlag: '🇧🇦', awayTeam: 'Qatar',              awayFlag: '🇶🇦', date: '2026-06-25', time: '01:00', venue: 'Lumen Field',                city: 'Seattle',       country: 'USA'    },

  // ===== GROUP C ===== (Brazil, Morocco, Haiti, Scotland)
  { matchNumber: 5,  group: 'C', stage: 'Group Stage', homeTeam: 'Haiti',     homeFlag: '🇭🇹', awayTeam: 'Scotland', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', date: '2026-06-14', time: '07:00', venue: 'Gillette Stadium',           city: 'Boston',        country: 'USA'    },
  { matchNumber: 6,  group: 'C', stage: 'Group Stage', homeTeam: 'Brazil',    homeFlag: '🇧🇷', awayTeam: 'Morocco',  awayFlag: '🇲🇦', date: '2026-06-14', time: '04:00', venue: 'MetLife Stadium',            city: 'New York/NJ',   country: 'USA'    },
  { matchNumber: 21, group: 'C', stage: 'Group Stage', homeTeam: 'Brazil',    homeFlag: '🇧🇷', awayTeam: 'Haiti',    awayFlag: '🇭🇹', date: '2026-06-20', time: '06:30', venue: 'Lincoln Financial Field',    city: 'Philadelphia',  country: 'USA'    },
  { matchNumber: 22, group: 'C', stage: 'Group Stage', homeTeam: 'Scotland',  homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayTeam: 'Morocco',  awayFlag: '🇲🇦', date: '2026-06-20', time: '04:00', venue: 'Gillette Stadium',           city: 'Boston',        country: 'USA'    },
  { matchNumber: 37, group: 'C', stage: 'Group Stage', homeTeam: 'Scotland',  homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayTeam: 'Brazil',   awayFlag: '🇧🇷', date: '2026-06-25', time: '04:00', venue: 'Hard Rock Stadium',          city: 'Miami',         country: 'USA'    },
  { matchNumber: 38, group: 'C', stage: 'Group Stage', homeTeam: 'Morocco',   homeFlag: '🇲🇦', awayTeam: 'Haiti',    awayFlag: '🇭🇹', date: '2026-06-25', time: '04:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',       country: 'USA'    },

  // ===== GROUP D ===== (USA, Paraguay, Australia, Türkiye)
  { matchNumber: 7,  group: 'D', stage: 'Group Stage', homeTeam: 'United States', homeFlag: '🇺🇸', awayTeam: 'Paraguay',  awayFlag: '🇵🇾', date: '2026-06-13', time: '07:00', venue: 'SoFi Stadium',               city: 'Los Angeles',   country: 'USA'    },
  { matchNumber: 8,  group: 'D', stage: 'Group Stage', homeTeam: 'Australia',     homeFlag: '🇦🇺', awayTeam: 'Türkiye',   awayFlag: '🇹🇷', date: '2026-06-14', time: '10:00', venue: 'BC Place',                   city: 'Vancouver',     country: 'Canada' },
  { matchNumber: 23, group: 'D', stage: 'Group Stage', homeTeam: 'Türkiye',       homeFlag: '🇹🇷', awayTeam: 'Paraguay',  awayFlag: '🇵🇾', date: '2026-06-20', time: '09:00', venue: "Levi's Stadium",             city: 'San Francisco', country: 'USA'    },
  { matchNumber: 24, group: 'D', stage: 'Group Stage', homeTeam: 'United States', homeFlag: '🇺🇸', awayTeam: 'Australia', awayFlag: '🇦🇺', date: '2026-06-20', time: '01:00', venue: 'Lumen Field',                city: 'Seattle',       country: 'USA'    },
  { matchNumber: 39, group: 'D', stage: 'Group Stage', homeTeam: 'Türkiye',       homeFlag: '🇹🇷', awayTeam: 'United States', awayFlag: '🇺🇸', date: '2026-06-26', time: '08:00', venue: 'SoFi Stadium',          city: 'Los Angeles',   country: 'USA'    },
  { matchNumber: 40, group: 'D', stage: 'Group Stage', homeTeam: 'Paraguay',      homeFlag: '🇵🇾', awayTeam: 'Australia', awayFlag: '🇦🇺', date: '2026-06-26', time: '08:00', venue: "Levi's Stadium",             city: 'San Francisco', country: 'USA'    },

  // ===== GROUP E ===== (Germany, Curaçao, Côte d'Ivoire, Ecuador)
  { matchNumber: 9,  group: 'E', stage: 'Group Stage', homeTeam: "Côte d'Ivoire", homeFlag: '🇨🇮', awayTeam: 'Ecuador',         awayFlag: '🇪🇨', date: '2026-06-15', time: '05:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',  country: 'USA'    },
  { matchNumber: 10, group: 'E', stage: 'Group Stage', homeTeam: 'Germany',       homeFlag: '🇩🇪', awayTeam: 'Curaçao',         awayFlag: '🇨🇼', date: '2026-06-14', time: '23:00', venue: 'NRG Stadium',                city: 'Houston',       country: 'USA'    },
  { matchNumber: 25, group: 'E', stage: 'Group Stage', homeTeam: 'Germany',       homeFlag: '🇩🇪', awayTeam: "Côte d'Ivoire",   awayFlag: '🇨🇮', date: '2026-06-21', time: '02:00', venue: 'BMO Field',                  city: 'Toronto',       country: 'Canada' },
  { matchNumber: 26, group: 'E', stage: 'Group Stage', homeTeam: 'Ecuador',       homeFlag: '🇪🇨', awayTeam: 'Curaçao',         awayFlag: '🇨🇼', date: '2026-06-21', time: '06:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',   country: 'USA'    },
  { matchNumber: 41, group: 'E', stage: 'Group Stage', homeTeam: 'Curaçao',       homeFlag: '🇨🇼', awayTeam: "Côte d'Ivoire",   awayFlag: '🇨🇮', date: '2026-06-26', time: '02:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',  country: 'USA'    },
  { matchNumber: 42, group: 'E', stage: 'Group Stage', homeTeam: 'Ecuador',       homeFlag: '🇪🇨', awayTeam: 'Germany',         awayFlag: '🇩🇪', date: '2026-06-26', time: '02:00', venue: 'MetLife Stadium',            city: 'New York/NJ',   country: 'USA'    },

  // ===== GROUP F ===== (Netherlands, Japan, Sweden, Tunisia)
  { matchNumber: 11, group: 'F', stage: 'Group Stage', homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Japan',        awayFlag: '🇯🇵', date: '2026-06-15', time: '02:00', venue: 'AT&T Stadium',               city: 'Dallas',        country: 'USA'    },
  { matchNumber: 12, group: 'F', stage: 'Group Stage', homeTeam: 'Sweden',      homeFlag: '🇸🇪', awayTeam: 'Tunisia',      awayFlag: '🇹🇳', date: '2026-06-15', time: '08:00', venue: 'Estadio BBVA',               city: 'Monterrey',     country: 'Mexico' },
  { matchNumber: 27, group: 'F', stage: 'Group Stage', homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Sweden',       awayFlag: '🇸🇪', date: '2026-06-20', time: '23:00', venue: 'NRG Stadium',                city: 'Houston',       country: 'USA'    },
  { matchNumber: 28, group: 'F', stage: 'Group Stage', homeTeam: 'Tunisia',     homeFlag: '🇹🇳', awayTeam: 'Japan',        awayFlag: '🇯🇵', date: '2026-06-21', time: '10:00', venue: 'Estadio BBVA',               city: 'Monterrey',     country: 'Mexico' },
  { matchNumber: 43, group: 'F', stage: 'Group Stage', homeTeam: 'Japan',       homeFlag: '🇯🇵', awayTeam: 'Sweden',       awayFlag: '🇸🇪', date: '2026-06-26', time: '05:00', venue: 'AT&T Stadium',               city: 'Dallas',        country: 'USA'    },
  { matchNumber: 44, group: 'F', stage: 'Group Stage', homeTeam: 'Tunisia',     homeFlag: '🇹🇳', awayTeam: 'Netherlands',  awayFlag: '🇳🇱', date: '2026-06-26', time: '05:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',   country: 'USA'    },

  // ===== GROUP G ===== (Belgium, Egypt, IR Iran, New Zealand)
  { matchNumber: 13, group: 'G', stage: 'Group Stage', homeTeam: 'IR Iran',     homeFlag: '🇮🇷', awayTeam: 'New Zealand',  awayFlag: '🇳🇿', date: '2026-06-16', time: '07:00', venue: 'SoFi Stadium',               city: 'Los Angeles',   country: 'USA'    },
  { matchNumber: 14, group: 'G', stage: 'Group Stage', homeTeam: 'Belgium',     homeFlag: '🇧🇪', awayTeam: 'Egypt',        awayFlag: '🇪🇬', date: '2026-06-16', time: '01:00', venue: 'Lumen Field',                city: 'Seattle',       country: 'USA'    },
  { matchNumber: 29, group: 'G', stage: 'Group Stage', homeTeam: 'Belgium',     homeFlag: '🇧🇪', awayTeam: 'IR Iran',      awayFlag: '🇮🇷', date: '2026-06-22', time: '01:00', venue: 'SoFi Stadium',               city: 'Los Angeles',   country: 'USA'    },
  { matchNumber: 30, group: 'G', stage: 'Group Stage', homeTeam: 'New Zealand', homeFlag: '🇳🇿', awayTeam: 'Egypt',        awayFlag: '🇪🇬', date: '2026-06-22', time: '07:00', venue: 'BC Place',                   city: 'Vancouver',     country: 'Canada' },
  { matchNumber: 45, group: 'G', stage: 'Group Stage', homeTeam: 'Egypt',       homeFlag: '🇪🇬', awayTeam: 'IR Iran',      awayFlag: '🇮🇷', date: '2026-06-27', time: '09:00', venue: 'Lumen Field',                city: 'Seattle',       country: 'USA'    },
  { matchNumber: 46, group: 'G', stage: 'Group Stage', homeTeam: 'New Zealand', homeFlag: '🇳🇿', awayTeam: 'Belgium',      awayFlag: '🇧🇪', date: '2026-06-27', time: '09:00', venue: 'BC Place',                   city: 'Vancouver',     country: 'Canada' },

  // ===== GROUP H ===== (Spain, Cabo Verde, Saudi Arabia, Uruguay)
  { matchNumber: 15, group: 'H', stage: 'Group Stage', homeTeam: 'Spain',        homeFlag: '🇪🇸', awayTeam: 'Cabo Verde',   awayFlag: '🇨🇻', date: '2026-06-15', time: '22:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',       country: 'USA'    },
  { matchNumber: 16, group: 'H', stage: 'Group Stage', homeTeam: 'Saudi Arabia', homeFlag: '🇸🇦', awayTeam: 'Uruguay',      awayFlag: '🇺🇾', date: '2026-06-16', time: '04:00', venue: 'Hard Rock Stadium',          city: 'Miami',         country: 'USA'    },
  { matchNumber: 31, group: 'H', stage: 'Group Stage', homeTeam: 'Spain',        homeFlag: '🇪🇸', awayTeam: 'Saudi Arabia', awayFlag: '🇸🇦', date: '2026-06-21', time: '22:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',       country: 'USA'    },
  { matchNumber: 32, group: 'H', stage: 'Group Stage', homeTeam: 'Uruguay',      homeFlag: '🇺🇾', awayTeam: 'Cabo Verde',   awayFlag: '🇨🇻', date: '2026-06-22', time: '04:00', venue: 'Hard Rock Stadium',          city: 'Miami',         country: 'USA'    },
  { matchNumber: 47, group: 'H', stage: 'Group Stage', homeTeam: 'Cabo Verde',   homeFlag: '🇨🇻', awayTeam: 'Saudi Arabia', awayFlag: '🇸🇦', date: '2026-06-27', time: '06:00', venue: 'NRG Stadium',                city: 'Houston',       country: 'USA'    },
  { matchNumber: 48, group: 'H', stage: 'Group Stage', homeTeam: 'Uruguay',      homeFlag: '🇺🇾', awayTeam: 'Spain',        awayFlag: '🇪🇸', date: '2026-06-27', time: '06:00', venue: 'Estadio Akron',              city: 'Guadalajara',   country: 'Mexico' },

  // ===== GROUP I ===== (France, Senegal, Iraq, Norway)
  { matchNumber: 49, group: 'I', stage: 'Group Stage', homeTeam: 'France',  homeFlag: '🇫🇷', awayTeam: 'Senegal',  awayFlag: '🇸🇳', date: '2026-06-17', time: '01:00', venue: 'MetLife Stadium',            city: 'New York/NJ',   country: 'USA'    },
  { matchNumber: 50, group: 'I', stage: 'Group Stage', homeTeam: 'Iraq',    homeFlag: '🇮🇶', awayTeam: 'Norway',   awayFlag: '🇳🇴', date: '2026-06-17', time: '04:00', venue: 'Gillette Stadium',           city: 'Boston',        country: 'USA'    },
  { matchNumber: 51, group: 'I', stage: 'Group Stage', homeTeam: 'Norway',  homeFlag: '🇳🇴', awayTeam: 'Senegal',  awayFlag: '🇸🇳', date: '2026-06-23', time: '06:00', venue: 'MetLife Stadium',            city: 'New York/NJ',   country: 'USA'    },
  { matchNumber: 52, group: 'I', stage: 'Group Stage', homeTeam: 'France',  homeFlag: '🇫🇷', awayTeam: 'Iraq',     awayFlag: '🇮🇶', date: '2026-06-23', time: '03:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',  country: 'USA'    },
  { matchNumber: 53, group: 'I', stage: 'Group Stage', homeTeam: 'Norway',  homeFlag: '🇳🇴', awayTeam: 'France',   awayFlag: '🇫🇷', date: '2026-06-27', time: '01:00', venue: 'Gillette Stadium',           city: 'Boston',        country: 'USA'    },
  { matchNumber: 54, group: 'I', stage: 'Group Stage', homeTeam: 'Senegal', homeFlag: '🇸🇳', awayTeam: 'Iraq',     awayFlag: '🇮🇶', date: '2026-06-27', time: '01:00', venue: 'BMO Field',                  city: 'Toronto',       country: 'Canada' },

  // ===== GROUP J ===== (Argentina, Algeria, Austria, Jordan)
  { matchNumber: 55, group: 'J', stage: 'Group Stage', homeTeam: 'Argentina', homeFlag: '🇦🇷', awayTeam: 'Algeria', awayFlag: '🇩🇿', date: '2026-06-17', time: '07:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',   country: 'USA'    },
  { matchNumber: 56, group: 'J', stage: 'Group Stage', homeTeam: 'Austria',   homeFlag: '🇦🇹', awayTeam: 'Jordan',  awayFlag: '🇯🇴', date: '2026-06-17', time: '10:00', venue: "Levi's Stadium",             city: 'San Francisco', country: 'USA'    },
  { matchNumber: 57, group: 'J', stage: 'Group Stage', homeTeam: 'Argentina', homeFlag: '🇦🇷', awayTeam: 'Austria', awayFlag: '🇦🇹', date: '2026-06-22', time: '23:00', venue: 'AT&T Stadium',               city: 'Dallas',        country: 'USA'    },
  { matchNumber: 58, group: 'J', stage: 'Group Stage', homeTeam: 'Jordan',    homeFlag: '🇯🇴', awayTeam: 'Algeria', awayFlag: '🇩🇿', date: '2026-06-23', time: '09:00', venue: "Levi's Stadium",             city: 'San Francisco', country: 'USA'    },
  { matchNumber: 59, group: 'J', stage: 'Group Stage', homeTeam: 'Algeria',   homeFlag: '🇩🇿', awayTeam: 'Austria', awayFlag: '🇦🇹', date: '2026-06-28', time: '08:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',   country: 'USA'    },
  { matchNumber: 60, group: 'J', stage: 'Group Stage', homeTeam: 'Jordan',    homeFlag: '🇯🇴', awayTeam: 'Argentina',awayFlag: '🇦🇷', date: '2026-06-28', time: '08:00', venue: 'AT&T Stadium',               city: 'Dallas',        country: 'USA'    },

  // ===== GROUP K ===== (Portugal, Congo DR, Uzbekistan, Colombia)
  { matchNumber: 61, group: 'K', stage: 'Group Stage', homeTeam: 'Portugal',   homeFlag: '🇵🇹', awayTeam: 'Congo DR',   awayFlag: '🇨🇩', date: '2026-06-17', time: '23:00', venue: 'NRG Stadium',                city: 'Houston',       country: 'USA'    },
  { matchNumber: 62, group: 'K', stage: 'Group Stage', homeTeam: 'Uzbekistan', homeFlag: '🇺🇿', awayTeam: 'Colombia',   awayFlag: '🇨🇴', date: '2026-06-18', time: '08:00', venue: 'Estadio Azteca',             city: 'Mexico City',   country: 'Mexico' },
  { matchNumber: 63, group: 'K', stage: 'Group Stage', homeTeam: 'Portugal',   homeFlag: '🇵🇹', awayTeam: 'Uzbekistan', awayFlag: '🇺🇿', date: '2026-06-23', time: '23:00', venue: 'NRG Stadium',                city: 'Houston',       country: 'USA'    },
  { matchNumber: 64, group: 'K', stage: 'Group Stage', homeTeam: 'Colombia',   homeFlag: '🇨🇴', awayTeam: 'Congo DR',   awayFlag: '🇨🇩', date: '2026-06-24', time: '08:00', venue: 'Estadio Akron',              city: 'Guadalajara',   country: 'Mexico' },
  { matchNumber: 65, group: 'K', stage: 'Group Stage', homeTeam: 'Colombia',   homeFlag: '🇨🇴', awayTeam: 'Portugal',   awayFlag: '🇵🇹', date: '2026-06-28', time: '05:30', venue: 'Hard Rock Stadium',          city: 'Miami',         country: 'USA'    },
  { matchNumber: 66, group: 'K', stage: 'Group Stage', homeTeam: 'Congo DR',   homeFlag: '🇨🇩', awayTeam: 'Uzbekistan', awayFlag: '🇺🇿', date: '2026-06-28', time: '05:30', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',       country: 'USA'    },

  // ===== GROUP L ===== (England, Croatia, Ghana, Panama)
  { matchNumber: 67, group: 'L', stage: 'Group Stage', homeTeam: 'Ghana',   homeFlag: '🇬🇭', awayTeam: 'Panama',  awayFlag: '🇵🇦', date: '2026-06-18', time: '05:00', venue: 'BMO Field',                  city: 'Toronto',       country: 'Canada' },
  { matchNumber: 68, group: 'L', stage: 'Group Stage', homeTeam: 'England', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayTeam: 'Croatia', awayFlag: '🇭🇷', date: '2026-06-18', time: '02:00', venue: 'AT&T Stadium',               city: 'Dallas',        country: 'USA'    },
  { matchNumber: 69, group: 'L', stage: 'Group Stage', homeTeam: 'England', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayTeam: 'Ghana',   awayFlag: '🇬🇭', date: '2026-06-24', time: '02:00', venue: 'Gillette Stadium',           city: 'Boston',        country: 'USA'    },
  { matchNumber: 70, group: 'L', stage: 'Group Stage', homeTeam: 'Panama',  homeFlag: '🇵🇦', awayTeam: 'Croatia', awayFlag: '🇭🇷', date: '2026-06-24', time: '05:00', venue: 'BMO Field',                  city: 'Toronto',       country: 'Canada' },
  { matchNumber: 71, group: 'L', stage: 'Group Stage', homeTeam: 'Panama',  homeFlag: '🇵🇦', awayTeam: 'England', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', date: '2026-06-28', time: '03:00', venue: 'MetLife Stadium',            city: 'New York/NJ',   country: 'USA'    },
  { matchNumber: 72, group: 'L', stage: 'Group Stage', homeTeam: 'Croatia', homeFlag: '🇭🇷', awayTeam: 'Ghana',   awayFlag: '🇬🇭', date: '2026-06-28', time: '03:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',  country: 'USA'    },

  // ===== ROUND OF 32 (Matches 73–88) — BDT dates =====
  { matchNumber: 73,  stage: 'Round of 32', homeTeam: 'Runner-up A',     homeFlag: '🏳️', awayTeam: 'Runner-up B',     awayFlag: '🏳️', date: '2026-06-29', time: '01:00', venue: 'SoFi Stadium',               city: 'Los Angeles',   country: 'USA'    },
  { matchNumber: 74,  stage: 'Round of 32', homeTeam: 'Winner E',        homeFlag: '🏳️', awayTeam: '3rd (A/B/C/D/F)', awayFlag: '🏳️', date: '2026-06-30', time: '02:00', venue: 'Gillette Stadium',           city: 'Boston',        country: 'USA'    },
  { matchNumber: 75,  stage: 'Round of 32', homeTeam: 'Winner F',        homeFlag: '🏳️', awayTeam: 'Runner-up C',     awayFlag: '🏳️', date: '2026-06-30', time: '06:00', venue: 'Estadio BBVA',               city: 'Monterrey',     country: 'Mexico' },
  { matchNumber: 76,  stage: 'Round of 32', homeTeam: 'Winner C',        homeFlag: '🏳️', awayTeam: 'Runner-up F',     awayFlag: '🏳️', date: '2026-06-29', time: '23:00', venue: 'NRG Stadium',                city: 'Houston',       country: 'USA'    },
  { matchNumber: 77,  stage: 'Round of 32', homeTeam: 'Winner I',        homeFlag: '🏳️', awayTeam: '3rd (C/D/F/G/H)', awayFlag: '🏳️', date: '2026-07-01', time: '02:00', venue: 'MetLife Stadium',            city: 'New York/NJ',   country: 'USA'    },
  { matchNumber: 78,  stage: 'Round of 32', homeTeam: 'Runner-up E',     homeFlag: '🏳️', awayTeam: 'Runner-up I',     awayFlag: '🏳️', date: '2026-07-01', time: '00:00', venue: 'AT&T Stadium',               city: 'Dallas',        country: 'USA'    },
  { matchNumber: 79,  stage: 'Round of 32', homeTeam: 'Winner A',        homeFlag: '🏳️', awayTeam: '3rd (C/E/F/H/I)', awayFlag: '🏳️', date: '2026-07-01', time: '06:00', venue: 'Estadio Azteca',             city: 'Mexico City',   country: 'Mexico' },
  { matchNumber: 80,  stage: 'Round of 32', homeTeam: 'Winner L',        homeFlag: '🏳️', awayTeam: '3rd (E/H/I/J/K)', awayFlag: '🏳️', date: '2026-07-01', time: '23:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',       country: 'USA'    },
  { matchNumber: 81,  stage: 'Round of 32', homeTeam: 'Winner D',        homeFlag: '🏳️', awayTeam: '3rd (B/E/F/I/J)', awayFlag: '🏳️', date: '2026-07-02', time: '07:00', venue: "Levi's Stadium",             city: 'San Francisco', country: 'USA'    },
  { matchNumber: 82,  stage: 'Round of 32', homeTeam: 'Winner G',        homeFlag: '🏳️', awayTeam: '3rd (A/E/H/I/J)', awayFlag: '🏳️', date: '2026-07-02', time: '02:00', venue: 'Lumen Field',                city: 'Seattle',       country: 'USA'    },
  { matchNumber: 83,  stage: 'Round of 32', homeTeam: 'Runner-up K',     homeFlag: '🏳️', awayTeam: 'Runner-up L',     awayFlag: '🏳️', date: '2026-07-03', time: '05:00', venue: 'BMO Field',                  city: 'Toronto',       country: 'Canada' },
  { matchNumber: 84,  stage: 'Round of 32', homeTeam: 'Winner H',        homeFlag: '🏳️', awayTeam: 'Runner-up J',     awayFlag: '🏳️', date: '2026-07-03', time: '02:00', venue: 'SoFi Stadium',               city: 'Los Angeles',   country: 'USA'    },
  { matchNumber: 85,  stage: 'Round of 32', homeTeam: 'Winner B',        homeFlag: '🏳️', awayTeam: '3rd (E/F/G/I/J)', awayFlag: '🏳️', date: '2026-07-03', time: '06:00', venue: 'BC Place',                   city: 'Vancouver',     country: 'Canada' },
  { matchNumber: 86,  stage: 'Round of 32', homeTeam: 'Winner J',        homeFlag: '🏳️', awayTeam: 'Runner-up H',     awayFlag: '🏳️', date: '2026-07-04', time: '00:00', venue: 'Hard Rock Stadium',          city: 'Miami',         country: 'USA'    },
  { matchNumber: 87,  stage: 'Round of 32', homeTeam: 'Winner K',        homeFlag: '🏳️', awayTeam: '3rd (D/E/I/J/L)', awayFlag: '🏳️', date: '2026-07-04', time: '00:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',   country: 'USA'    },
  { matchNumber: 88,  stage: 'Round of 32', homeTeam: 'Runner-up D',     homeFlag: '🏳️', awayTeam: 'Runner-up G',     awayFlag: '🏳️', date: '2026-07-04', time: '01:00', venue: 'AT&T Stadium',               city: 'Dallas',        country: 'USA'    },

  // ===== ROUND OF 16 (Matches 89–96) — BDT dates =====
  { matchNumber: 89,  stage: 'Round of 16', homeTeam: 'W Match 74',   homeFlag: '🏳️', awayTeam: 'W Match 77',   awayFlag: '🏳️', date: '2026-07-05', time: '02:00', venue: 'Lincoln Financial Field',    city: 'Philadelphia',  country: 'USA'    },
  { matchNumber: 90,  stage: 'Round of 16', homeTeam: 'W Match 73',   homeFlag: '🏳️', awayTeam: 'W Match 75',   awayFlag: '🏳️', date: '2026-07-05', time: '06:00', venue: 'NRG Stadium',                city: 'Houston',       country: 'USA'    },
  { matchNumber: 91,  stage: 'Round of 16', homeTeam: 'W Match 76',   homeFlag: '🏳️', awayTeam: 'W Match 78',   awayFlag: '🏳️', date: '2026-07-06', time: '02:00', venue: 'MetLife Stadium',            city: 'New York/NJ',   country: 'USA'    },
  { matchNumber: 92,  stage: 'Round of 16', homeTeam: 'W Match 79',   homeFlag: '🏳️', awayTeam: 'W Match 80',   awayFlag: '🏳️', date: '2026-07-06', time: '06:00', venue: 'Estadio Azteca',             city: 'Mexico City',   country: 'Mexico' },
  { matchNumber: 93,  stage: 'Round of 16', homeTeam: 'W Match 83',   homeFlag: '🏳️', awayTeam: 'W Match 84',   awayFlag: '🏳️', date: '2026-07-07', time: '00:00', venue: 'AT&T Stadium',               city: 'Dallas',        country: 'USA'    },
  { matchNumber: 94,  stage: 'Round of 16', homeTeam: 'W Match 81',   homeFlag: '🏳️', awayTeam: 'W Match 82',   awayFlag: '🏳️', date: '2026-07-07', time: '05:00', venue: 'Lumen Field',                city: 'Seattle',       country: 'USA'    },
  { matchNumber: 95,  stage: 'Round of 16', homeTeam: 'W Match 86',   homeFlag: '🏳️', awayTeam: 'W Match 88',   awayFlag: '🏳️', date: '2026-07-07', time: '23:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',       country: 'USA'    },
  { matchNumber: 96,  stage: 'Round of 16', homeTeam: 'W Match 85',   homeFlag: '🏳️', awayTeam: 'W Match 87',   awayFlag: '🏳️', date: '2026-07-08', time: '05:00', venue: 'BC Place',                   city: 'Vancouver',     country: 'Canada' },

  // ===== QUARTER-FINALS (Matches 97–100) — BDT dates =====
  { matchNumber: 97,  stage: 'Quarter-Final', homeTeam: 'W Match 89', homeFlag: '🏳️', awayTeam: 'W Match 90', awayFlag: '🏳️', date: '2026-07-10', time: '01:00', venue: 'Gillette Stadium',           city: 'Boston',        country: 'USA'    },
  { matchNumber: 98,  stage: 'Quarter-Final', homeTeam: 'W Match 93', homeFlag: '🏳️', awayTeam: 'W Match 94', awayFlag: '🏳️', date: '2026-07-11', time: '04:00', venue: 'SoFi Stadium',               city: 'Los Angeles',   country: 'USA'    },
  { matchNumber: 99,  stage: 'Quarter-Final', homeTeam: 'W Match 91', homeFlag: '🏳️', awayTeam: 'W Match 92', awayFlag: '🏳️', date: '2026-07-12', time: '01:00', venue: 'Hard Rock Stadium',          city: 'Miami',         country: 'USA'    },
  { matchNumber: 100, stage: 'Quarter-Final', homeTeam: 'W Match 95', homeFlag: '🏳️', awayTeam: 'W Match 96', awayFlag: '🏳️', date: '2026-07-12', time: '06:00', venue: 'Arrowhead Stadium',          city: 'Kansas City',   country: 'USA'    },

  // ===== SEMI-FINALS (Matches 101–102) — BDT dates =====
  { matchNumber: 101, stage: 'Semi-Final', homeTeam: 'W Match 97',  homeFlag: '🏳️', awayTeam: 'W Match 98',  awayFlag: '🏳️', date: '2026-07-15', time: '06:00', venue: 'AT&T Stadium',               city: 'Dallas',        country: 'USA'    },
  { matchNumber: 102, stage: 'Semi-Final', homeTeam: 'W Match 99',  homeFlag: '🏳️', awayTeam: 'W Match 100', awayFlag: '🏳️', date: '2026-07-16', time: '05:00', venue: 'Mercedes-Benz Stadium',     city: 'Atlanta',       country: 'USA'    },

  // ===== THIRD PLACE PLAY-OFF — July 18 03:00 BST (from image) =====
  { matchNumber: 103, stage: 'Third Place', homeTeam: 'L Match 101', homeFlag: '🏳️', awayTeam: 'L Match 102', awayFlag: '🏳️', date: '2026-07-18', time: '03:00', venue: 'Hard Rock Stadium',          city: 'Miami',         country: 'USA'    },

  // ===== FINAL — July 20 01:00 BST, MetLife Stadium NJ (from image) =====
  { matchNumber: 104, stage: 'Final',       homeTeam: 'W Match 101', homeFlag: '🏳️', awayTeam: 'W Match 102', awayFlag: '🏳️', date: '2026-07-20', time: '01:00', venue: 'MetLife Stadium',            city: 'New York/NJ',   country: 'USA'    },
];
