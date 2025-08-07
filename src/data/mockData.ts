import { User, Experiment, CultivationChamber, ResearchData, CommunityChallenge, TokenReward } from '../types'

export const mockUser: User = {
  id: 'user-1',
  name: 'Dr. Sarah Chen',
  email: 'sarah.chen@research.com',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
  role: 'researcher',
  level: 15,
  xp: 12450,
  mboxBalance: 1250.75,
  veMboxBalance: 450.25
}

export const mockExperiments: Experiment[] = [
  {
    id: 'exp-1',
    title: 'C. elegans Longevity Study',
    description: 'Investigating the effects of different nutrient compositions on C. elegans lifespan and healthspan markers',
    type: 'microbiome',
    status: 'active',
    createdBy: 'user-1',
    createdAt: '2025-01-15',
    progress: 68, 
    parameters: {
      temperature: 20,
      humidity: 65,
      lightIntensity: 800,
      nutrients: ['Peptone', 'Agar', 'NaCl', 'Cholesterol']
    },
    results: [
      { day: 1, survival: 100, activity: 95 },
      { day: 5, survival: 98, activity: 90 },
      { day: 10, survival: 95, activity: 85 }
    ]
  },
  {
  id: 'exp-2',
    title: 'Mycorrhizal Fungi Growth',
    description: 'Optimizing growth conditions for beneficial mycorrhizal fungi to enhance plant root systems',
    type: 'fungi',
    status: 'planning',
    createdBy: 'user-1',
    createdAt: '2025-01-20',
    progress: 15,
    parameters: {
      temperature: 25,
      humidity: 80,
      lightIntensity: 200, 
      nutrients: ['Glucose', 'Yeast Extract', 'Minerals']
    }
  },
  {
    id: 'exp-3',
    title: 'Tomato Microgreen Optimization',
    description: 'Developing optimal growing conditions for nutrient-dense tomato microgreens',
    type: 'plant',
    status: 'completed',
    createdBy: 'user-2',
    createdAt: '2025-01-01',
    progress: 100,
    parameters: {
      temperature: 22,
      humidity: 70,
      lightIntensity: 1200,
      nutrients: ['Balanced Hydroponic Solution']
    }
  }
]

export const mockChambers: CultivationChamber[] = [
  {
    id: 'chamber-1',
    name: 'BioBox Alpha',  // Minor update
    status: 'online',
    currentExperiment: 'exp-1',
    parameters: {
      temperature: {
        current: 20.2,
        target: 20.0,
        range: [18, 25]
      },
      humidity: {
        current: 64.8,
        target: 65.0,
        range: [60, 80]
      },
      light: {
        intensity: 800,
        spectrum: 'Full Spectrum LED',
        schedule: '12h on / 12h off'
      },
      nutrients: {
        ph: 6.8,
        ec: 1.2,
        schedule: ['Morning feed', 'Evening mist']
      }
  }
  },
  { 
    id: 'chamber-2',
    name: 'BioBox Beta',
    status: 'offline',
    parameters: {
      temperature: {
        current: 23.0,
        target: 23.0,
        range: [20, 28]
      },
      humidity: {
        current: 75.0,
        target: 75.0,
        range: [70, 85]
      },
      light: {
        intensity: 0,
        spectrum: 'Off',
        schedule: 'Standby'
      },
   nutrients: {
        ph: 7.0,
        ec: 0.8,
        schedule: []
      }
    }
  }
]

export const mockChallenges: CommunityChallenge[] = [
  {
    id: 'challenge-1',
    title: 'Fastest Growing Microgreen',
    description: 'Optimize growing conditions to achieve the fastest germination and growth rate for microgreens',
    type: 'cultivation',
    difficulty: 'beginner',
    reward: 500,
    participants: 1247,
    deadline: '2025-02-28',
    status: 'active'
  },
  {
    id: 'challenge-2',
    title: 'Novel Antibiotic Discovery',
    description: 'Screen soil microbiomes for potential antibiotic-producing organisms',
    type: 'research',
    difficulty: 'advanced',
    reward: 2500,
    participants: 89,
    deadline: '2025-03-15',
    status: 'active'
  },
  {
    id: 'challenge-3',
    title: 'Data Pattern Recognition',
    description: 'Analyze growth data to identify patterns that predict optimal harvest timing',
    type: 'analysis',
    difficulty: 'intermediate',
    reward: 1000,
    participants: 456,
    deadline: '2025-02-15',
    status: 'completed'
  }
]

export const mockRewards: TokenReward[] = [
  {
    id: 'reward-1',
    type: 'experiment_completion',
    amount: 250,
    timestamp: '2025-01-25T10:30:00Z',
    description: 'Completed Tomato Microgreen Optimization experiment'
  },
  {
    id: 'reward-2',
    type: 'data_contribution',
    amount: 50,
    timestamp: '2025-01-24T15:45:00Z',
    description: 'Submitted growth measurement data'
  },
  {
    id: 'reward-3',
    type: 'challenge_win',
    amount: 1000,
    timestamp: '2025-01-20T12:00:00Z',
    description: 'Won Data Pattern Recognition Challenge'
  },
  {
    id: 'reward-4',
    type: 'community_participation',
    amount: 25,
    timestamp: '2025-01-23T09:15:00Z',
    description: 'Helped community member with experiment setup'
  }
]

export const mockResearchData: ResearchData[] = [
  {
    id: 'data-1',
    experimentId: 'exp-1',
    type: 'measurement',
    timestamp: '2025-01-25T14:30:00Z',
    data: { temperature: 20.1, humidity: 64.5, ph: 6.8 },
    verified: true,
    value: 10
  },
  {
    id: 'data-2',
    experimentId: 'exp-1',
    type: 'image',
    timestamp: '2025-01-25T16:00:00Z',
    data: { url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300', description: 'C. elegans under microscope' },
    verified: true,
    value: 25
  },
  {
    id: 'data-3',
    experimentId: 'exp-2',
    type: 'observation',
    timestamp: '2025-01-24T11:20:00Z',
    data: { notes: 'Fungal spores showing increased branching pattern', growth_rate: 'moderate' },
    verified: false,
    value: 15
  }
]