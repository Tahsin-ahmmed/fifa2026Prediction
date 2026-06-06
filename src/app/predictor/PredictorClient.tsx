'use client'

import React, { useState, useEffect } from 'react'
import { Group } from '@/types/predictor'
import { usePredictorStore } from '@/store/predictorStore'
import { GroupStage } from './GroupStage'
import { ThirdPlaceStage } from './ThirdPlaceStage'
import { KnockoutStage } from './KnockoutStage'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft, Calendar, HelpCircle, Trophy } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { PredictionReportModal } from '@/components/PredictionReportModal'

export function PredictorClient({ initialGroups }: { initialGroups: Group[] }) {
  const [step, setStep] = useState(1)
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)
  const setAvailableGroups = usePredictorStore(state => state.setAvailableGroups)
  const selectedThirdPlaceTeams = usePredictorStore(state => state.selectedThirdPlaceTeams)
  const knockoutMatches = usePredictorStore(state => state.knockoutMatches)
  const initBracket = usePredictorStore(state => (state as any).initBracket)

  const finalMatch = knockoutMatches['104']
  const champion = finalMatch?.winner
  const runnerUp = champion
    ? (champion.id === finalMatch.home_team?.id ? finalMatch.away_team : finalMatch.home_team) || null
    : null

  const thirdPlaceMatch = knockoutMatches['103']
  const thirdPlaceWinner = thirdPlaceMatch?.winner || null

  const semiFinalists = [
    knockoutMatches['101']?.home_team || null,
    knockoutMatches['101']?.away_team || null,
    knockoutMatches['102']?.home_team || null,
    knockoutMatches['102']?.away_team || null,
  ]

  const quarterFinalists = [
    knockoutMatches['97']?.home_team || null,
    knockoutMatches['97']?.away_team || null,
    knockoutMatches['98']?.home_team || null,
    knockoutMatches['98']?.away_team || null,
    knockoutMatches['99']?.home_team || null,
    knockoutMatches['99']?.away_team || null,
    knockoutMatches['100']?.home_team || null,
    knockoutMatches['100']?.away_team || null,
  ]

  useEffect(() => {
    if (initialGroups.length > 0) {
      setAvailableGroups(initialGroups)
    }
  }, [initialGroups, setAvailableGroups])

  const canProceed = () => {
    if (step === 1) return true
    if (step === 2) return selectedThirdPlaceTeams.length === 8
    return true
  }

  const handleNext = () => {
    if (step === 2) {
      initBracket()
    }
    setStep(s => Math.min(3, s + 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const steps = [
    { num: 1, label: 'Group Stage' },
    { num: 2, label: '3rd Place Wildcards' },
    { num: 3, label: 'Knockout Bracket' }
  ]

  return (
    <div className="flex flex-col min-h-[80vh] px-2 sm:px-6">
      {/* Header / Progress Stepper */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-amber-300">
            Tournament Predictor
          </h1>
          <p className="text-sm text-muted-foreground mt-1.5">
            Follow the steps to construct your ultimate World Cup 2026 bracket.
          </p>
        </div>

        {/* Custom Stepper */}
        <div className="flex items-center gap-2 bg-card/45 backdrop-blur-xs p-1.5 rounded-2xl border border-border/80 w-fit self-start md:self-auto">
          {steps.map((s, idx) => (
            <React.Fragment key={s.num}>
              {idx > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground/40 shrink-0" />}
              <button
                onClick={() => {
                  // Only allow navigating backward or to steps that have already been validated/resolved
                  if (s.num < step || (s.num === 2 && step === 3)) {
                    setStep(s.num)
                  } else if (s.num === 3 && step === 2 && canProceed()) {
                    handleNext()
                  }
                }}
                disabled={s.num > step && !(s.num === 3 && step === 2 && canProceed())}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  step === s.num
                    ? 'bg-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/20'
                    : step > s.num
                      ? 'text-emerald-400 hover:bg-muted/40 cursor-pointer'
                      : 'text-muted-foreground/50 cursor-not-allowed'
                }`}
              >
                {s.num}. {s.label}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Content Area with animate presence */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {step === 1 && <GroupStage />}
            {step === 2 && <ThirdPlaceStage />}
            {step === 3 && <KnockoutStage />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-border/40 pt-6 pb-20">
        <Button 
          variant="outline" 
          onClick={() => { setStep(s => Math.max(1, s - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          disabled={step === 1}
          className="h-11 px-5 rounded-xl border-border hover:border-emerald-500/30 hover:bg-muted/50 cursor-pointer transition-all"
        >
          <ChevronLeft className="mr-2 h-4 w-4 stroke-[2.5]" /> Back
        </Button>
        
        {step < 3 ? (
          <Button 
            onClick={handleNext}
            className="h-11 px-8 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-emerald-950 font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            disabled={!canProceed()}
          >
            Next Step <ChevronRight className="ml-2 h-4 w-4 stroke-[2.5]" />
          </Button>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-xs text-muted-foreground bg-emerald-500/5 border border-emerald-500/20 px-4 py-2.5 rounded-xl font-medium">
              ✓ Prediction Complete!
            </div>
            {champion && (
              <Button
                onClick={() => setIsReportModalOpen(true)}
                className="h-11 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-extrabold shadow-lg shadow-amber-500/25 hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer flex items-center gap-2"
              >
                <Trophy className="h-4.5 w-4.5 fill-current" />
                Generate & Share Report
              </Button>
            )}
          </div>
        )}
      </div>

      {champion && (
        <PredictionReportModal
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
          champion={champion}
          runnerUp={runnerUp}
          thirdPlaceWinner={thirdPlaceWinner}
          knockoutMatches={knockoutMatches}
        />
      )}
    </div>
  )
}
