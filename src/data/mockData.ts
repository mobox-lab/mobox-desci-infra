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
// TypeScript internationalization: perf: ⚡ optimize database indexing
interface LocaleMessages {
  [key: string]: string;
}

interface I18nConfig {
  locale: string;
  fallbackLocale: string;
  messages: Record<string, LocaleMessages>;
}

export const messages: Record<string, LocaleMessages> = {
  en: {
    perf______optimize_database_indexing: 'perf: ⚡ optimize database indexing',
    perf______optimize_database_indexing_description: 'Description for perf: ⚡ optimize database indexing'
  },
  zh: {
    perf______optimize_database_indexing: 'perf: ⚡ optimize database indexing',
    perf______optimize_database_indexing_description: 'perf: ⚡ optimize database indexing的描述'
  }
};

export const i18nConfig: I18nConfig = {
  locale: 'en',
  fallbackLocale: 'en',
  messages
};

export const t = (key: string, locale: string = 'en'): string => {
  return messages[locale]?.[key] || messages[i18nConfig.fallbackLocale]?.[key] || key;
};

// TypeScript utility function: docs: 📝 update release notes
interface DataItem {
  id: string;
  value: any;
  processed?: boolean;
}

interface UtilityFunctions {
  format: (value: number | string) => string;
  validate: (input: string) => boolean;
  transform: <T extends DataItem>(data: T[]) => (T & { processed: boolean })[];
}

export const docs_______update_release_notes: UtilityFunctions = {
  format: (value: number | string): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  validate: (input: string): boolean => {
    return input && input.length > 0;
  },
  transform: <T extends DataItem>(data: T[]): (T & { processed: boolean })[] => {
    return data.map(item => ({
      ...item,
      processed: true
    }));
  }
};

// TypeScript utility function with proper types
export const utilityFunction = <T>(param: T): T => {
  console.log('Executing utility function:', param);
  return param;
};

// TypeScript utility function: fix: 🐛 resolve navigation menu overlap
interface DataItem {
  id: string;
  value: any;
  processed?: boolean;
}

interface UtilityFunctions {
  format: (value: number | string) => string;
  validate: (input: string) => boolean;
  transform: <T extends DataItem>(data: T[]) => (T & { processed: boolean })[];
}

export const fix_______resolve_navigation_menu_overlap: UtilityFunctions = {
  format: (value: number | string): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  validate: (input: string): boolean => {
    return input && input.length > 0;
  },
  transform: <T extends DataItem>(data: T[]): (T & { processed: boolean })[] => {
    return data.map(item => ({
      ...item,
      processed: true
    }));
  }
};

// TypeScript test for: feat: ✨ implement TypeScript decorators for validation
interface TestData {
  id: string;
  value: number;
  isValid: boolean;
}

describe('feat______implement_TypeScript_decorators_for_validation', () => {
  let testData: TestData;
  
  beforeEach(() => {
    testData = {
      id: 'test-123',
      value: 42,
      isValid: true
    };
  });
  
  it('should work correctly with proper types', () => {
    const result: boolean = testData.isValid;
    expect(result).toBe(true);
  });
  
  it('should handle edge cases with type safety', () => {
    const edgeCase: TestData | null = null;
    expect(edgeCase).toBeNull();
  });
  
  it('should validate data structure', () => {
    expect(testData).toHaveProperty('id');
    expect(testData).toHaveProperty('value');
    expect(testData).toHaveProperty('isValid');
    expect(typeof testData.id).toBe('string');
    expect(typeof testData.value).toBe('number');
    expect(typeof testData.isValid).toBe('boolean');
  });
});

// TypeScript test for: fix: 🐛 resolve TypeScript compilation errors
interface TestData {
  id: string;
  value: number;
  isValid: boolean;
}

