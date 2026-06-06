'use client'

import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [showIOSModal, setShowIOSModal] = useState(false)

  useEffect(() => {
    // Already installed as PWA (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Detect iOS Safari
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(isIOSDevice)

    if (isIOSDevice) {
      // iOS doesn't fire beforeinstallprompt — show manual instructions
      setIsInstallable(true)
      return
    }

    // Android / Chrome — wait for beforeinstallprompt
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setIsInstallable(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true)
      setIsInstallable(false)
      setDeferredPrompt(null)
    })

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {})
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (isIOS) {
      setShowIOSModal(true)
      return
    }
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setIsInstallable(false)
      setDeferredPrompt(null)
    }
  }

  // Don't render on desktop or if already installed
  if (isInstalled || !isInstallable) return null

  return (
    <>
      {/* Install button — mobile header only */}
      <button
        id="pwa-install-btn"
        onClick={handleInstall}
        aria-label="Install app"
        className="md:hidden flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 active:scale-95 transition-all"
      >
        <Download className="h-3.5 w-3.5" />
        <span>Install</span>
      </button>

      {/* iOS "Add to Home Screen" instructions modal */}
      {showIOSModal && (
        <div
          className="fixed inset-0 z-[200] flex items-end justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowIOSModal(false)}
        >
          <div
            className="w-full max-w-sm bg-card border border-border/60 rounded-2xl p-6 shadow-2xl mb-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Trophy icon */}
            <div className="flex justify-center mb-4">
              <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                🏆
              </div>
            </div>
            <h3 className="font-black text-lg text-center mb-1">Add to Home Screen</h3>
            <p className="text-muted-foreground text-sm text-center mb-5">
              Install FIFA 2026 Predictor as an app on your phone
            </p>

            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl border border-border/40">
                <span className="text-xl shrink-0">1️⃣</span>
                <p className="text-sm">
                  Tap the <strong className="text-foreground">Share</strong> button{' '}
                  <span className="text-base">⬆️</span> at the bottom of Safari
                </p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl border border-border/40">
                <span className="text-xl shrink-0">2️⃣</span>
                <p className="text-sm">
                  Scroll and tap{' '}
                  <strong className="text-foreground">"Add to Home Screen"</strong>
                </p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl border border-border/40">
                <span className="text-xl shrink-0">3️⃣</span>
                <p className="text-sm">
                  Tap <strong className="text-foreground">"Add"</strong> to confirm
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-emerald-950 font-black rounded-xl transition-colors active:scale-95"
            >
              Got it! ✓
            </button>
          </div>
        </div>
      )}
    </>
  )
}
