-- Initial Schema for FIFA World Cup 2026 Predictor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Users/Profiles Table (Syncs with auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  prediction_count INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. User Settings
CREATE TABLE user_settings (
  user_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  theme TEXT DEFAULT 'dark',
  notifications_enabled BOOLEAN DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Groups
CREATE TABLE groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(1) NOT NULL UNIQUE, -- A, B, C... L
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Teams
CREATE TABLE teams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  code VARCHAR(3) NOT NULL UNIQUE,
  flag_url TEXT,
  fifa_ranking INT,
  confederation TEXT,
  group_id UUID REFERENCES groups(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Matches (Fixtures)
CREATE TABLE matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  home_team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  away_team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  stadium TEXT,
  stage TEXT DEFAULT 'group', -- group, round_of_32, etc.
  group_id UUID REFERENCES groups(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Predictions (Main Record)
CREATE TABLE predictions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL DEFAULT 'My Prediction',
  champion_team_id UUID REFERENCES teams(id) ON DELETE SET NULL,
  runner_up_team_id UUID REFERENCES teams(id) ON DELETE SET NULL,
  third_place_team_id UUID REFERENCES teams(id) ON DELETE SET NULL,
  is_draft BOOLEAN DEFAULT true,
  share_id TEXT UNIQUE, -- For public URLs
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Prediction Groups (Group Standings Prediction)
CREATE TABLE prediction_groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  prediction_id UUID REFERENCES predictions(id) ON DELETE CASCADE,
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE,
  team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  position INT NOT NULL, -- 1, 2, 3, 4
  UNIQUE(prediction_id, group_id, team_id),
  UNIQUE(prediction_id, group_id, position)
);

-- 8. Prediction Third Place (The 8 selected 3rd place teams)
CREATE TABLE prediction_third_place (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  prediction_id UUID REFERENCES predictions(id) ON DELETE CASCADE,
  team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  UNIQUE(prediction_id, team_id)
);

-- 9. Prediction Knockout (Bracket Predictions)
CREATE TABLE prediction_knockout (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  prediction_id UUID REFERENCES predictions(id) ON DELETE CASCADE,
  stage TEXT NOT NULL, -- round_of_32, round_of_16, quarter_final, semi_final, third_place, final
  match_number INT NOT NULL, -- Logical match identifier
  home_team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  away_team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  winner_team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  UNIQUE(prediction_id, stage, match_number)
);

-- ROW LEVEL SECURITY (RLS)

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;
ALTER TABLE prediction_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE prediction_third_place ENABLE ROW LEVEL SECURITY;
ALTER TABLE prediction_knockout ENABLE ROW LEVEL SECURITY;

-- Public Read Access for static tournament data
CREATE POLICY "Public read access for groups" ON groups FOR SELECT USING (true);
CREATE POLICY "Public read access for teams" ON teams FOR SELECT USING (true);
CREATE POLICY "Public read access for matches" ON matches FOR SELECT USING (true);

-- User Profiles and Settings (Users can manage their own)
CREATE POLICY "Users view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users view own settings" ON user_settings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own settings" ON user_settings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own settings" ON user_settings FOR UPDATE USING (auth.uid() = user_id);

-- Predictions RLS (Users manage own predictions, public can read shared predictions)
CREATE POLICY "Users manage own predictions" ON predictions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Public read shared predictions" ON predictions FOR SELECT USING (share_id IS NOT NULL);

-- Cascade read access for prediction details if prediction is readable
CREATE POLICY "Manage own prediction_groups" ON prediction_groups FOR ALL USING (
  EXISTS (SELECT 1 FROM predictions p WHERE p.id = prediction_id AND p.user_id = auth.uid())
);
CREATE POLICY "Public read shared prediction_groups" ON prediction_groups FOR SELECT USING (
  EXISTS (SELECT 1 FROM predictions p WHERE p.id = prediction_id AND p.share_id IS NOT NULL)
);

CREATE POLICY "Manage own prediction_third_place" ON prediction_third_place FOR ALL USING (
  EXISTS (SELECT 1 FROM predictions p WHERE p.id = prediction_id AND p.user_id = auth.uid())
);
CREATE POLICY "Public read shared prediction_third_place" ON prediction_third_place FOR SELECT USING (
  EXISTS (SELECT 1 FROM predictions p WHERE p.id = prediction_id AND p.share_id IS NOT NULL)
);

CREATE POLICY "Manage own prediction_knockout" ON prediction_knockout FOR ALL USING (
  EXISTS (SELECT 1 FROM predictions p WHERE p.id = prediction_id AND p.user_id = auth.uid())
);
CREATE POLICY "Public read shared prediction_knockout" ON prediction_knockout FOR SELECT USING (
  EXISTS (SELECT 1 FROM predictions p WHERE p.id = prediction_id AND p.share_id IS NOT NULL)
);

-- Trigger to create profile automatically on auth.users insert
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  
  INSERT INTO public.user_settings (user_id)
  VALUES (new.id);
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
