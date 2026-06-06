import { ROUND_OF_32, NEXT_MATCH_MAP } from '@/config/knockout-mapping';
import { Group, Team, Match } from '@/types/predictor';

// Assign the 8 selected 3rd place teams to the 8 third_place slots.
// Each match with a 3rd place slot specifies a pool of eligible groups.
// We iterate the pools in match order and greedily assign the first
// selected 3rd-place team whose group matches the pool.
function assignThirdPlaceTeams(
  selectedThirdPlaceTeams: Team[],
  availableGroups: Group[]
): Map<number, Team> {
  // Build a list of { team, groupName }
  const teamGroups = selectedThirdPlaceTeams.map(team => {
    const grp = availableGroups.find(g => g.id === team.group_id);
    return { team, groupName: grp ? grp.name : '' };
  }).filter(item => item.groupName !== '');

  const thirdPlaceMatches = ROUND_OF_32.filter(m => m.awaySlot.type === 'third_place');
  const assigned = new Map<number, Team>();

  // Backtracking search to find a perfect matching
  const findMatching = (matchIndex: number, usedTeamIds: Set<string>): boolean => {
    if (matchIndex === thirdPlaceMatches.length) {
      return true; // All matches successfully assigned
    }

    const matchDef = thirdPlaceMatches[matchIndex];
    const pool = matchDef.awaySlot.thirdPlacePool || [];

    for (const item of teamGroups) {
      if (!usedTeamIds.has(item.team.id) && pool.includes(item.groupName)) {
        assigned.set(matchDef.matchNumber, item.team);
        usedTeamIds.add(item.team.id);

        if (findMatching(matchIndex + 1, usedTeamIds)) {
          return true;
        }

        // Backtrack
        assigned.delete(matchDef.matchNumber);
        usedTeamIds.delete(item.team.id);
      }
    }

    return false;
  };

  const success = findMatching(0, new Set<string>());

  if (!success) {
    console.warn("Could not find a perfect matching of 3rd place teams, falling back to greedy.");
    const usedGroups = new Set<string>();
    const groupNameMap: Record<string, Team> = {};
    for (const item of teamGroups) {
      groupNameMap[item.groupName] = item.team;
    }
    
    assigned.clear();
    for (const matchDef of thirdPlaceMatches) {
      const pool = matchDef.awaySlot.thirdPlacePool || [];
      for (const groupName of pool) {
        if (!usedGroups.has(groupName) && groupNameMap[groupName]) {
          assigned.set(matchDef.matchNumber, groupNameMap[groupName]);
          usedGroups.add(groupName);
          break;
        }
      }
    }
  }

  return assigned;
}

export function generateInitialBracket(
  availableGroups: Group[],
  groupRankings: Record<string, Team[]>,
  selectedThirdPlaceTeams: Team[]
): Record<string, Match> {
  const matches: Record<string, Match> = {};

  // Build group name -> group id lookup
  const groupByName: Record<string, Group> = {};
  for (const g of availableGroups) groupByName[g.name] = g;

  // Assign 3rd place teams
  const thirdPlaceAssignments = assignThirdPlaceTeams(selectedThirdPlaceTeams, availableGroups);

  const resolveSlot = (slot: typeof ROUND_OF_32[0]['homeSlot'], matchNumber: number, isAway: boolean): Team | undefined => {
    if (slot.type === 'third_place') {
      return thirdPlaceAssignments.get(matchNumber);
    }
    const group = groupByName[slot.group!];
    if (!group) return undefined;
    const rankings = groupRankings[group.id];
    if (!rankings || rankings.length < 2) return undefined;
    if (slot.type === 'winner') return rankings[0];
    if (slot.type === 'runner_up') return rankings[1];
    return undefined;
  };

  // Generate Round of 32
  for (const def of ROUND_OF_32) {
    matches[def.matchNumber.toString()] = {
      id: def.matchNumber.toString(),
      stage: 'round_of_32',
      match_number: def.matchNumber,
      home_team: resolveSlot(def.homeSlot, def.matchNumber, false),
      away_team: resolveSlot(def.awaySlot, def.matchNumber, true),
      winner: null,
    };
  }

  // Round of 16 (89-96) — empty, filled by progression
  for (let i = 89; i <= 96; i++) {
    matches[i.toString()] = { id: i.toString(), stage: 'round_of_16', match_number: i, winner: null };
  }
  // Quarter Finals (97-100)
  for (let i = 97; i <= 100; i++) {
    matches[i.toString()] = { id: i.toString(), stage: 'quarter_final', match_number: i, winner: null };
  }
  // Semi Finals (101-102)
  for (let i = 101; i <= 102; i++) {
    matches[i.toString()] = { id: i.toString(), stage: 'semi_final', match_number: i, winner: null };
  }
  // Third Place Playoff (103) and Final (104)
  matches['103'] = { id: '103', stage: 'third_place', match_number: 103, winner: null };
  matches['104'] = { id: '104', stage: 'final', match_number: 104, winner: null };

  return matches;
}

export { NEXT_MATCH_MAP };
