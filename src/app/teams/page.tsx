'use client'

import React, { useState, useMemo } from 'react'
import { TEAMS_DATA } from '@/data/teams'
import { FlagImage } from '@/components/flag-image'
import { Search, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const CONFEDERATIONS = ['All', 'UEFA', 'CONMEBOL', 'CONCACAF', 'CAF', 'AFC', 'OFC']
const CONF_COLORS: Record<string, string> = {
  'UEFA':     'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'CONMEBOL': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'CONCACAF': 'bg-red-500/10 text-red-400 border-red-500/20',
  'CAF':      'bg-green-500/10 text-green-400 border-green-500/20',
  'AFC':      'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'OFC':      'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
}

export default function TeamsPage() {
  const [activeConf, setActiveConf] = useState('All')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'ranking' | 'name' | 'group'>('ranking')

  const filtered = useMemo(() => {
    let teams = TEAMS_DATA
    if (activeConf !== 'All') teams = teams.filter(t => t.confederation === activeConf)
    if (search.trim()) {
      const q = search.toLowerCase()
      teams = teams.filter(t => t.name.toLowerCase().includes(q) || t.code.toLowerCase().includes(q))
    }
    return [...teams].sort((a, b) => {
      if (sortBy === 'ranking') return a.ranking - b.ranking
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return a.group.localeCompare(b.group) || a.ranking - b.ranking
    })
  }, [activeConf, search, sortBy])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 120 } }
  }

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black mb-2">
          <span className="text-emerald-400">48</span> Qualified Nations
        </h1>
        <p className="text-muted-foreground text-sm">FIFA World Cup 2026 · Host Cities: Canada, Mexico & USA</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-stretch sm:items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search team..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card/40 focus:bg-card/75 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10 transition-all text-sm"
          />
        </div>

        {/* Sort Select wrapper */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as any)}
            className="appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-border bg-card/40 focus:bg-card/75 text-foreground focus:outline-none focus:border-emerald-500/50 transition-all text-sm cursor-pointer w-full sm:w-56 font-semibold"
          >
            <option value="ranking">Sort: FIFA World Ranking</option>
            <option value="name">Sort: Name A–Z</option>
            <option value="group">Sort: Group stage</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* Confederation Filter */}
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
          {CONFEDERATIONS.map(conf => (
            <button
              key={conf}
              onClick={() => setActiveConf(conf)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer shrink-0 ${
                activeConf === conf
                  ? 'bg-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/10'
                  : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              {conf}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest font-semibold">
        showing {filtered.length} nations
      </p>

      {/* Teams Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {filtered.map(team => (
          <motion.div
            key={team.code}
            variants={cardVariants}
            whileHover={{ y: -4, borderColor: "rgba(16, 185, 129, 0.25)", boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.05)" }}
            className="rounded-2xl border border-border/75 bg-card/35 backdrop-blur-md transition-all duration-300 overflow-hidden group shadow-xs cursor-default"
          >
            <div className="p-5 flex flex-col items-center text-center gap-3">
              <FlagImage code={team.code} className="w-14 h-9 shadow-md group-hover:scale-105 transition-transform duration-300" />
              <div>
                <div className="font-extrabold text-sm leading-tight text-foreground">{team.name}</div>
                <div className="text-[10px] text-muted-foreground font-mono font-bold mt-0.5">{team.code}</div>
              </div>
              <div className="flex items-center gap-2 w-full justify-center mt-1">
                <span className="px-2 py-0.5 rounded bg-muted/70 text-[10px] font-bold text-muted-foreground font-mono">
                  GRP {team.group}
                </span>
                <span className="text-xs font-extrabold text-emerald-400 font-mono">#{team.ranking}</span>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold border tracking-wider uppercase ${CONF_COLORS[team.confederation] || 'bg-muted text-muted-foreground'}`}>
                {team.confederation}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
