import { useState } from 'react'
import { 
  Plus, 
  Play, 
  Pause, 
  BarChart3, 
  Calendar, 
  Users,
  Flask,
  TrendingUp,
  Eye,
  Settings
} from 'lucide-react'
import { mockExperiments, mockUser } from '../data/mockData'

export default function Research() {
  const [selectedTab, setSelectedTab] = useState('active')
  
  const tabs = [
    { id: 'active', name: 'Active Experiments', icon: Play },
    { id: 'completed', name: 'Completed', icon: BarChart3 },
    { id: 'planning', name: 'Planning', icon: Calendar },
  ]

  const filteredExperiments = mockExperiments.filter(exp => {
    if (selectedTab === 'active') return exp.status === 'active'
    if (selectedTab === 'completed') return exp.status === 'completed'
    if (selectedTab === 'planning') return exp.status === 'planning'
    return false
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      case 'planning': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'plant': return '🌱'
      case 'fungi': return '🍄'
      case 'microbiome': return '🦠'
      default: return '⚗️'
    }
  } 

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Research Dashboard
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Welcome back, {mockUser.name}! Manage your experiments and track your research progress.
                </p>
              </div>
              <div className="mt-4 flex md:ml-4 md:mt-0">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  New Experiment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Flask className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Experiments</dt>
                    <dd className="text-lg font-medium text-gray-900">{mockExperiments.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Play className="h-6 w-6 text-green-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {mockExperiments.filter(e => e.status === 'active').length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Avg Progress</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {Math.round(mockExperiments.reduce((acc, exp) => acc + exp.progress, 0) / mockExperiments.length)}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-purple-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Researcher Level</dt>
                    <dd className="text-lg font-medium text-gray-900">{mockUser.level}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experiments */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Your Experiments</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Track and manage all your research experiments in one place.
              </p>
            </div>
            <div className="px-4 sm:px-6">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isSelected = selectedTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`${
                        isSelected
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      } whitespace-nowrap flex items-center py-4 px-1 border-b-2 font-medium text-sm`}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {tab.name}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <div className="grid gap-6">
              {filteredExperiments.map((experiment) => (
                <div key={experiment.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{getTypeIcon(experiment.type)}</span>  // Minor update
                        <h4 className="text-lg font-semibold text-gray-900">{experiment.title}</h4>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(experiment.status)}`}>
                          {experiment.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{experiment.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="bg-white p-3 rounded">
                          <div className="text-xs text-gray-500">Temperature</div>
                          <div className="font-medium">{experiment.parameters.temperature}°C</div>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <div className="text-xs text-gray-500">Humidity</div>
             <div className="font-medium">{experiment.parameters.humidity}%</div>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <div className="text-xs text-gray-500">Light</div>
                          <div className="font-medium">{experiment.parameters.lightIntensity} lux</div>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <div className="text-xs text-gray-500">Progress</div>
                          <div className="font-medium">{experiment.progress}%</div>
                        </div>
                      </div>

                      {experiment.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{experiment.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full" 
                              style={{ width: `${experiment.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 ml-4">
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </button>
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                        <Settings className="h-4 w-4 mr-2" />
                        Configure
                      </button>
                      {experiment.status === 'active' && (
                        <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                          <Pause className="h-4 w-4 mr-2" />
                          Pause
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {filteredExperiments.length === 0 && (
                <div className="text-center py-12">
                  <Flask className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No experiments</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Get started by creating your first experiment.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                    >
                      <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                      New Experiment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}