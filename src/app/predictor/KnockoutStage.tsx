'use client'

import { usePredictorStore } from '@/store/predictorStore'
import { Card, CardContent } from '@/components/ui/card'
import { Team, Match } from '@/types/predictor'
import { useEffect } from 'react'
import { FlagImage } from '@/components/flag-image'
import { motion } from 'framer-motion'

const STAGES = [
  { id: 'round_of_32', name: 'Round of 32', matches: [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88] },
  // R16 groupings based on official bracket:
  // 89=W73vW75, 90=W74vW77, 91=W76vW78, 92=W79vW80
  // 93=W83vW84, 94=W81vW82, 95=W86vW88, 96=W85vW87
  { id: 'round_of_16', name: 'Round of 16', matches: [89, 90, 91, 92, 93, 94, 95, 96] },
  { id: 'quarter_final', name: 'Quarter Finals', matches: [97, 98, 99, 100] },
  { id: 'semi_final', name: 'Semi Finals', matches: [101, 102] },
  { id: 'third_place', name: 'Third Place', matches: [103] },
  { id: 'final', name: 'Final', matches: [104] }
];

function MatchCard({ matchId }: { matchId: string }) {
  const { knockoutMatches, setMatchWinner } = usePredictorStore() as any; // Cast for injected initBracket
  const match = knockoutMatches[matchId] as Match;

  if (!match) return null;

  const handleSelectWinner = (team: Team | undefined | null) => {
    if (team) setMatchWinner(matchId, team);
  }

  const isHomeWinner = match.winner?.id === match.home_team?.id;
  const isAwayWinner = match.winner?.id === match.away_team?.id;
  const hasWinner = !!match.winner;

  return (
    <div className="w-full text-xs border border-border/60 bg-card/30 backdrop-blur-xs rounded-xl mb-3 overflow-hidden shadow-xs hover:border-emerald-500/20 transition-all duration-200">
      <div className="bg-muted/30 px-2.5 py-1 text-[9px] text-muted-foreground font-mono flex justify-between border-b border-border/30">
        <span>MATCH {match.match_number}</span>
        <span className="font-bold text-[9px] uppercase tracking-wider text-emerald-400">
          {match.stage.replace('_', ' ')}
        </span>
      </div>
      <div className="flex flex-col">
        {/* Home Team */}
        <button
          className={`flex items-center p-2.5 gap-2.5 text-left transition-all ${isHomeWinner
              ? 'bg-emerald-500/10 font-bold text-emerald-400 border-l-4 border-l-emerald-500'
              : hasWinner && match.home_team
                ? 'opacity-40 hover:opacity-85'
                : 'hover:bg-muted/40 border-l-4 border-l-transparent'
            } ${!match.home_team ? 'opacity-35 cursor-not-allowed' : ''}`}
          onClick={() => handleSelectWinner(match.home_team)}
          disabled={!match.home_team}
        >
          {match.home_team ? (
            <FlagImage code={match.home_team.flag_url || match.home_team.code} className="w-6 h-4 shadow-xs shrink-0" />
          ) : (
            <div className="w-6 h-4 rounded-xs bg-muted/60 border border-dashed border-muted-foreground/30 flex items-center justify-center text-[8px] text-muted-foreground">?</div>
          )}
          <span className="truncate flex-1">{match.home_team?.name || 'TBD'}</span>
          {isHomeWinner && <span className="text-[10px] text-emerald-400 font-black">✓</span>}
        </button>

        <div className="h-[1px] w-full bg-border/20" />

        {/* Away Team */}
        <button
          className={`flex items-center p-2.5 gap-2.5 text-left transition-all ${isAwayWinner
              ? 'bg-emerald-500/10 font-bold text-emerald-400 border-l-4 border-l-emerald-500'
              : hasWinner && match.away_team
                ? 'opacity-40 hover:opacity-85'
                : 'hover:bg-muted/40 border-l-4 border-l-transparent'
            } ${!match.away_team ? 'opacity-35 cursor-not-allowed' : ''}`}
          onClick={() => handleSelectWinner(match.away_team)}
          disabled={!match.away_team}
        >
          {match.away_team ? (
            <FlagImage code={match.away_team.flag_url || match.away_team.code} className="w-6 h-4 shadow-xs shrink-0" />
          ) : (
            <div className="w-6 h-4 rounded-xs bg-muted/60 border border-dashed border-muted-foreground/30 flex items-center justify-center text-[8px] text-muted-foreground">?</div>
          )}
          <span className="truncate flex-1">{match.away_team?.name || 'TBD'}</span>
          {isAwayWinner && <span className="text-[10px] text-emerald-400 font-black">✓</span>}
        </button>
      </div>
    </div>
  )
}

