'use client'

import React, { useState, useMemo } from 'react'
import { FIXTURES, MatchFixture } from '@/data/fixtures'
import { formatBSTTime } from '@/lib/timezone'
import { MapPin, Clock, Calendar, Search } from 'lucide-react'
import { FlagImage } from '@/components/flag-image'
import { motion, AnimatePresence } from 'framer-motion'

const GROUPS = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Knockout']

const KNOCKOUT_STAGES = [
  { label: 'Round of 32', matches: '73–88', dates: 'Jun 28 – Jul 3' },
  { label: 'Round of 16', matches: '89–96', dates: 'Jul 4–7' },
  { label: 'Quarter-Finals', matches: '97–100', dates: 'Jul 9–11' },
  { label: 'Semi-Finals', matches: '101–102', dates: 'Jul 14–15' },
  { label: '3rd Place Play-off', matches: '103', dates: 'Jul 18' },
  { label: 'Final', matches: '104', dates: 'Jul 19' },
]

function formatDate(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

function MatchCard({ match }: { match: MatchFixture }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md overflow-hidden hover:border-emerald-500/35 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full shadow-xs"
    >
      <div>
        {/* Stage badge */}
        <div className="px-4.5 pt-3.5 pb-2 flex items-center justify-between border-b border-border/30 bg-muted/20">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
            {match.group ? `Group ${match.group}` : match.stage}
          </span>
          <span className="text-[10px] font-mono text-muted-foreground font-semibold px-2 py-0.5 bg-muted/60 rounded-md">
            #{match.matchNumber}
          </span>
        </div>

        {/* Teams */}
        <div className="px-5 py-6 flex items-center gap-4 justify-between">
          {/* Home */}
          <div className="flex-1 flex flex-col items-center text-center gap-2">
            <FlagImage code={match.homeFlag} className="w-12 h-8 shadow-md group-hover:scale-105 transition-transform duration-300" />
            <span className="font-extrabold text-xs tracking-tight leading-tight text-foreground">{match.homeTeam}</span>
          </div>

          {/* VS */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-muted/50 border border-border/30 flex items-center justify-center font-black text-xs text-muted-foreground">
              VS
            </div>
          </div>

          {/* Away */}
          <div className="flex-1 flex flex-col items-center text-center gap-2">
            <FlagImage code={match.awayFlag} className="w-12 h-8 shadow-md group-hover:scale-105 transition-transform duration-300" />
            <span className="font-extrabold text-xs tracking-tight leading-tight text-foreground">{match.awayTeam}</span>
          </div>
        </div>
      </div>

      {/* Match Info */}
      <div className="px-5 py-4 border-t border-border/30 pt-3.5 flex flex-col gap-2 bg-muted/10 mt-auto">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
          <span className="font-medium">{formatDate(match.date)}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
          <span className="font-medium">{formatBSTTime(match.time, match.city)}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
          <span className="truncate font-medium">{match.venue}, {match.city}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function SchedulePage() {
  const [activeGroup, setActiveGroup] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    let results = FIXTURES

    if (activeGroup === 'Knockout') {
      results = results.filter(f => !f.group)
    } else if (activeGroup !== 'All') {
      results = results.filter(f => f.group === activeGroup)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      results = results.filter(f =>
        f.homeTeam.toLowerCase().includes(q) ||
        f.awayTeam.toLowerCase().includes(q) ||
        f.venue.toLowerCase().includes(q) ||
        f.city.toLowerCase().includes(q)
      )
    }

    return results
  }, [activeGroup, searchQuery])

  // Group by date
  const byDate = useMemo(() => {
    const map: Record<string, MatchFixture[]> = {}
    filtered.forEach(m => {
      if (!map[m.date]) map[m.date] = []
      map[m.date].push(m)
    })
    return map
  }, [filtered])

  const sortedDates = Object.keys(byDate).sort()

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-black mb-2">
            <span className="text-emerald-400">2026</span> Match Schedule
          </h1>
          <p className="text-muted-foreground text-sm">104 matches · 16 venues · 3 host countries · BST Time</p>
        </div>

        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search team, venue, or city..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card/40 focus:bg-card/75 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10 transition-all text-sm"
          />
        </div>
      </div>

      {/* Group Filter Tabs */}
      <div 
        className="w-full overflow-x-auto mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .w-full::-webkit-scrollbar {
            display: none;
          }
        `}} />
        <div className="flex gap-2 bg-card/20 p-1.5 rounded-2xl border border-border/40 backdrop-blur-xs w-max flex-nowrap">
          {GROUPS.map(g => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              className={`px-4.5 py-2 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer shrink-0 ${
                activeGroup === g
                  ? 'bg-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/10'
                  : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              {g === 'All' || g === 'Knockout' ? g : `Group ${g}`}
            </button>
          ))}
        </div>
      </div>
      {/* Knockout Rules + Stage Legend */}
      {activeGroup === 'Knockout' && (
        <div className="mb-8 space-y-4">
          {/* Stage breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {KNOCKOUT_STAGES.map(s => (
              <div key={s.label} className="rounded-xl border border-border/50 bg-card/30 px-3 py-2 text-center">
                <div className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mb-0.5">{s.label}</div>
                <div className="text-[11px] font-bold text-foreground">{s.matches}</div>
                <div className="text-[9px] text-muted-foreground">{s.dates}</div>
              </div>
            ))}
          </div>
          {/* Rules */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 flex flex-wrap gap-x-6 gap-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 w-full mb-1">⚽ Knockout Rules</span>
            <span className="text-xs text-muted-foreground">🔁 Extra time: 2×15 min if level after 90'</span>
            <span className="text-xs text-muted-foreground">⚡ Penalty shootout if still tied after ET</span>
            <span className="text-xs text-muted-foreground">🚫 No golden goal / sudden death in ET</span>
            <span className="text-xs text-muted-foreground">🔄 6 subs allowed (5 in reg + 1 extra in ET)</span>
            <span className="text-xs text-muted-foreground">🏳️ W = Winner · L = Loser · 3rd = Best 3rd-placed team</span>
          </div>
        </div>
      )}


      <AnimatePresence mode="popLayout">
        {sortedDates.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 text-muted-foreground text-sm"
          >
            No matches found matching your filters.
          </motion.div>
        ) : (
          <div className="space-y-10">
            {sortedDates.map(date => (
              <motion.div 
                layout 
                key={date}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4.5">
                  <div className="h-[1px] flex-1 bg-border/40" />
                  <h2 className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest whitespace-nowrap px-3 py-1 bg-card/60 rounded-full border border-border/40 shadow-xs font-mono">
                    {formatDate(date)}
                  </h2>
                  <div className="h-[1px] flex-1 bg-border/40" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {byDate[date].sort((a, b) => a.time.localeCompare(b.time)).map(match => (
                    <MatchCard key={match.matchNumber} match={match} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
