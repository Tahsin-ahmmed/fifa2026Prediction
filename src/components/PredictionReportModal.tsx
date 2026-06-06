'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toPng } from 'html-to-image'
import { jsPDF } from 'jspdf'
import { 
  Trophy, 
  Download, 
  Share2, 
  X, 
  FileText, 
  Sparkles,
  Link as LinkIcon,
  Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FlagImage } from '@/components/flag-image'
import { Team, Match } from '@/types/predictor'

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
)

interface PredictionReportModalProps {
  isOpen: boolean
  onClose: () => void
  champion: Team
  runnerUp: Team | null
  thirdPlaceWinner: Team | null
  knockoutMatches: Record<string, Match>
}

const CompactMatchRow = ({ match }: { match: Match }) => {
  const home = match?.home_team
  const away = match?.away_team
  const winner = match?.winner

  const isHomeWinner = winner?.id === home?.id
  const isAwayWinner = winner?.id === away?.id

  return (
    <div className="flex items-center justify-between text-[10px] bg-white/5 px-2.5 py-2 rounded-xl border border-white/5">
      {/* Home */}
      <div className={`flex items-center gap-1.5 w-[42%] ${isHomeWinner ? 'font-black text-amber-400' : 'opacity-50'}`}>
        {home ? (
          <FlagImage code={home.flag_url || home.code} className="w-5 h-3.5 shrink-0" width={20} height={14} />
        ) : (
          <div className="w-5 h-3.5 bg-white/10 rounded-xs shrink-0" />
        )}
        <span className="truncate">{home?.code || 'TBD'}</span>
      </div>

      {/* VS */}
      <span className="text-[8px] text-white/30 font-black">VS</span>

      {/* Away */}
      <div className={`flex items-center gap-1.5 justify-end w-[42%] text-right ${isAwayWinner ? 'font-black text-amber-400' : 'opacity-50'}`}>
        <span className="truncate">{away?.code || 'TBD'}</span>
        {away ? (
          <FlagImage code={away.flag_url || away.code} className="w-5 h-3.5 shrink-0" width={20} height={14} />
        ) : (
          <div className="w-5 h-3.5 bg-white/10 rounded-xs shrink-0" />
        )}
      </div>
    </div>
  )
}

