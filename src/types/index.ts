export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'researcher' | 'contributor' | 'admin'
  level: number
  xp: number
  mboxBalance: number
  veMboxBalance: number
}

export interface Experiment {
  id: string
  title: string
  description: string
  type: 'plant' | 'fungi' | 'microbiome'  // Minor update
  status: 'planning' | 'active' | 'completed' | 'paused'
  createdBy: string
  createdAt: string
  progress: number
  parameters: {
    temperature: number
    humidity: number
    lightIntensity: number
    nutrients: string[]
  }
  results?: any[]
}

export interface CultivationChamber {
  id: string
  name: string
  status: 'online' | 'offline' | 'maintenance'
  currentExperiment?: string
  parameters: {
    temperature: {
      current: number
      target: number
      range: [number, number]
    }
    humidity: {
      current: number
      target: number
      range: [number, number]
    }
    light: {
      intensity: number
      spectrum: string
      schedule: string
    }
    nutrients: {
      ph: number
      ec: number
   schedule: string[]
    }
  }
}

export interface ResearchData {
  id: string
  experimentId: string
  type: 'image' | 'measurement' | 'observation'
  timestamp: string
  data: any
  verified: boolean
  value?: number
}

export interface CommunityChallenge {
  id: string
  title: string
  description: string
  type: 'research' | 'cultivation' | 'analysis'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  reward: number
  participants: number
  deadline: string
  status: 'active' | 'completed'
}

export interface TokenReward {
  id: string
  type: 'experiment_completion' | 'data_contribution' | 'challenge_win' | 'community_participation'
  amount: number
  timestamp: string
  description: string
}

export interface Navigation {
  name: string
  href: string
  icon?: React.ComponentType<any>
  current?: boolean
}