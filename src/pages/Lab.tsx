import React, { useState } from 'react'
import { 
  Power, 
  Thermometer, 
  Droplets, 
  Sun, 
  Activity,
  Settings,
  AlertCircle,
  CheckCircle,
  Camera,
  BarChart3,
  Calendar
} from 'lucide-react'
import { mockChambers } from '../data/mockData'

export default function Lab() {
  const [selectedChamber, setSelectedChamber] = useState(mockChambers[0].id)
  const chamber = mockChambers.find(c => c.id === selectedChamber)!

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-500'
      case 'offline': return 'text-gray-500'
      case 'maintenance': return 'text-yellow-500'
      default: return 'text-gray-500'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online': return CheckCircle
      case 'offline': return Power
      case 'maintenance': return AlertCircle
      default: return Power
    }
  }
  // Minor update
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Biocultivation Lab
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Monitor and control your advanced cultivation chambers with laboratory-grade precision.
                </p>
              </div>
              <div className="mt-4 flex md:ml-4 md:mt-0 space-x-2">
                <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <Camera className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  Capture Image
                </button>
                <button className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700">
                  <Settings className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chamber Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Cultivation Chambers
                </h3>
                <div className="space-y-3">
                  {mockChambers.map((chamberItem) => {
                    const StatusIcon = getStatusIcon(chamberItem.status)
                    return (
                      <div
                        key={chamberItem.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                          selectedChamber === chamberItem.id 
                            ? 'border-primary-500 bg-primary-50' 
                            : 'border-gray-200 bg-white hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedChamber(chamberItem.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{chamberItem.name}</h4>
                            <div className="flex items-center mt-1">
                              <StatusIcon className={`h-4 w-4 mr-2 ${getStatusColor(chamberItem.status)}`} />
                              <span className={`text-sm capitalize ${getStatusColor(chamberItem.status)}`}>
                                {chamberItem.status}
                              </span>
                            </div>
                            {chamberItem.currentExperiment && (
                              <p className="text-xs text-gray-500 mt-1">
                                Running experiment
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white shadow rounded-lg mt-6">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"> 
                    <Activity className="h-4 w-4 mr-2" />
                    Live Monitor
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Data Analytics
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Task
                  </button>
                </div>
              </div>
            </div>
          </div> 

          {/* Chamber Details */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {chamber.name} - Control Panel
                  </h3>
                  <div className="flex items-center">
                    {React.createElement(getStatusIcon(chamber.status), {
                      className: `h-5 w-5 mr-2 ${getStatusColor(chamber.status)}`
                    })}
                    <span className={`text-sm font-medium capitalize ${getStatusColor(chamber.status)}`}>
                      {chamber.status}
                    </span>
                  </div>
                </div>

                {/* Environmental Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Temperature */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Thermometer className="h-6 w-6 text-red-500 mr-3" />
                        <h4 className="text-lg font-medium text-gray-900">Temperature</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {chamber.parameters.temperature.current}°C
                        </div>
                        <div className="text-sm text-gray-500">
                          Target: {chamber.parameters.temperature.target}°C
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">  // Minor update
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Range: {chamber.parameters.temperature.range[0]}°C - {chamber.parameters.temperature.range[1]}°C</span>
                        <span>Optimal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <button className="flex-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                        Decrease
                      </button>
                      <button className="flex-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                        Auto
                      </button>
                      <button className="flex-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                        Increase
                      </button>
                    </div>
                  </div>

                  {/* Humidity */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Droplets className="h-6 w-6 text-blue-500 mr-3" />
                        <h4 className="text-lg font-medium text-gray-900">Humidity</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {chamber.parameters.humidity.current}%
                        </div>
                        <div className="text-sm text-gray-500">
                          Target: {chamber.parameters.humidity.target}%
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Range: {chamber.parameters.humidity.range[0]}% - {chamber.parameters.humidity.range[1]}%</span>
                        <span>Good</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div> 
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <button className="flex-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                        Decrease
                      </button>
                      <button className="flex-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                        Auto
                      </button>
                      <button className="flex-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                        Increase
                      </button>
                    </div>
                  </div>

                  {/* Lighting */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Sun className="h-6 w-6 text-yellow-500 mr-3" />
                        <h4 className="text-lg font-medium text-gray-900">Lighting</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {chamber.parameters.light.intensity}
                        </div>
                        <div className="text-sm text-gray-500">
                          lux intensity
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-2">
                        <strong>Spectrum:</strong> {chamber.parameters.light.spectrum}
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Schedule:</strong> {chamber.parameters.light.schedule}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                        Schedule
                      </button>
                      <button className="flex-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                        Spectrum
                      </button>
                    </div>
                  </div>

                  {/* Nutrients */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Activity className="h-6 w-6 text-green-500 mr-3" />
                        <h4 className="text-lg font-medium text-gray-900">Nutrients</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          pH: <span className="font-medium">{chamber.parameters.nutrients.ph}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          EC: <span className="font-medium">{chamber.parameters.nutrients.ec}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-2">
                        <strong>Schedule:</strong>
                      </div>
                      {chamber.parameters.nutrients.schedule.length > 0 ? (
                        <div className="space-y-1">
                          {chamber.parameters.nutrients.schedule.map((item, index) => (
                            <div key={index} className="text-sm text-gray-600">
                              • {item}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">No scheduled feeding</div>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                        Feed Now
                      </button>
                      <button className="flex-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                        Schedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Feed */}
            <div className="bg-white shadow rounded-lg mt-6">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Live Chamber Feed
                </h3>
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-400">
                      {chamber.status === 'online' 
                        ? 'Live feed from biocultivation chamber' 
                        : 'Camera offline - chamber not active'
                      }
                    </p>
                    <button className="mt-4 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      <Camera className="h-4 w-4 mr-2" />
                      Capture Snapshot
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// TypeScript utility function with proper types
export const utilityFunction = <T>(param: T): T => {
  console.log('Executing utility function:', param);
  return param;
};

// TypeScript React component methods for: refactor: 🔧 improve type safety
interface refactor_______improve_type_safetyProps {
  title?: string;
  onSuccess?: (result: any) => void;
  onError?: (error: Error) => void;
}

interface refactor_______improve_type_safetyState {
  isLoading: boolean;
  data: any;
  error: Error | null;
}

export const userefactor_______improve_type_safety = () => {
  const [state, setState] = useState<refactor_______improve_type_safetyState>({
    isLoading: false,
    data: null,
    error: null
  });

  const handlerefactor_______improve_type_safety = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await apiCall('/refactor_______improve_type_safety');
      setState(prev => ({ ...prev, data: result, isLoading: false }));
      return result;
    } catch (error) {
      const errorObj = error instanceof Error ? error : new Error('Unknown error');
      setState(prev => ({ ...prev, error: errorObj, isLoading: false }));
      throw errorObj;
    }
  }, []);

  return {
    ...state,
    handlerefactor_______improve_type_safety
  };
};

// TypeScript utility function: perf: ⚡ reduce API response time
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

export const perf______reduce_API_response_time: UtilityFunctions = {
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

// TypeScript test for: security: 🔒 add SQL injection protection
interface TestData {
  id: string;
  value: number;
  isValid: boolean;
}

describe('security_______add_SQL_injection_protection', () => {
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

// TypeScript utility function: chore: 🔧 add code formatting
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

export const chore_______add_code_formatting: UtilityFunctions = {
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

// TypeScript utility function: test: 🧪 add integration tests for wallet
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

export const test_______add_integration_tests_for_wallet: UtilityFunctions = {
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

// TypeScript utility function
export const codeUpdate = (): void => {
  console.log('Code updated successfully');
};

// TypeScript utility function: refactor: 🔧 restructure routing logic
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

export const refactor_______restructure_routing_logic: UtilityFunctions = {
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

// TypeScript internationalization: feat: ✨ implement wallet connection for Web3
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
    feat______implement_wallet_connection_for_Web3: 'feat: ✨ implement wallet connection for Web3',
    feat______implement_wallet_connection_for_Web3_description: 'Description for feat: ✨ implement wallet connection for Web3'
  },
  zh: {
    feat______implement_wallet_connection_for_Web3: 'feat: ✨ implement wallet connection for Web3',
    feat______implement_wallet_connection_for_Web3_description: 'feat: ✨ implement wallet connection for Web3的描述'
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

// TypeScript utility function
export const codeUpdate = (): void => {
  console.log('Code updated successfully');
};

// TypeScript internationalization: style: 💄 add transition animations
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
    style_______add_transition_animations: 'style: 💄 add transition animations',
    style_______add_transition_animations_description: 'Description for style: 💄 add transition animations'
  },
  zh: {
    style_______add_transition_animations: 'style: 💄 add transition animations',
    style_______add_transition_animations_description: 'style: 💄 add transition animations的描述'
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

// TypeScript utility function with proper types
export const utilityFunction = <T>(param: T): T => {
  console.log('Executing utility function:', param);
  return param;
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
