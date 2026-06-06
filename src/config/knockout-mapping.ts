// Official 2026 FIFA World Cup Knockout Stage Bracket Mapping
// Source: FIFA official regulations

export type KnockoutSlot = {
  type: 'winner' | 'runner_up' | 'third_place';
  group?: string;
  thirdPlacePool?: string[]; // Pool of groups the 3rd place team can come from
};

export type BracketMatchDef = {
  matchNumber: number;
  label: string; // Human-readable label e.g. "1A v 2B"
  homeSlot: KnockoutSlot;
  awaySlot: KnockoutSlot;
};

// Official Round of 32 pairings (Matches 73-88)
export const ROUND_OF_32: BracketMatchDef[] = [
  {
    matchNumber: 73,
    label: '2A vs 2B',
    homeSlot: { type: 'runner_up', group: 'A' },
    awaySlot: { type: 'runner_up', group: 'B' },
  },
  {
    matchNumber: 74,
    label: '1E vs 3rd (A/B/C/D/F)',
    homeSlot: { type: 'winner', group: 'E' },
    awaySlot: { type: 'third_place', thirdPlacePool: ['A', 'B', 'C', 'D', 'F'] },
  },
  {
    matchNumber: 75,
    label: '1F vs 2C',
    homeSlot: { type: 'winner', group: 'F' },
    awaySlot: { type: 'runner_up', group: 'C' },
  },
  {
    matchNumber: 76,
    label: '1C vs 2F',
    homeSlot: { type: 'winner', group: 'C' },
    awaySlot: { type: 'runner_up', group: 'F' },
  },
  {
    matchNumber: 77,
    label: '1I vs 3rd (C/D/F/G/H)',
    homeSlot: { type: 'winner', group: 'I' },
    awaySlot: { type: 'third_place', thirdPlacePool: ['C', 'D', 'F', 'G', 'H'] },
  },
  {
    matchNumber: 78,
    label: '2E vs 2I',
    homeSlot: { type: 'runner_up', group: 'E' },
    awaySlot: { type: 'runner_up', group: 'I' },
  },
  {
    matchNumber: 79,
    label: '1A vs 3rd (C/E/F/H/I)',
    homeSlot: { type: 'winner', group: 'A' },
    awaySlot: { type: 'third_place', thirdPlacePool: ['C', 'E', 'F', 'H', 'I'] },
  },
  {
    matchNumber: 80,
    label: '1L vs 3rd (E/H/I/J/K)',
    homeSlot: { type: 'winner', group: 'L' },
    awaySlot: { type: 'third_place', thirdPlacePool: ['E', 'H', 'I', 'J', 'K'] },
  },
  {
    matchNumber: 81,
    label: '1D vs 3rd (B/E/F/I/J)',
    homeSlot: { type: 'winner', group: 'D' },
    awaySlot: { type: 'third_place', thirdPlacePool: ['B', 'E', 'F', 'I', 'J'] },
  },
  {
    matchNumber: 82,
    label: '1G vs 3rd (A/E/H/I/J)',
    homeSlot: { type: 'winner', group: 'G' },
    awaySlot: { type: 'third_place', thirdPlacePool: ['A', 'E', 'H', 'I', 'J'] },
  },
  {
    matchNumber: 83,
    label: '2K vs 2L',
    homeSlot: { type: 'runner_up', group: 'K' },
    awaySlot: { type: 'runner_up', group: 'L' },
  },
  {
    matchNumber: 84,
    label: '1H vs 2J',
    homeSlot: { type: 'winner', group: 'H' },
    awaySlot: { type: 'runner_up', group: 'J' },
  },
  {
    matchNumber: 85,
    label: '1B vs 3rd (E/F/G/I/J)',
    homeSlot: { type: 'winner', group: 'B' },
    awaySlot: { type: 'third_place', thirdPlacePool: ['E', 'F', 'G', 'I', 'J'] },
  },
  {
    matchNumber: 86,
    label: '1J vs 2H',
    homeSlot: { type: 'winner', group: 'J' },
    awaySlot: { type: 'runner_up', group: 'H' },
  },
  {
    matchNumber: 87,
    label: '1K vs 3rd (D/E/I/J/L)',
    homeSlot: { type: 'winner', group: 'K' },
    awaySlot: { type: 'third_place', thirdPlacePool: ['D', 'E', 'I', 'J', 'L'] },
  },
  {
    matchNumber: 88,
    label: '2D vs 2G',
    homeSlot: { type: 'runner_up', group: 'D' },
    awaySlot: { type: 'runner_up', group: 'G' },
  },
];

// Official Round of 16 pairings (winners of R32 matches)
// W73 vs W75, W74 vs W77, W76 vs W78, W79 vs W80,
// W83 vs W84, W81 vs W82, W86 vs W88, W85 vs W87
export const NEXT_MATCH_MAP: Record<string, { nextMatch: string; isHome: boolean }> = {
  // Round of 32 -> Round of 16
  '73': { nextMatch: '89', isHome: true },
  '75': { nextMatch: '89', isHome: false },

  '74': { nextMatch: '90', isHome: true },
  '77': { nextMatch: '90', isHome: false },

  '76': { nextMatch: '91', isHome: true },
  '78': { nextMatch: '91', isHome: false },

  '79': { nextMatch: '92', isHome: true },
  '80': { nextMatch: '92', isHome: false },

  '83': { nextMatch: '93', isHome: true },
  '84': { nextMatch: '93', isHome: false },

  '81': { nextMatch: '94', isHome: true },
  '82': { nextMatch: '94', isHome: false },

  '86': { nextMatch: '95', isHome: true },
  '88': { nextMatch: '95', isHome: false },

  '85': { nextMatch: '96', isHome: true },
  '87': { nextMatch: '96', isHome: false },

  // Round of 16 -> Quarter Finals
  '89': { nextMatch: '97', isHome: true },
  '90': { nextMatch: '97', isHome: false },

  '91': { nextMatch: '98', isHome: true },
  '92': { nextMatch: '98', isHome: false },

  '93': { nextMatch: '99', isHome: true },
  '94': { nextMatch: '99', isHome: false },

  '95': { nextMatch: '100', isHome: true },
  '96': { nextMatch: '100', isHome: false },

  // Quarter Finals -> Semi Finals (opposite sides of bracket meet)
  '97': { nextMatch: '101', isHome: true },
  '99': { nextMatch: '101', isHome: false },   // W97 vs W99 in SF1

  '98': { nextMatch: '102', isHome: true },
  '100': { nextMatch: '102', isHome: false },  // W98 vs W100 in SF2

  // Semi Finals -> Final
  '101': { nextMatch: '104', isHome: true },
  '102': { nextMatch: '104', isHome: false },
};
