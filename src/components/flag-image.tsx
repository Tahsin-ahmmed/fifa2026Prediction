'use client'

import React from 'react'
import Image from 'next/image'

// Map of FIFA 3-letter codes and Unicode flag emojis to ISO 3166-1 alpha-2 codes
const FLAG_MAP: Record<string, string> = {
  // FIFA 3-letter codes
  'MEX': 'mx', 'RSA': 'za', 'KOR': 'kr', 'CZE': 'cz',
  'CAN': 'ca', 'WAL': 'gb-wls', 'QAT': 'qa', 'SUI': 'ch',
  'BRA': 'br', 'MAR': 'ma', 'HAI': 'ht', 'SCO': 'gb-sct',
  'USA': 'us', 'PAR': 'py', 'AUS': 'au', 'ROU': 'ro',
  'GER': 'de', 'CUW': 'cw', 'CIV': 'ci', 'ECU': 'ec',
  'NED': 'nl', 'JPN': 'jp', 'UKR': 'ua', 'TUN': 'tn',
  'BEL': 'be', 'EGY': 'eg', 'IRN': 'ir', 'NZL': 'nz',
  'ESP': 'es', 'CPV': 'cv', 'KSA': 'sa', 'URU': 'uy',
  'FRA': 'fr', 'SEN': 'sn', 'BOL': 'bo', 'NOR': 'no',
  'ARG': 'ar', 'ALG': 'dz', 'AUT': 'at', 'JOR': 'jo',
  'POR': 'pt', 'COD': 'cd', 'UZB': 'uz', 'COL': 'co',
  'ENG': 'gb-eng', 'CRO': 'hr', 'GHA': 'gh', 'PAN': 'pa',

  // Fallback for Unicode flag emoji characters
  '🇲🇽': 'mx', '🇿🇦': 'za', '🇰🇷': 'kr', '🇨🇿': 'cz',
  '🇨🇦': 'ca', '🏴󠁧󠁢󠁷󠁬󠁳󠁿': 'gb-wls', '🇶🇦': 'qa', '🇨🇭': 'ch',
  '🇧🇷': 'br', '🇲🇦': 'ma', '🇭🇹': 'ht', '🏴󠁧󠁢󠁳󠁣󠁴󠁿': 'gb-sct',
  '🇺🇸': 'us', '🇵🇾': 'py', '🇦🇺': 'au', '🇷🇴': 'ro',
  '🇩🇪': 'de', '🇨🇼': 'cw', '🇨🇮': 'ci', '🇪🇨': 'ec',
  '🇳🇱': 'nl', '🇯🇵': 'jp', '🇺🇦': 'ua', '🇹🇳': 'tn',
  '🇧🇪': 'be', '🇪🇬': 'eg', '🇮🇷': 'ir', '🇳🇿': 'nz',
  '🇪🇸': 'es', '🇨🇻': 'cv', '🇸🇦': 'sa', '🇺🇾': 'uy',
  '🇫🇷': 'fr', '🇸🇳': 'sn', '🇧🇴': 'bo', '🇳🇴': 'no',
  '🇦🇷': 'ar', '🇩🇿': 'dz', '🇦🇹': 'at', '🇯🇴': 'jo',
  '🇵🇹': 'pt', '🇨🇩': 'cd', '🇺🇿': 'uz', '🇨🇴': 'co',
  '🏴󠁧󠁢󠁥󠁮󠁧󠁿': 'gb-eng', '🇭🇷': 'hr', '🇬🇭': 'gh', '🇵🇦': 'pa',
}

interface FlagImageProps {
  code: string // Can be 'MEX', 'USA', '🇲🇽', etc.
  className?: string
  width?: number
  height?: number
  alt?: string
}

export function FlagImage({ code, className = '', width = 36, height = 24, alt = '' }: FlagImageProps) {
  const cleanCode = code ? code.trim() : ''
  const isoCode = FLAG_MAP[cleanCode] || FLAG_MAP[cleanCode.toUpperCase()] || 'un'

  // Using standard HTML img tag for simple, fast external flag rendering
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w80/${isoCode}.png`}
      srcSet={`https://flagcdn.com/w160/${isoCode}.png 2x`}
      crossOrigin="anonymous"
      width={width}
      height={height}
      alt={alt || `${cleanCode} flag`}
      className={`inline-block object-cover aspect-[3/2] rounded-md border border-border/60 shadow-xs select-none pointer-events-none ${className}`}
      loading="lazy"
      onError={(e) => {
        // Fallback to generic flag if load fails
        const target = e.target as HTMLImageElement
        if (target.src !== 'https://flagcdn.com/w80/un.png') {
          target.src = 'https://flagcdn.com/w80/un.png'
          target.srcset = 'https://flagcdn.com/w160/un.png 2x'
        }
      }}
    />
  )
}