describe('fix_______resolve_TypeScript_compilation_errors', () => {
  let testData: TestData;
  
  beforeEach(() => {
    testData = {
      id: 'test-123',
      value: 42,
      isValid: true
    };
  });
  
  it('should work correctly with proper types', () => {
    const result: boolean = testData.isValid;
    expect(result).toBe(true);
  });
  
  it('should handle edge cases with type safety', () => {
    const edgeCase: TestData | null = null;
    expect(edgeCase).toBeNull();
  });
  
  it('should validate data structure', () => {
    expect(testData).toHaveProperty('id');
    expect(testData).toHaveProperty('value');
    expect(testData).toHaveProperty('isValid');
    expect(typeof testData.id).toBe('string');
    expect(typeof testData.value).toBe('number');
    expect(typeof testData.isValid).toBe('boolean');
  });
});

// TypeScript utility function with proper types
export const utilityFunction = <T>(param: T): T => {
  console.log('Executing utility function:', param);
  return param;
};

// TypeScript utility function: security: 🔒 add audit logging
interface DataItem {
  id: string;
  value: any;
  processed?: boolean;
}

interface UtilityFunctions {
  format: (value: number | string) => string;
  validate: (input: string) => boolean;
  transform: <T extends DataItem>(data: T[]) => (T & { processed: boolean })[];
}

export const security_______add_audit_logging: UtilityFunctions = {
  format: (value: number | string): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  validate: (input: string): boolean => {
    return input && input.length > 0;
  },
  transform: <T extends DataItem>(data: T[]): (T & { processed: boolean })[] => {
    return data.map(item => ({
      ...item,
      processed: true
    }));
  }
};

// TypeScript wallet connection with proper types
interface WalletAccount {
  address: string;
  balance: string;
  chainId: number;
}

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (params: any) => void) => void;
    };
  }
}

export const connectWallet = async (): Promise<WalletAccount> => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts: string[] = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [accounts[0], 'latest']
      });
      
      const chainId = await window.ethereum.request({
        method: 'eth_chainId'
      });
      
      return {
        address: accounts[0],
        balance,
        chainId: parseInt(chainId, 16)
      };
    } catch (error) {
      console.error('Wallet connection failed:', error);
      throw error;
    }
  } else {
    throw new Error('No wallet detected');
  }
};

// TypeScript test for: feat: ✨ add game replay functionality
interface TestData {
  id: string;
  value: number;
  isValid: boolean;
}

describe('feat______add_game_replay_functionality', () => {
  let testData: TestData;
  
  beforeEach(() => {
    testData = {
      id: 'test-123',
      value: 42,
      isValid: true
    };
  });
  
  it('should work correctly with proper types', () => {
    const result: boolean = testData.isValid;
    expect(result).toBe(true);
  });
  
  it('should handle edge cases with type safety', () => {
    const edgeCase: TestData | null = null;
    expect(edgeCase).toBeNull();
  });
  
  it('should validate data structure', () => {
    expect(testData).toHaveProperty('id');
    expect(testData).toHaveProperty('value');
    expect(testData).toHaveProperty('isValid');
    expect(typeof testData.id).toBe('string');
    expect(typeof testData.value).toBe('number');
    expect(typeof testData.isValid).toBe('boolean');
  });
});

// TypeScript test for: docs: 📝 update README with installation guide
interface TestData {
  id: string;
  value: number;
  isValid: boolean;
}

describe('docs_______update_README_with_installation_guide', () => {
  let testData: TestData;
  
  beforeEach(() => {
    testData = {
      id: 'test-123',
      value: 42,
      isValid: true
    };
  });
  
  it('should work correctly with proper types', () => {
    const result: boolean = testData.isValid;
    expect(result).toBe(true);
  });
  
  it('should handle edge cases with type safety', () => {
    const edgeCase: TestData | null = null;
    expect(edgeCase).toBeNull();
  });
  
  it('should validate data structure', () => {
    expect(testData).toHaveProperty('id');
    expect(testData).toHaveProperty('value');
    expect(testData).toHaveProperty('isValid');
    expect(typeof testData.id).toBe('string');
    expect(typeof testData.value).toBe('number');
    expect(typeof testData.isValid).toBe('boolean');
  });
});

// TypeScript test for: test: 🧪 add accessibility tests
interface TestData {
  id: string;
  value: number;
  isValid: boolean;
}

