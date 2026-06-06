'use client'

import React, { useState, useMemo } from 'react'
import { TEAMS_DATA } from '@/data/teams'
import { FIXTURES } from '@/data/fixtures'
import { formatBSTTime } from '@/lib/timezone'
import { FlagImage } from '@/components/flag-image'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const GROUPS = ['A','B','C','D','E','F','G','H','I','J','K','L']

export default function GroupsPage() {
  const [activeGroup, setActiveGroup] = useState('A')

  const groupTeams = useMemo(() =>
    TEAMS_DATA.filter(t => t.group === activeGroup).sort((a, b) => a.ranking - b.ranking),
    [activeGroup]
  )

  const groupFixtures = useMemo(() =>
    FIXTURES.filter(f => f.group === activeGroup).sort((a, b) => a.date.localeCompare(b.date)),
    [activeGroup]
  )

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black mb-2">
          <span className="text-emerald-400">2026</span> World Cup Groups
        </h1>
        <p className="text-muted-foreground text-sm">48 teams · 12 groups · Top 2 + 8 best 3rd placed teams advance</p>
      </div>

      {/* Group Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 bg-card/25 p-2 rounded-2xl border border-border/60 backdrop-blur-xs w-full justify-start sm:justify-between items-center">
        <div className="flex flex-wrap gap-1.5">
          {GROUPS.map(g => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              className={`w-11 h-11 rounded-xl text-sm font-black transition-all duration-200 cursor-pointer ${
                activeGroup === g
                  ? 'bg-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/10 scale-105'
                  : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground/60 font-mono font-semibold uppercase pr-2">
          <Users className="h-4 w-4 text-emerald-400" />
          <span>Active: Group {activeGroup}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeGroup}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Teams Table */}
          <div className="rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md overflow-hidden shadow-md">
            <div className="px-6 py-4.5 border-b border-border/30 bg-gradient-to-r from-muted/30 to-muted/10">
              <h2 className="text-lg font-black tracking-wide text-foreground">Group {activeGroup} Standings</h2>
            </div>
            <div className="divide-y divide-border/20">
              {groupTeams.map((team, idx) => (
                <div key={team.code} className="flex items-center gap-4 px-6 py-4.5 hover:bg-muted/20 transition-all duration-200 group">
                  <div className="w-5 text-center font-mono font-black text-muted-foreground text-xs">{idx + 1}</div>
                  <FlagImage code={team.code} className="w-10 h-6.5 shadow-md group-hover:scale-105 transition-transform" />
                  <div className="flex-1">
                    <div className="font-extrabold text-sm text-foreground leading-none">{team.name}</div>
                    <div className="text-[10px] text-muted-foreground mt-1 font-mono font-semibold uppercase">{team.confederation}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-muted-foreground font-mono font-semibold uppercase">FIFA Rank</div>
                    <div className="font-black text-xs text-emerald-400 font-mono mt-0.5">#{team.ranking}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Fixtures */}
          <div className="rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md overflow-hidden shadow-md">
            <div className="px-6 py-4.5 border-b border-border/30 bg-gradient-to-r from-muted/30 to-muted/10">
              <h2 className="text-lg font-black tracking-wide text-foreground">Group {activeGroup} Fixtures</h2>
            </div>
            <div className="divide-y divide-border/20">
              {groupFixtures.map(match => (
                <div key={match.matchNumber} className="px-6 py-4.5 hover:bg-muted/20 transition-all duration-200 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <FlagImage code={match.homeFlag} className="w-8 h-5 shadow-xs" />
                      <span className="font-extrabold text-xs text-foreground">{match.homeTeam}</span>
                    </div>
                    <div className="px-2 py-0.5 bg-muted/60 border border-border/30 rounded font-mono font-bold text-[9px] text-muted-foreground">VS</div>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-xs text-foreground">{match.awayTeam}</span>
                      <FlagImage code={match.awayFlag} className="w-8 h-5 shadow-xs" />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-[10px] text-muted-foreground font-medium pt-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{new Date(match.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{formatBSTTime(match.time, match.city)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate max-w-[120px] sm:max-w-xs">{match.city}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
