import { create } from 'zustand'
import { PredictorState, Group, Team, Match } from '@/types/predictor'
import { arrayMove } from '@dnd-kit/sortable'
import { generateInitialBracket, NEXT_MATCH_MAP } from '@/lib/bracket-generator'

export const usePredictorStore = create<PredictorState & { initBracket: () => void }>((set) => ({
  availableGroups: [],
  groupRankings: {},
  selectedThirdPlaceTeams: [],
  knockoutMatches: {},

  setAvailableGroups: (groups) => {
    // Initialize group rankings when groups are loaded
    const initialRankings: Record<string, Team[]> = {}
    groups.forEach((group) => {
      initialRankings[group.id] = group.teams
    })
    set({ 
      availableGroups: groups, 
      groupRankings: initialRankings,
      selectedThirdPlaceTeams: [], // Reset selected teams if data changes
      knockoutMatches: {} // Reset bracket
    })
  },

  reorderGroup: (groupId, activeId, overId) => {
    set((state) => {
      const currentRankings = state.groupRankings[groupId]
      const oldIndex = currentRankings.findIndex((t) => t.id === activeId)
      const newIndex = currentRankings.findIndex((t) => t.id === overId)
      
      const newRankings = arrayMove(currentRankings, oldIndex, newIndex)
      
      return {
        groupRankings: {
          ...state.groupRankings,
          [groupId]: newRankings,
        },
      }
    })
  },

  toggleThirdPlaceTeam: (team) => {
    set((state) => {
      const isSelected = state.selectedThirdPlaceTeams.some((t) => t.id === team.id)
      
      if (isSelected) {
        return {
          selectedThirdPlaceTeams: state.selectedThirdPlaceTeams.filter((t) => t.id !== team.id)
        }
      }
      
      if (state.selectedThirdPlaceTeams.length < 8) {
        return {
          selectedThirdPlaceTeams: [...state.selectedThirdPlaceTeams, team]
        }
      }
      
      return state // Don't allow more than 8
    })
  },

  initBracket: () => {
    set((state) => {
      const matches = generateInitialBracket(state.availableGroups, state.groupRankings, state.selectedThirdPlaceTeams);
      return { knockoutMatches: matches };
    });
  },

  setMatchWinner: (matchId, winner) => {
    set((state) => {
      const match = state.knockoutMatches[matchId]
      if (!match) return state
      
      const updatedMatches = { ...state.knockoutMatches }
      updatedMatches[matchId] = { ...match, winner }

      // Advance team to next match
      const nextMatchInfo = NEXT_MATCH_MAP[matchId]
      if (nextMatchInfo) {
        const nextMatch = { ...updatedMatches[nextMatchInfo.nextMatch] }
        if (nextMatchInfo.isHome) {
          nextMatch.home_team = winner
        } else {
          nextMatch.away_team = winner
        }
        updatedMatches[nextMatchInfo.nextMatch] = nextMatch
        
        // Handle third place match propagation (Losers of SF go to Third Place match)
        if (matchId === '101' || matchId === '102') {
          const loser = winner.id === match.home_team?.id ? match.away_team : match.home_team;
          const thirdPlaceMatch = { ...updatedMatches['103'] };
          if (matchId === '101') thirdPlaceMatch.home_team = loser;
          if (matchId === '102') thirdPlaceMatch.away_team = loser;
          updatedMatches['103'] = thirdPlaceMatch;
        }
      }
      
      return { knockoutMatches: updatedMatches }
    })
  }
}))
