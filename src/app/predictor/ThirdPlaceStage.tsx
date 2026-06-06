'use client'

import { usePredictorStore } from '@/store/predictorStore'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { Team } from '@/types/predictor'
import { FlagImage } from '@/components/flag-image'

export function ThirdPlaceStage() {
  const { availableGroups, groupRankings, selectedThirdPlaceTeams, toggleThirdPlaceTeam } = usePredictorStore()

  // Collect the 3rd place teams from all 12 groups
  const thirdPlaceCandidates: Team[] = availableGroups.map((group) => {
    const rankings = groupRankings[group.id]
    // Return the team at index 2 (which is 3rd place, 0-indexed)
    return rankings && rankings.length === 4 ? rankings[2] : null
  }).filter(Boolean) as Team[]

  const selectedCount = selectedThirdPlaceTeams.length
  const needed = 8 - selectedCount

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Select Third-Place Qualifiers</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          In the 2026 format, the 8 best third-placed teams advance to the Round of 32. 
          Please select the 8 teams you believe will qualify from the groups below.
        </p>
        
        <div className={`text-2xl font-bold p-4 rounded-xl inline-block ${needed === 0 ? 'bg-primary/20 text-primary' : 'bg-muted'}`}>
          {needed > 0 
            ? `Select ${needed} more team${needed > 1 ? 's' : ''}`
            : '✓ 8 Teams Selected! You can proceed.'}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {thirdPlaceCandidates.map((team) => {
          const isSelected = selectedThirdPlaceTeams.some(t => t.id === team.id)
          const isDisabled = !isSelected && selectedCount >= 8
          
          return (
            <Card 
              key={team.id} 
              className={`cursor-pointer transition-all duration-300 border-2 rounded-2xl ${
                isSelected 
                  ? 'border-emerald-500 bg-emerald-500/10 scale-105 shadow-emerald-500/20 shadow-xl' 
                  : isDisabled 
                    ? 'opacity-40 cursor-not-allowed border-border bg-muted/20' 
                    : 'hover:border-emerald-500/40 hover:bg-muted/30 border-border/80 bg-card/40'
              }`}
              onClick={() => {
                if (!isDisabled) {
                  toggleThirdPlaceTeam(team)
                }
              }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center relative">
                {isSelected && (
                  <div className="absolute top-3 right-3 bg-emerald-500 text-emerald-950 rounded-full p-1 shadow-md border border-emerald-400">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                )}
                <FlagImage code={team.flag_url || team.code} className="w-14 h-9 mb-3 shadow-md" />
                <div className="font-bold text-sm leading-tight">{team.name}</div>
                <div className="text-xs text-muted-foreground mt-2 font-mono px-2 py-0.5 bg-muted/50 rounded-md uppercase">
                  Group {availableGroups.find(g => g.id === team.group_id)?.name}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
