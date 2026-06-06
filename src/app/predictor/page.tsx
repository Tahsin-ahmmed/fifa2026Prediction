import { PredictorClient } from './PredictorClient'
import { Group, Team } from '@/types/predictor'
import { createClient } from '@/lib/supabase/server'

async function getGroups(): Promise<Group[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const isMock = !supabaseUrl || 
                 !supabaseKey || 
                 supabaseUrl.includes('mockproject') || 
                 supabaseKey.includes('mock')

  if (isMock) {
    console.log("Using mock database data (Supabase connection bypassed)")
    return getMockGroups()
  }

  try {
    const fetchPromise = (async () => {
      const supabase = await createClient()
      const { data: groupsData, error: groupsError } = await supabase
        .from('groups')
        .select('id, name')
        .order('name')

      if (groupsError) throw groupsError

      const { data: teamsData, error: teamsError } = await supabase
        .from('teams')
        .select('id, name, code, flag_url, group_id')
        
      if (teamsError) throw teamsError

      return groupsData.map(g => ({
        id: g.id,
        name: g.name,
        teams: teamsData.filter(t => t.group_id === g.id) as Team[]
      }))
    })()

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Supabase query timed out')), 1500)
    )

    return await Promise.race([fetchPromise, timeoutPromise])
  } catch (error) {
    console.warn("Failed to fetch from Supabase, falling back to mock data.", error)
    return getMockGroups()
  }
}

function getMockGroups(): Group[] {
  const groupsData = [
    { name: 'A', teams: [{n: 'Mexico', c: 'MEX', f: '🇲🇽'}, {n: 'South Africa', c: 'RSA', f: '🇿🇦'}, {n: 'Korea Republic', c: 'KOR', f: '🇰🇷'}, {n: 'Czechia', c: 'CZE', f: '🇨🇿'}] },
    { name: 'B', teams: [{n: 'Canada', c: 'CAN', f: '🇨🇦'}, {n: 'Bosnia and Herzegovina', c: 'BIH', f: '🇧🇦'}, {n: 'Qatar', c: 'QAT', f: '🇶🇦'}, {n: 'Switzerland', c: 'SUI', f: '🇨🇭'}] },
    { name: 'C', teams: [{n: 'Brazil', c: 'BRA', f: '🇧🇷'}, {n: 'Morocco', c: 'MAR', f: '🇲🇦'}, {n: 'Haiti', c: 'HAI', f: '🇭🇹'}, {n: 'Scotland', c: 'SCO', f: '🏴󠁧󠁢󠁳󠁣󠁴󠁿'}] },
    { name: 'D', teams: [{n: 'United States', c: 'USA', f: '🇺🇸'}, {n: 'Paraguay', c: 'PAR', f: '🇵🇾'}, {n: 'Australia', c: 'AUS', f: '🇦🇺'}, {n: 'Türkiye', c: 'TUR', f: '🇹🇷'}] },
    { name: 'E', teams: [{n: 'Germany', c: 'GER', f: '🇩🇪'}, {n: 'Curaçao', c: 'CUW', f: '🇨🇼'}, {n: "Côte d'Ivoire", c: 'CIV', f: '🇨🇮'}, {n: 'Ecuador', c: 'ECU', f: '🇪🇨'}] },
    { name: 'F', teams: [{n: 'Netherlands', c: 'NED', f: '🇳🇱'}, {n: 'Japan', c: 'JPN', f: '🇯🇵'}, {n: 'Sweden', c: 'SWE', f: '🇸🇪'}, {n: 'Tunisia', c: 'TUN', f: '🇹🇳'}] },
    { name: 'G', teams: [{n: 'Belgium', c: 'BEL', f: '🇧🇪'}, {n: 'Egypt', c: 'EGY', f: '🇪🇬'}, {n: 'IR Iran', c: 'IRN', f: '🇮🇷'}, {n: 'New Zealand', c: 'NZL', f: '🇳🇿'}] },
    { name: 'H', teams: [{n: 'Spain', c: 'ESP', f: '🇪🇸'}, {n: 'Cabo Verde', c: 'CPV', f: '🇨🇻'}, {n: 'Saudi Arabia', c: 'KSA', f: '🇸🇦'}, {n: 'Uruguay', c: 'URU', f: '🇺🇾'}] },
    { name: 'I', teams: [{n: 'France', c: 'FRA', f: '🇫🇷'}, {n: 'Senegal', c: 'SEN', f: '🇸🇳'}, {n: 'Iraq', c: 'IRQ', f: '🇮🇶'}, {n: 'Norway', c: 'NOR', f: '🇳🇴'}] },
    { name: 'J', teams: [{n: 'Argentina', c: 'ARG', f: '🇦🇷'}, {n: 'Algeria', c: 'ALG', f: '🇩🇿'}, {n: 'Austria', c: 'AUT', f: '🇦🇹'}, {n: 'Jordan', c: 'JOR', f: '🇯🇴'}] },
    { name: 'K', teams: [{n: 'Portugal', c: 'POR', f: '🇵🇹'}, {n: 'DR Congo', c: 'COD', f: '🇨🇩'}, {n: 'Uzbekistan', c: 'UZB', f: '🇺🇿'}, {n: 'Colombia', c: 'COL', f: '🇨🇴'}] },
    { name: 'L', teams: [{n: 'England', c: 'ENG', f: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'}, {n: 'Croatia', c: 'CRO', f: '🇭🇷'}, {n: 'Ghana', c: 'GHA', f: '🇬🇭'}, {n: 'Panama', c: 'PAN', f: '🇵🇦'}] },
  ];

  return groupsData.map(g => ({
    id: `mock-group-${g.name}`,
    name: g.name,
    teams: g.teams.map((t, index) => ({
      id: `mock-team-${t.c}`,
      name: t.n,
      code: t.c,
      flag_url: t.f,
      group_id: `mock-group-${g.name}`
    }))
  }));
}

export default async function PredictorPage() {
  const groups = await getGroups()

  return (
    <div className="w-full">
      <PredictorClient initialGroups={groups} />
    </div>
  )
}
