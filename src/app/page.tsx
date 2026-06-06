'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Trophy, ChevronRight, Users, MapPin, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

// Live Countdown Component
function KickoffCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const kickoffTime = new Date('2026-06-11T16:00:00-06:00').getTime() // Local Mexico time kickoff

    const updateTimer = () => {
      const now = new Date().getTime()
      const diff = kickoffTime - now

      if (diff <= 0) {
        setHasStarted(true)
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)
    return () => clearInterval(timer)
  }, [])

  if (hasStarted) {
    return (
      <div className="text-xl font-bold text-primary animate-pulse mt-6">
        ⚽ The Tournament is Live!
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <p className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mb-3">Kickoff Countdown</p>
      <div className="flex gap-2 sm:gap-4 justify-center">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center p-3 sm:p-4 bg-card/30 backdrop-blur-md rounded-2xl border border-border/50 w-16 sm:w-24 shadow-md hover:border-emerald-500/30 transition-colors">
            <span className="text-2xl sm:text-4xl font-black text-primary font-mono">{value}</span>
            <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-1">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  }

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative py-16 md:py-28 overflow-hidden flex flex-col items-center justify-center text-center px-4">
        {/* Abstract background glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-emerald-500/10 blur-[80px] sm:blur-[120px] rounded-full -z-10" />
        <div className="absolute top-1/2 left-1/3 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-amber-500/5 blur-[80px] sm:blur-[120px] rounded-full -z-10 animate-pulse" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
        >
          <Trophy className="h-20 w-20 text-accent mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]" />
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 leading-[0.95]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          FIFA WORLD CUP <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-primary to-amber-300">
            2026 PREDICTOR
          </span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-xl text-muted-foreground max-w-[700px] mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Build your ultimate tournament bracket. Predict group standings, choose the advancing wildcard teams, and crown the 2026 world champion.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/predictor"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 px-8 text-md font-bold rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-emerald-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
            )}
          >
            Create Your Prediction <ChevronRight className="ml-2 h-5 w-5 stroke-[2.5]" />
          </Link>
          <Link
            href="/groups"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-14 px-8 text-md font-bold rounded-2xl border-border bg-card/20 hover:bg-card/50 backdrop-blur-xs hover:border-emerald-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
            )}
          >
            Browse Groups
          </Link>
        </motion.div>

        {/* Live Kickoff Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <KickoffCountdown />
        </motion.div>
      </section>

      {/* Stats/Info Section */}
      <motion.section 
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8 md:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.25)" }}
          className="flex flex-col items-center text-center p-8 bg-card/30 backdrop-blur-md border border-border/60 rounded-3xl shadow-sm transition-all duration-300 group"
        >
          <div className="h-14 w-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-5 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
            <Users className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-black mb-2 text-foreground">48 Teams</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">The biggest World Cup ever, expanded to 48 participating nations.</p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, borderColor: "rgba(234, 179, 8, 0.25)" }}
          className="flex flex-col items-center text-center p-8 bg-card/30 backdrop-blur-md border border-border/60 rounded-3xl shadow-sm transition-all duration-300 group"
        >
          <div className="h-14 w-14 bg-amber-500/10 text-accent rounded-2xl flex items-center justify-center mb-5 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
            <MapPin className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-black mb-2 text-foreground">16 Host Cities</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">Spanning across three nations: Canada, Mexico, and the United States.</p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.25)" }}
          className="flex flex-col items-center text-center p-8 bg-card/30 backdrop-blur-md border border-border/60 rounded-3xl shadow-sm transition-all duration-300 group"
        >
          <div className="h-14 w-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-5 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
            <Calendar className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-black mb-2 text-foreground">104 Matches</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">An unprecedented number of games leading up to the grand final.</p>
        </motion.div>
      </motion.section>
    </div>
  )
}
