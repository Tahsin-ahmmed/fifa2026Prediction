-- Seed Data for FIFA World Cup 2026 Predictor (Actual 2026 Draw)

-- 0. Clear existing data to ensure a clean slate
TRUNCATE TABLE teams CASCADE;
TRUNCATE TABLE groups CASCADE;

-- 1. Insert Groups (12 groups: A to L)
INSERT INTO groups (id, name) VALUES
  (uuid_generate_v5(uuid_ns_url(), 'group-A'), 'A'),
  (uuid_generate_v5(uuid_ns_url(), 'group-B'), 'B'),
  (uuid_generate_v5(uuid_ns_url(), 'group-C'), 'C'),
  (uuid_generate_v5(uuid_ns_url(), 'group-D'), 'D'),
  (uuid_generate_v5(uuid_ns_url(), 'group-E'), 'E'),
  (uuid_generate_v5(uuid_ns_url(), 'group-F'), 'F'),
  (uuid_generate_v5(uuid_ns_url(), 'group-G'), 'G'),
  (uuid_generate_v5(uuid_ns_url(), 'group-H'), 'H'),
  (uuid_generate_v5(uuid_ns_url(), 'group-I'), 'I'),
  (uuid_generate_v5(uuid_ns_url(), 'group-J'), 'J'),
  (uuid_generate_v5(uuid_ns_url(), 'group-K'), 'K'),
  (uuid_generate_v5(uuid_ns_url(), 'group-L'), 'L')
ON CONFLICT (name) DO NOTHING;

