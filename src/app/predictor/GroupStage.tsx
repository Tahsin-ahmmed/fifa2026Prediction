'use client'

import { usePredictorStore } from '@/store/predictorStore'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FlagImage } from '@/components/flag-image'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const RANK_CONFIG = [
  { label: '1st', bar: 'bg-emerald-500',     badge: 'bg-emerald-500/20 text-emerald-400', border: 'border-l-emerald-500 bg-emerald-500/5' },
  { label: '2nd', bar: 'bg-emerald-500',     badge: 'bg-emerald-500/20 text-emerald-400', border: 'border-l-emerald-500 bg-emerald-500/5' },
  { label: '3rd', bar: 'bg-amber-400',       badge: 'bg-amber-500/20 text-amber-400',     border: 'border-l-amber-400 bg-amber-500/5'   },
  { label: '4th', bar: 'bg-muted-foreground/30', badge: 'bg-muted/60 text-muted-foreground', border: 'border-l-border bg-card/30'        },
]

function TeamRow({
  team,
  index,
  totalTeams,
  onMoveUp,
  onMoveDown,
}: {
  team: any
  index: number
  totalTeams: number
  onMoveUp: () => void
  onMoveDown: () => void
}) {
  const rank = RANK_CONFIG[index] ?? RANK_CONFIG[3]

  return (
    <motion.div
      layout
      layoutId={team.id}
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
    >
      <div
        className={`flex items-center gap-2.5 p-3 mb-2 rounded-xl border border-border/40 border-l-4 transition-colors duration-200 ${rank.border}`}
      >
        {/* Rank badge */}
        <div
          className={`w-8 h-7 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${rank.badge}`}
        >
          {rank.label}
        </div>

        {/* Flag */}
        <FlagImage code={team.flag_url || team.code} className="w-8 h-5 shadow-sm shrink-0" />

        {/* Team name */}
        <div className="font-semibold text-sm flex-1 min-w-0 truncate">{team.name}</div>

        {/* Code */}
        <span className="text-[9px] font-mono text-muted-foreground font-bold px-1.5 py-0.5 bg-muted/60 rounded-md uppercase shrink-0 hidden xs:block">
          {team.code}
        </span>

        {/* ↑ ↓ buttons */}
        <div className="flex flex-col gap-0.5 shrink-0">
          <button
            onClick={onMoveUp}
            disabled={index === 0}
            aria-label={`Move ${team.name} up`}
            className="w-8 h-7 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-emerald-500/20 hover:text-emerald-400 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-150 active:scale-90 touch-manipulation"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            onClick={onMoveDown}
            disabled={index === totalTeams - 1}
            aria-label={`Move ${team.name} down`}
            className="w-8 h-7 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-emerald-500/20 hover:text-emerald-400 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-150 active:scale-90 touch-manipulation"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export function GroupStage() {
  const { availableGroups, groupRankings, reorderGroup } = usePredictorStore()

  if (!availableGroups.length)
    return <div className="text-center py-20 text-muted-foreground">Loading groups…</div>

  const moveTeam = (
    groupId: string,
    teams: any[],
    index: number,
    direction: 'up' | 'down'
  ) => {
    const neighborIndex = direction === 'up' ? index - 1 : index + 1
    if (neighborIndex < 0 || neighborIndex >= teams.length) return
    // reorderGroup swaps activeId with overId's position
    reorderGroup(groupId, teams[index].id, teams[neighborIndex].id)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {availableGroups.map((group) => {
        const teams = groupRankings[group.id] || []

        return (
          <Card
            key={group.id}
            className="overflow-hidden border border-border/40 bg-card/30 backdrop-blur-md shadow-lg hover:shadow-emerald-500/5 hover:border-emerald-500/20 transition-all duration-300 rounded-2xl"
          >
            <CardHeader className="bg-gradient-to-r from-muted/30 to-muted/10 border-b border-border/30 pb-3">
              <CardTitle className="text-center font-black text-sm tracking-widest text-emerald-400 uppercase">
                Group {group.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-4 bg-transparent">
              <AnimatePresence initial={false}>
                {teams.map((team, index) => (
                  <TeamRow
                    key={team.id}
                    team={team}
                    index={index}
                    totalTeams={teams.length}
                    onMoveUp={() => moveTeam(group.id, teams, index, 'up')}
                    onMoveDown={() => moveTeam(group.id, teams, index, 'down')}
                  />
                ))}
              </AnimatePresence>

              {/* Legend */}
              <div className="mt-3 pt-2 border-t border-border/30 flex gap-3 flex-wrap text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  Top 2 Qualify
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                  Wildcard
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/40 inline-block" />
                  Out
                </span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