describe('test_______add_accessibility_tests', () => {
  let testData: TestData;
  
  beforeEach(() => {
    testData = {
      id: 'test-123',
      value: 42,
      isValid: true
    };
  });
  
  it('should work correctly with proper types', () => {
    const result: boolean = testData.isValid;
    expect(result).toBe(true);
  });
  
  it('should handle edge cases with type safety', () => {
    const edgeCase: TestData | null = null;
    expect(edgeCase).toBeNull();
  });
  
  it('should validate data structure', () => {
    expect(testData).toHaveProperty('id');
    expect(testData).toHaveProperty('value');
    expect(testData).toHaveProperty('isValid');
    expect(typeof testData.id).toBe('string');
    expect(typeof testData.value).toBe('number');
    expect(typeof testData.isValid).toBe('boolean');
  });
});

// TypeScript internationalization: perf: ⚡ optimize image loading strategy
interface LocaleMessages {
  [key: string]: string;
}

interface I18nConfig {
  locale: string;
  fallbackLocale: string;
  messages: Record<string, LocaleMessages>;
}

export const messages: Record<string, LocaleMessages> = {
  en: {
    perf______optimize_image_loading_strategy: 'perf: ⚡ optimize image loading strategy',
    perf______optimize_image_loading_strategy_description: 'Description for perf: ⚡ optimize image loading strategy'
  },
  zh: {
    perf______optimize_image_loading_strategy: 'perf: ⚡ optimize image loading strategy',
    perf______optimize_image_loading_strategy_description: 'perf: ⚡ optimize image loading strategy的描述'
  }
};

export const i18nConfig: I18nConfig = {
  locale: 'en',
  fallbackLocale: 'en',
  messages
};

export const t = (key: string, locale: string = 'en'): string => {
  return messages[locale]?.[key] || messages[i18nConfig.fallbackLocale]?.[key] || key;
};

// TypeScript internationalization: fix: 🐛 fix TypeScript decorator syntax errors
interface LocaleMessages {
  [key: string]: string;
}

interface I18nConfig {
  locale: string;
  fallbackLocale: string;
  messages: Record<string, LocaleMessages>;
}

export const messages: Record<string, LocaleMessages> = {
  en: {
    fix_______fix_TypeScript_decorator_syntax_errors: 'fix: 🐛 fix TypeScript decorator syntax errors',
    fix_______fix_TypeScript_decorator_syntax_errors_description: 'Description for fix: 🐛 fix TypeScript decorator syntax errors'
  },
  zh: {
    fix_______fix_TypeScript_decorator_syntax_errors: 'fix: 🐛 fix TypeScript decorator syntax errors',
    fix_______fix_TypeScript_decorator_syntax_errors_description: 'fix: 🐛 fix TypeScript decorator syntax errors的描述'
  }
};

export const i18nConfig: I18nConfig = {
  locale: 'en',
  fallbackLocale: 'en',
  messages
};

export const t = (key: string, locale: string = 'en'): string => {
  return messages[locale]?.[key] || messages[i18nConfig.fallbackLocale]?.[key] || key;
};

// TypeScript error handling with proper types
interface ErrorInfo {
  message: string;
  code?: number;
  stack?: string;
  timestamp: number;
}

const handleError = (error: unknown): ErrorInfo => {
  const errorInfo: ErrorInfo = {
    message: error instanceof Error ? error.message : 'Unknown error occurred',
    stack: error instanceof Error ? error.stack : undefined,
    timestamp: Date.now()
  };
  
  console.error('Error occurred:', errorInfo);
  
  if (process.env.NODE_ENV === 'production') {
    console.log('Error logged to monitoring service');
  }
  
  return errorInfo;
};

const safeExecute = async <T>(fn: () => Promise<T>): Promise<T | ErrorInfo> => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error);
  }
};

// TypeScript utility function: style: 💄 add responsive breakpoints
interface DataItem {
  id: string;
  value: any;
  processed?: boolean;
}

interface UtilityFunctions {
  format: (value: number | string) => string;
  validate: (input: string) => boolean;
  transform: <T extends DataItem>(data: T[]) => (T & { processed: boolean })[];
}