-- 2. Insert Teams based on Official Draw
INSERT INTO teams (id, name, code, flag_url, group_id) VALUES
  -- Group A
  (uuid_generate_v5(uuid_ns_url(), 'team-MEX'), 'Mexico', 'MEX', '🇲🇽', uuid_generate_v5(uuid_ns_url(), 'group-A')),
  (uuid_generate_v5(uuid_ns_url(), 'team-RSA'), 'South Africa', 'RSA', '🇿🇦', uuid_generate_v5(uuid_ns_url(), 'group-A')),
  (uuid_generate_v5(uuid_ns_url(), 'team-KOR'), 'Korea Republic', 'KOR', '🇰🇷', uuid_generate_v5(uuid_ns_url(), 'group-A')),
  (uuid_generate_v5(uuid_ns_url(), 'team-CZE'), 'Czechia', 'CZE', '🇨🇿', uuid_generate_v5(uuid_ns_url(), 'group-A')),
  
  -- Group B
  (uuid_generate_v5(uuid_ns_url(), 'team-CAN'), 'Canada', 'CAN', '🇨🇦', uuid_generate_v5(uuid_ns_url(), 'group-B')),
  (uuid_generate_v5(uuid_ns_url(), 'team-WAL'), 'Wales', 'WAL', '🏴󠁧󠁢󠁷󠁬󠁳󠁿', uuid_generate_v5(uuid_ns_url(), 'group-B')),
  (uuid_generate_v5(uuid_ns_url(), 'team-QAT'), 'Qatar', 'QAT', '🇶🇦', uuid_generate_v5(uuid_ns_url(), 'group-B')),
  (uuid_generate_v5(uuid_ns_url(), 'team-SUI'), 'Switzerland', 'SUI', '🇨🇭', uuid_generate_v5(uuid_ns_url(), 'group-B')),

  -- Group C
  (uuid_generate_v5(uuid_ns_url(), 'team-BRA'), 'Brazil', 'BRA', '🇧🇷', uuid_generate_v5(uuid_ns_url(), 'group-C')),
  (uuid_generate_v5(uuid_ns_url(), 'team-MAR'), 'Morocco', 'MAR', '🇲🇦', uuid_generate_v5(uuid_ns_url(), 'group-C')),
  (uuid_generate_v5(uuid_ns_url(), 'team-HAI'), 'Haiti', 'HAI', '🇭🇹', uuid_generate_v5(uuid_ns_url(), 'group-C')),
  (uuid_generate_v5(uuid_ns_url(), 'team-SCO'), 'Scotland', 'SCO', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', uuid_generate_v5(uuid_ns_url(), 'group-C')),

  -- Group D
  (uuid_generate_v5(uuid_ns_url(), 'team-USA'), 'United States', 'USA', '🇺🇸', uuid_generate_v5(uuid_ns_url(), 'group-D')),
  (uuid_generate_v5(uuid_ns_url(), 'team-PAR'), 'Paraguay', 'PAR', '🇵🇾', uuid_generate_v5(uuid_ns_url(), 'group-D')),
  (uuid_generate_v5(uuid_ns_url(), 'team-AUS'), 'Australia', 'AUS', '🇦🇺', uuid_generate_v5(uuid_ns_url(), 'group-D')),
  (uuid_generate_v5(uuid_ns_url(), 'team-ROU'), 'Romania', 'ROU', '🇷🇴', uuid_generate_v5(uuid_ns_url(), 'group-D')),

  -- Group E
  (uuid_generate_v5(uuid_ns_url(), 'team-GER'), 'Germany', 'GER', '🇩🇪', uuid_generate_v5(uuid_ns_url(), 'group-E')),
  (uuid_generate_v5(uuid_ns_url(), 'team-CUW'), 'Curaçao', 'CUW', '🇨🇼', uuid_generate_v5(uuid_ns_url(), 'group-E')),
  (uuid_generate_v5(uuid_ns_url(), 'team-CIV'), 'Côte d''Ivoire', 'CIV', '🇨🇮', uuid_generate_v5(uuid_ns_url(), 'group-E')),
  (uuid_generate_v5(uuid_ns_url(), 'team-ECU'), 'Ecuador', 'ECU', '🇪🇨', uuid_generate_v5(uuid_ns_url(), 'group-E')),

  -- Group F
  (uuid_generate_v5(uuid_ns_url(), 'team-NED'), 'Netherlands', 'NED', '🇳🇱', uuid_generate_v5(uuid_ns_url(), 'group-F')),
  (uuid_generate_v5(uuid_ns_url(), 'team-JPN'), 'Japan', 'JPN', '🇯🇵', uuid_generate_v5(uuid_ns_url(), 'group-F')),
  (uuid_generate_v5(uuid_ns_url(), 'team-UKR'), 'Ukraine', 'UKR', '🇺🇦', uuid_generate_v5(uuid_ns_url(), 'group-F')),
  (uuid_generate_v5(uuid_ns_url(), 'team-TUN'), 'Tunisia', 'TUN', '🇹🇳', uuid_generate_v5(uuid_ns_url(), 'group-F')),

  -- Group G
  (uuid_generate_v5(uuid_ns_url(), 'team-BEL'), 'Belgium', 'BEL', '🇧🇪', uuid_generate_v5(uuid_ns_url(), 'group-G')),
  (uuid_generate_v5(uuid_ns_url(), 'team-EGY'), 'Egypt', 'EGY', '🇪🇬', uuid_generate_v5(uuid_ns_url(), 'group-G')),
  (uuid_generate_v5(uuid_ns_url(), 'team-IRN'), 'IR Iran', 'IRN', '🇮🇷', uuid_generate_v5(uuid_ns_url(), 'group-G')),
  (uuid_generate_v5(uuid_ns_url(), 'team-NZL'), 'New Zealand', 'NZL', '🇳🇿', uuid_generate_v5(uuid_ns_url(), 'group-G')),

  -- Group H
  (uuid_generate_v5(uuid_ns_url(), 'team-ESP'), 'Spain', 'ESP', '🇪🇸', uuid_generate_v5(uuid_ns_url(), 'group-H')),
  (uuid_generate_v5(uuid_ns_url(), 'team-CPV'), 'Cabo Verde', 'CPV', '🇨🇻', uuid_generate_v5(uuid_ns_url(), 'group-H')),
  (uuid_generate_v5(uuid_ns_url(), 'team-KSA'), 'Saudi Arabia', 'KSA', '🇸🇦', uuid_generate_v5(uuid_ns_url(), 'group-H')),
  (uuid_generate_v5(uuid_ns_url(), 'team-URU'), 'Uruguay', 'URU', '🇺🇾', uuid_generate_v5(uuid_ns_url(), 'group-H')),

  -- Group I
  (uuid_generate_v5(uuid_ns_url(), 'team-FRA'), 'France', 'FRA', '🇫🇷', uuid_generate_v5(uuid_ns_url(), 'group-I')),
  (uuid_generate_v5(uuid_ns_url(), 'team-SEN'), 'Senegal', 'SEN', '🇸🇳', uuid_generate_v5(uuid_ns_url(), 'group-I')),
  (uuid_generate_v5(uuid_ns_url(), 'team-BOL'), 'Bolivia', 'BOL', '🇧🇴', uuid_generate_v5(uuid_ns_url(), 'group-I')),
  (uuid_generate_v5(uuid_ns_url(), 'team-NOR'), 'Norway', 'NOR', '🇳🇴', uuid_generate_v5(uuid_ns_url(), 'group-I')),

  -- Group J
  (uuid_generate_v5(uuid_ns_url(), 'team-ARG'), 'Argentina', 'ARG', '🇦🇷', uuid_generate_v5(uuid_ns_url(), 'group-J')),
  (uuid_generate_v5(uuid_ns_url(), 'team-ALG'), 'Algeria', 'ALG', '🇩🇿', uuid_generate_v5(uuid_ns_url(), 'group-J')),
  (uuid_generate_v5(uuid_ns_url(), 'team-AUT'), 'Austria', 'AUT', '🇦🇹', uuid_generate_v5(uuid_ns_url(), 'group-J')),
  (uuid_generate_v5(uuid_ns_url(), 'team-JOR'), 'Jordan', 'JOR', '🇯🇴', uuid_generate_v5(uuid_ns_url(), 'group-J')),

  -- Group K
  (uuid_generate_v5(uuid_ns_url(), 'team-POR'), 'Portugal', 'POR', '🇵🇹', uuid_generate_v5(uuid_ns_url(), 'group-K')),
  (uuid_generate_v5(uuid_ns_url(), 'team-COD'), 'DR Congo', 'COD', '🇨🇩', uuid_generate_v5(uuid_ns_url(), 'group-K')),
  (uuid_generate_v5(uuid_ns_url(), 'team-UZB'), 'Uzbekistan', 'UZB', '🇺🇿', uuid_generate_v5(uuid_ns_url(), 'group-K')),
  (uuid_generate_v5(uuid_ns_url(), 'team-COL'), 'Colombia', 'COL', '🇨🇴', uuid_generate_v5(uuid_ns_url(), 'group-K')),

  -- Group L
  (uuid_generate_v5(uuid_ns_url(), 'team-ENG'), 'England', 'ENG', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', uuid_generate_v5(uuid_ns_url(), 'group-L')),
  (uuid_generate_v5(uuid_ns_url(), 'team-CRO'), 'Croatia', 'CRO', '🇭🇷', uuid_generate_v5(uuid_ns_url(), 'group-L')),
  (uuid_generate_v5(uuid_ns_url(), 'team-GHA'), 'Ghana', 'GHA', '🇬🇭', uuid_generate_v5(uuid_ns_url(), 'group-L')),
  (uuid_generate_v5(uuid_ns_url(), 'team-PAN'), 'Panama', 'PAN', '🇵🇦', uuid_generate_v5(uuid_ns_url(), 'group-L'))
ON CONFLICT (code) DO NOTHING;