export function PredictionReportModal({
  isOpen,
  onClose,
  champion,
  runnerUp,
  thirdPlaceWinner,
  knockoutMatches
}: PredictionReportModalProps) {
  const captureRef = useRef<HTMLDivElement>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [isSharing, setIsSharing] = useState(false)
  const [copied, setCopied] = useState(false)
  const [shareSupported, setShareSupported] = useState(false)

  const quarterFinalMatches = [
    knockoutMatches['97'],
    knockoutMatches['98'],
    knockoutMatches['99'],
    knockoutMatches['100'],
  ].filter(Boolean)

  const semiFinalMatches = [
    knockoutMatches['101'],
    knockoutMatches['102'],
  ].filter(Boolean)

  useEffect(() => {
    if (typeof navigator !== 'undefined' && typeof navigator.canShare === 'function') {
      setShareSupported(true)
    }
  }, [])

  const handleDownloadPng = async () => {
    if (!captureRef.current) return
    setIsExporting(true)
    try {
      // Small timeout to ensure image rendering and fonts are ready
      await new Promise((resolve) => setTimeout(resolve, 400))
      
      const dataUrl = await toPng(captureRef.current, {
        quality: 0.98,
        pixelRatio: 2, // Retain high density
        cacheBust: true,
        backgroundColor: '#07150e', // Keep deep dark green theme
      })

      const link = document.createElement('a')
      link.download = `fifa-2026-${champion.name.toLowerCase()}-prediction.png`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Failed to export PNG:', err)
    } finally {
      setIsExporting(false)
    }
  }

  const handleDownloadPdf = async () => {
    if (!captureRef.current) return
    setIsExporting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 400))
      
      const dataUrl = await toPng(captureRef.current, {
        quality: 0.95,
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: '#07150e',
      })

      // Output size: 800px width by 1200px height. Let's create an aspect-matched PDF document.
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [800, 1200]
      })

      pdf.addImage(dataUrl, 'PNG', 0, 0, 800, 1200)
      pdf.save(`fifa-2026-${champion.name.toLowerCase()}-prediction.pdf`)
    } catch (err) {
      console.error('Failed to export PDF:', err)
    } finally {
      setIsExporting(false)
    }
  }

  const handleNativeShare = async () => {
    if (!captureRef.current) return
    setIsSharing(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 400))
      
      const dataUrl = await toPng(captureRef.current, {
        quality: 0.95,
        pixelRatio: 1.5,
        cacheBust: true,
        backgroundColor: '#07150e',
      })

      const res = await fetch(dataUrl)
      const blob = await res.blob()
      const file = new File([blob], 'fifa-2026-predictions.png', { type: 'image/png' })

      if (typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'My FIFA World Cup 2026 Prediction',
          text: `I predict ${champion.name} will lift the FIFA World Cup 2026! 🏆 Predict your winner here:`,
          url: typeof window !== 'undefined' ? window.location.origin : 'https://fifapredictor2026.com'
        })
      } else {
        triggerCopyFallback()
      }
    } catch (err) {
      console.error('Failed to share natively:', err)
      triggerCopyFallback()
    } finally {
      setIsSharing(false)
    }
  }

  const triggerCopyFallback = () => {
    if (typeof window !== 'undefined') {
      const shareUrl = window.location.origin
      navigator.clipboard.writeText(`I predict ${champion.name} will win the FIFA World Cup 2026! 🏆 Draw your own bracket at: ${shareUrl}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handleInstagramShare = async () => {
    setIsSharing(true)
    try {
      // 1. Download image
      await handleDownloadPng()
      // 2. Copy share text to clipboard
      triggerCopyFallback()
      // 3. Redirect to Instagram
      if (typeof window !== 'undefined') {
        window.open('https://www.instagram.com', '_blank')
      }
    } catch (err) {
      console.error('Instagram share failed:', err)
    } finally {
      setIsSharing(false)
    }
  }

  const handleFacebookShare = async () => {
    setIsSharing(true)
    try {
      // 1. Download image
      await handleDownloadPng()
      // 2. Copy share text to clipboard
      triggerCopyFallback()
      // 3. Redirect to Facebook
      if (typeof window !== 'undefined') {
        window.open('https://www.facebook.com', '_blank')
      }
    } catch (err) {
      console.error('Facebook share failed:', err)
    } finally {
      setIsSharing(false)
    }
  }

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  // Render unique, beautiful content inside the poster
  const PosterContent = ({ isForCapture = false }: { isForCapture?: boolean }) => {
    return (
      <div 
        className={`relative flex flex-col justify-between p-8 text-white h-full ${
          isForCapture ? 'w-[800px] h-[1200px]' : 'w-full h-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, #071911 0%, #0c2b1d 40%, #17422f 75%, #342a0b 100%)',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
        }}
      >
        {/* Background Grids & Orbs */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 border-[6px] border-amber-500/20 m-4 rounded-3xl pointer-events-none" />
        <div className="absolute inset-0 border border-amber-500/40 m-6 rounded-2xl pointer-events-none" />

        {/* Decorative Football pitch marks */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[30%] border border-dashed border-white/5 rounded-full pointer-events-none" />

        {/* Header */}
        <div className="text-center mt-4 z-10 relative">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-3">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span className="text-[10px] font-black tracking-widest text-amber-300 uppercase">FIFA WORLD CUP 2026</span>
          </div>
          <h2 className="text-2xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200 uppercase">
            My Tournament predictions
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-3" />
        </div>

        {/* Section 1: Champion Box */}
        <div className={`flex flex-col items-center z-10 relative ${isForCapture ? 'my-6' : 'flex-1 justify-center'}`}>
          <div className={`relative ${isForCapture ? 'mb-4' : 'mb-6'}`}>
            {/* Pulsing glow ring */}
            <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full scale-125 animate-pulse" />
            <div className={`${isForCapture ? 'w-28 h-28' : 'w-48 h-48'} rounded-full bg-gradient-to-b from-amber-400 to-amber-600 p-1 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)]`}>
              <div className="w-full h-full bg-[#0c2b1d] rounded-full flex items-center justify-center overflow-hidden border border-amber-300/30">
                <FlagImage 
                  code={champion.flag_url || champion.code} 
                  className={`scale-110 shadow-lg rounded-sm ${isForCapture ? 'w-20 h-14' : 'w-36 h-24'}`} 
                  width={isForCapture ? 80 : 144} 
                  height={isForCapture ? 56 : 96} 
                />
              </div>
            </div>
            <div className={`absolute bg-amber-500 text-emerald-950 rounded-full border border-amber-300 shadow-md flex items-center justify-center ${isForCapture ? '-bottom-2 -right-2 p-2' : '-bottom-3 -right-3 p-3.5'}`}>
              <Trophy className={`${isForCapture ? 'h-5 w-5' : 'h-6.5 w-6.5'} fill-current`} />
            </div>
          </div>

          <span className={`font-bold text-amber-400 tracking-widest uppercase mb-1 ${isForCapture ? 'text-[11px]' : 'text-[13px]'}`}>CROWNED CHAMPION</span>
          <h1 className={`font-black uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] ${isForCapture ? 'text-3xl' : 'text-5xl'}`}>
            {champion.name}
          </h1>
        </div>

        {/* Section 2: Podium Display */}
        {isForCapture && (
          <div className="grid grid-cols-3 gap-3 my-4 items-end max-w-sm mx-auto w-full z-10 relative">
            {/* Runner Up */}
            <div className="flex flex-col items-center">
              {runnerUp ? (
                <>
                  <FlagImage code={runnerUp.flag_url || runnerUp.code} className="w-10 h-7 shadow-md mb-2" width={40} height={28} />
                  <span className="text-[10px] font-bold text-slate-200 truncate w-full text-center">{runnerUp.name}</span>
                </>
              ) : (
                <span className="text-[10px] text-slate-500 mb-2">TBD</span>
              )}
              <div className="w-full h-12 bg-gradient-to-t from-slate-500/20 to-slate-400/10 border border-slate-500/30 rounded-t-xl flex flex-col items-center justify-center mt-1">
                <span className="text-md font-extrabold text-slate-400">2nd</span>
              </div>
            </div>

            {/* Winner */}
            <div className="flex flex-col items-center">
              <FlagImage code={champion.flag_url || champion.code} className="w-12 h-8 shadow-lg mb-2 border border-amber-400" width={48} height={32} />
              <span className="text-[11px] font-extrabold text-amber-400 truncate w-full text-center">{champion.name}</span>
              <div className="w-full h-16 bg-gradient-to-t from-amber-500/20 to-amber-400/10 border border-amber-500/30 rounded-t-xl flex flex-col items-center justify-center mt-1">
                <span className="text-lg font-black text-amber-400">1st</span>
              </div>
            </div>

            {/* Third Place */}
            <div className="flex flex-col items-center">
              {thirdPlaceWinner ? (
                <>
                  <FlagImage code={thirdPlaceWinner.flag_url || thirdPlaceWinner.code} className="w-10 h-7 shadow-md mb-2" width={40} height={28} />
                  <span className="text-[10px] font-bold text-slate-200 truncate w-full text-center">{thirdPlaceWinner.name}</span>
                </>
              ) : (
                <span className="text-[10px] text-slate-500 mb-2">TBD</span>
              )}
              <div className="w-full h-10 bg-gradient-to-t from-amber-900/20 to-amber-700/10 border border-amber-800/30 rounded-t-xl flex flex-col items-center justify-center mt-1">
                <span className="text-xs font-extrabold text-amber-700">3rd</span>
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Semi-Final & Quarter-Final Matches (Captured PDF/Image Only) */}
        {isForCapture && (
          <div className="grid grid-cols-2 gap-5 my-2.5 z-10 relative">
            {/* Semi-Final matches */}
            <div className="bg-black/25 backdrop-blur-xs p-4.5 rounded-3xl border border-white/5 flex flex-col justify-between">
              <h3 className="text-[10px] font-black tracking-widest uppercase text-emerald-400 mb-3 border-b border-white/5 pb-1.5">
                Semi-Final Matches
              </h3>
              <div className="space-y-3">
                {semiFinalMatches.map((match) => (
                  <CompactMatchRow key={match.id} match={match} />
                ))}
              </div>
            </div>

            {/* Quarter-Final matches */}
            <div className="bg-black/25 backdrop-blur-xs p-4.5 rounded-3xl border border-white/5">
              <h3 className="text-[10px] font-black tracking-widest uppercase text-amber-400 mb-3 border-b border-white/5 pb-1.5">
                Quarter-Final Matches
              </h3>
              <div className="space-y-2">
                {quarterFinalMatches.map((match) => (
                  <CompactMatchRow key={match.id} match={match} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Poster Footer */}
        <div className="text-center z-10 border-t border-white/5 pt-4 pb-2 relative flex flex-col items-center justify-center">
          <p className="text-[8px] font-bold text-white/30 tracking-widest uppercase">
            Bracket created via
          </p>
          <p className="text-[10px] font-black tracking-wider text-amber-400 uppercase mt-0.5">
            FIFA 2026 tournament predictor
          </p>
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="bg-card/95 border border-border/80 rounded-3xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative z-10 backdrop-blur-sm"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-border/40 shrink-0">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-400" />
              <h3 className="font-extrabold text-md tracking-wide">Your Prediction Report</h3>
            </div>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-1 hover:bg-muted/50 rounded-xl transition-all cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-stretch justify-center">
            
            {/* Visual Poster Preview Container (Left) */}
            <div className="flex-1 max-w-[340px] flex flex-col items-center">
              <p className="text-xs text-muted-foreground font-mono font-bold uppercase tracking-wider mb-3 shrink-0">
                Visual Poster Preview
              </p>
              
              {/* Responsive container matching 1:1 aspect ratio with precise CSS scale transform */}
              <div className="w-[300px] h-[300px] sm:w-[320px] h-[320px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative shrink-0">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] origin-top-left scale-[0.375] sm:scale-[0.4] pointer-events-none select-none">
                  <PosterContent />
                </div>
              </div>
            </div>

            {/* Actions & Sharing Console (Right) */}
            <div className="flex-1 flex flex-col justify-between py-2 w-full max-w-sm">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-black tracking-tight mb-2 text-foreground">Celebrate Your Predictions!</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Download this beautiful, dynamic summary report of your FIFA 2026 predictions to share with friends on social media.
                  </p>
                </div>

                {/* Download Actions */}
                <div className="space-y-3">
                  <Button 
                    onClick={handleDownloadPng}
                    disabled={isExporting}
                    className="w-full h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-emerald-950 font-bold shadow-lg shadow-emerald-500/10 cursor-pointer flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Download className="h-4.5 w-4.5 stroke-[2.5]" />
                    {isExporting ? 'Generating Image...' : 'Download Prediction Poster (PNG)'}
                  </Button>

                  <Button 
                    onClick={handleDownloadPdf}
                    disabled={isExporting}
                    variant="outline"
                    className="w-full h-12 rounded-xl border-border bg-card/40 hover:bg-card/90 cursor-pointer flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FileText className="h-4.5 w-4.5 text-emerald-400" />
                    Download PDF Report
                  </Button>
                </div>

                <div className="h-[1px] bg-border/40 w-full" />

                {/* Social Share actions */}
                <div className="space-y-3">
                  <span className="text-xs text-muted-foreground font-semibold tracking-wider uppercase">Share Options</span>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={handleInstagramShare}
                      disabled={isSharing || isExporting}
                      className="h-11 border border-border bg-card/25 hover:bg-muted/40 transition-all rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-slate-200 cursor-pointer"
                    >
                      <InstagramIcon className="h-4.5 w-4.5 text-[#E1306C]" />
                      Share to Instagram
                    </button>
                    
                    <button 
                      onClick={handleFacebookShare}
                      disabled={isSharing || isExporting}
                      className="h-11 border border-border bg-card/25 hover:bg-muted/40 transition-all rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-slate-200 cursor-pointer"
                    >
                      <FacebookIcon className="h-4.5 w-4.5 fill-current text-[#1877F2]" />
                      Share to Facebook
                    </button>
                  </div>

                  {shareSupported ? (
                    <Button 
                      onClick={handleNativeShare}
                      disabled={isSharing}
                      variant="secondary"
                      className="w-full h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Share2 className="h-4.5 w-4.5" />
                      {isSharing ? 'Preparing...' : 'Share Directly (Mobile)'}
                    </Button>
                  ) : (
                    <Button 
                      onClick={triggerCopyFallback}
                      variant="secondary"
                      className="w-full h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4.5 w-4.5" />
                          Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <LinkIcon className="h-4.5 w-4.5" />
                          Copy Shareable Text & Link
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>

              {/* Status Note */}
              <p className="text-[10px] text-muted-foreground text-center mt-6">
                💡 PNG is optimized for social feeds. PDF is letter-scaled for high-quality printing.
              </p>
            </div>

          </div>
        </motion.div>

        {/* HIDDEN FIXED ELEMENT FOR PRECISE CANVAS CAPTURE */}
        <div className="absolute overflow-hidden pointer-events-none select-none" style={{ left: '-9999px', top: '-9999px' }}>
          <div ref={captureRef}>
            <PosterContent isForCapture={true} />
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}