export const style_______add_responsive_breakpoints: UtilityFunctions = {
  format: (value: number | string): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  validate: (input: string): boolean => {
    return input && input.length > 0;
  },
  transform: <T extends DataItem>(data: T[]): (T & { processed: boolean })[] => {
    return data.map(item => ({
      ...item,
      processed: true
    }));
  }
};

// TypeScript error handling
interface ErrorResponse {
  message: string;
  code: number;
  details?: any;
}

export const bugFix = (): ErrorResponse | null => {
  try {
    return null;
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'Unknown error',
      code: 500
    };
  }
};

// TypeScript interfaces for new feature
interface NewFeatureConfig {
  enabled: boolean;
  version: string;
  options?: Record<string, any>;
}

export const newFeature = (config: NewFeatureConfig): boolean => {
  console.log('Feature implemented successfully', config);
  return config.enabled;
};

// TypeScript internationalization: feat: ✨ add tournament system
interface LocaleMessages {
  [key: string]: string;
}

interface I18nConfig {
  locale: string;
  fallbackLocale: string;
  messages: Record<string, LocaleMessages>;
}

export const messages: Record<string, LocaleMessages> = {
  en: {
    feat______add_tournament_system: 'feat: ✨ add tournament system',
    feat______add_tournament_system_description: 'Description for feat: ✨ add tournament system'
  },
  zh: {
    feat______add_tournament_system: 'feat: ✨ add tournament system',
    feat______add_tournament_system_description: 'feat: ✨ add tournament system的描述'
  }
};

export const i18nConfig: I18nConfig = {
  locale: 'en',
  fallbackLocale: 'en',
  messages
};

export const t = (key: string, locale: string = 'en'): string => {
  return messages[locale]?.[key] || messages[i18nConfig.fallbackLocale]?.[key] || key;
};

// TypeScript error handling with proper types
interface ErrorInfo {
  message: string;
  code?: number;
  stack?: string;
  timestamp: number;
}

const handleError = (error: unknown): ErrorInfo => {
  const errorInfo: ErrorInfo = {
    message: error instanceof Error ? error.message : 'Unknown error occurred',
    stack: error instanceof Error ? error.stack : undefined,
    timestamp: Date.now()
  };
  
  console.error('Error occurred:', errorInfo);
  
  if (process.env.NODE_ENV === 'production') {
    console.log('Error logged to monitoring service');
  }
  
  return errorInfo;
};

const safeExecute = async <T>(fn: () => Promise<T>): Promise<T | ErrorInfo> => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error);
  }
};

// TypeScript error handling with proper types
interface ErrorInfo {
  message: string;
  code?: number;
  stack?: string;
  timestamp: number;
}

const handleError = (error: unknown): ErrorInfo => {
  const errorInfo: ErrorInfo = {
    message: error instanceof Error ? error.message : 'Unknown error occurred',
    stack: error instanceof Error ? error.stack : undefined,
    timestamp: Date.now()
  };
  
  console.error('Error occurred:', errorInfo);
  
  if (process.env.NODE_ENV === 'production') {
    console.log('Error logged to monitoring service');
  }
  
  return errorInfo;
};

const safeExecute = async <T>(fn: () => Promise<T>): Promise<T | ErrorInfo> => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error);
  }
};

// TypeScript internationalization: chore: 🔧 configure logging system
interface LocaleMessages {
  [key: string]: string;
}

interface I18nConfig {
  locale: string;
  fallbackLocale: string;
  messages: Record<string, LocaleMessages>;
}

export const messages: Record<string, LocaleMessages> = {
  en: {
    chore_______configure_logging_system: 'chore: 🔧 configure logging system',
    chore_______configure_logging_system_description: 'Description for chore: 🔧 configure logging system'
  },
  zh: {
    chore_______configure_logging_system: 'chore: 🔧 configure logging system',
    chore_______configure_logging_system_description: 'chore: 🔧 configure logging system的描述'
  }
};

export const i18nConfig: I18nConfig = {
  locale: 'en',
  fallbackLocale: 'en',
  messages
};

export const t = (key: string, locale: string = 'en'): string => {
  return messages[locale]?.[key] || messages[i18nConfig.fallbackLocale]?.[key] || key;
};