function Podium({
  champion,
  runnerUp,
  thirdPlaceWinner
}: {
  champion: Team;
  runnerUp: Team | null;
  thirdPlaceWinner: Team | null
}) {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 mb-10 bg-gradient-to-b from-card/30 to-card/10 backdrop-blur-md rounded-3xl border border-border/60 shadow-xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 blur-[80px] rounded-full -z-10" />

      <h2 className="text-xs font-mono font-extrabold tracking-widest text-emerald-400 mb-8 uppercase">Tournament Podium Predictions</h2>

      <div className="flex items-end justify-center gap-3 sm:gap-6 w-full max-w-md h-64 mt-4">
        {/* 2nd Place - Silver */}
        <div className="flex flex-col items-center flex-1">
          {runnerUp ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center mb-3 text-center"
            >
              <FlagImage code={runnerUp.flag_url || runnerUp.code} className="w-12 h-8 shadow-md rounded-md border border-border/30 hover:scale-105 transition-transform" />
              <span className="text-xs font-black mt-2 leading-tight text-foreground truncate max-w-[90px]">{runnerUp.name}</span>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center mb-3">
              <div className="w-12 h-8 rounded-md bg-muted/30 border border-dashed border-muted-foreground/20 flex items-center justify-center text-[10px] text-muted-foreground font-bold font-mono">TBD</div>
              <span className="text-[10px] text-muted-foreground mt-2 font-semibold">2nd Place</span>
            </div>
          )}
          <div className="w-full h-24 bg-gradient-to-t from-slate-500/30 to-slate-400/20 border border-slate-500/30 rounded-t-2xl flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-400/50" />
            <span className="text-3xl font-black text-slate-400/80 font-mono">2</span>
            <span className="text-[9px] font-black tracking-widest text-slate-400/60 uppercase font-mono mt-0.5">SILVER</span>
          </div>
        </div>

        {/* 1st Place - Gold */}
        <div className="flex flex-col items-center flex-1 z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex flex-col items-center mb-3 text-center"
          >
            <span className="text-3xl mb-1 animate-bounce">🏆</span>
            <FlagImage code={champion.flag_url || champion.code} className="w-16 h-10 shadow-lg rounded-md border-2 border-amber-400 hover:scale-105 transition-transform" />
            <span className="text-sm font-black mt-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 truncate max-w-[110px] uppercase tracking-tight">{champion.name}</span>
          </motion.div>
          <div className="w-full h-32 bg-gradient-to-t from-amber-500/30 to-amber-400/20 border border-amber-500/30 rounded-t-2xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-400/50" />
            <span className="text-4xl font-black text-amber-400/90 font-mono">1</span>
            <span className="text-[9px] font-black tracking-widest text-amber-400/60 uppercase font-mono mt-0.5">CHAMPION</span>
          </div>
        </div>

        {/* 3rd Place - Bronze */}
        <div className="flex flex-col items-center flex-1">
          {thirdPlaceWinner ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center mb-3 text-center"
            >
              <FlagImage code={thirdPlaceWinner.flag_url || thirdPlaceWinner.code} className="w-12 h-8 shadow-md rounded-md border border-border/30 hover:scale-105 transition-transform" />
              <span className="text-xs font-black mt-2 leading-tight text-foreground truncate max-w-[90px]">{thirdPlaceWinner.name}</span>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center mb-3">
              <div className="w-12 h-8 rounded-md bg-muted/30 border border-dashed border-muted-foreground/20 flex items-center justify-center text-[10px] text-muted-foreground font-bold font-mono">TBD</div>
              <span className="text-[10px] text-muted-foreground mt-2 font-semibold">3rd Place</span>
            </div>
          )}
          <div className="w-full h-20 bg-gradient-to-t from-amber-800/30 to-amber-700/20 border border-amber-800/30 rounded-t-2xl flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-700/50" />
            <span className="text-2xl font-black text-amber-700/80 font-mono">3</span>
            <span className="text-[9px] font-black tracking-widest text-amber-700/60 uppercase font-mono mt-0.5">BRONZE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function KnockoutStage() {
  const initBracket = usePredictorStore(state => (state as any).initBracket)
  const knockoutMatches = usePredictorStore(state => state.knockoutMatches)

  // Initialize bracket on mount if empty
  useEffect(() => {
    if (Object.keys(knockoutMatches).length === 0) {
      initBracket()
    }
  }, [initBracket, knockoutMatches])

  const finalMatch = knockoutMatches['104'];
  const champion = finalMatch?.winner;
  const runnerUp = champion
    ? (champion.id === finalMatch.home_team?.id ? finalMatch.away_team : finalMatch.home_team) || null
    : null;

  const thirdPlaceMatch = knockoutMatches['103'];
  const thirdPlaceWinner = thirdPlaceMatch?.winner || null;

  return (
    <div className="flex flex-col w-full h-full">

      {champion && (
        <Podium
          champion={champion}
          runnerUp={runnerUp}
          thirdPlaceWinner={thirdPlaceWinner}
        />
      )}

      <div className="flex flex-col lg:flex-row gap-6 w-full overflow-x-auto pb-8 snap-x">
        {STAGES.map((stage) => (
          <div key={stage.id} className="flex-1 min-w-[250px] flex flex-col snap-center">
            <h3 className="text-center font-bold text-muted-foreground mb-6 uppercase tracking-wider sticky top-0 bg-background/95 py-2 z-10">
              {stage.name}
            </h3>
            <div className="flex flex-col justify-around flex-1 gap-2">
              {stage.matches.map((matchNum) => (
                <MatchCard key={matchNum} matchId={matchNum.toString()} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
