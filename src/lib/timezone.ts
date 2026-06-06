// Utility for converting match times to Bangladesh Standard Time (BST = UTC+6)

// Venue timezone UTC offsets during summer (June-July 2026, all on DST):
// Eastern (EDT UTC-4): New York/NJ, Boston, Philadelphia, Miami, Orlando, Atlanta, Toronto
// Central (CDT UTC-5): Dallas, Houston, Kansas City, Mexico City, Guadalajara, Monterrey
// Mountain (MDT UTC-6): Denver, Las Vegas
// Pacific (PDT UTC-7): Los Angeles, San Francisco, San Diego, Vancouver

export const CITY_UTC_OFFSET: Record<string, number> = {
  'New York/NJ':  -4,  // EDT
  'Boston':       -4,  // EDT
  'Philadelphia': -4,  // EDT
  'Miami':        -4,  // EDT
  'Orlando':      -4,  // EDT
  'Atlanta':      -4,  // EDT
  'Toronto':      -4,  // EDT
  'Dallas':       -5,  // CDT
  'Houston':      -5,  // CDT
  'Kansas City':  -5,  // CDT
  'Mexico City':  -5,  // CDT
  'Guadalajara':  -5,  // CDT
  'Monterrey':    -5,  // CDT
  'Denver':       -6,  // MDT
  'Las Vegas':    -6,  // MDT
  'Los Angeles':  -7,  // PDT
  'San Francisco':-7,  // PDT
  'San Diego':    -7,  // PDT
  'Vancouver':    -7,  // PDT
  'Seattle':      -7,  // PDT
}

const BST_OFFSET = 6; // UTC+6

/**
 * Convert a local match time to Bangladesh Standard Time (BST = UTC+6).
 * Returns an object with the BST time string and whether it crosses midnight.
 */
export function toBST(localTime: string, city: string): { time: string; nextDay: boolean } {
  const cityOffset = CITY_UTC_OFFSET[city] ?? -5; // default CDT if unknown
  const [hours, minutes] = localTime.split(':').map(Number);

  // Convert local → UTC → BST
  const utcHours = hours - cityOffset;       // local → UTC
  const bstHours = utcHours + BST_OFFSET;   // UTC → BST

  // Handle day overflow
  const totalMinutes = bstHours * 60 + minutes;
  const normalizedMinutes = ((totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60);
  const h = Math.floor(normalizedMinutes / 60);
  const m = normalizedMinutes % 60;
  const nextDay = totalMinutes >= 24 * 60;

  const timeStr = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  return { time: timeStr, nextDay };
}

/**
 * Format a BST time for display, optionally showing (+1) if it crosses midnight.
 */
export function formatBSTTime(localTime: string, city: string): string {
  const { time, nextDay } = toBST(localTime, city);
  return nextDay ? `${time} BST (+1)` : `${time} BST`;
}
