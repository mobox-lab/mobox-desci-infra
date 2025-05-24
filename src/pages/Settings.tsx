import { useState } from 'react'
import { 
  User, 
  Bell, 
  Shield, 
  Palette,
  Globe,
  Smartphone,
  Key,
 Database,
  Mail,
  Save,
  Eye,
  EyeOff,
  Camera,
  Trash2
} from 'lucide-react'
import { mockUser } from '../data/mockData'

export default function Settings() {
  const [selectedTab, setSelectedTab] = useState('profile')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    experimentAlerts: true,
    communityUpdates: true,
    marketplaceActivity: false,
    systemMaintenance: true,
    weeklyDigest: true,
    mobileNotifications: true
  })

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'privacy', name: 'Privacy', icon: Database },
    { id: 'devices', name: 'Connected Devices', icon: Smartphone },
  ]

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h2 className="text-2xl font-bold leading-7 text-gray-900">Settings</h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage your account settings, preferences, and connected devices.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg">
              <div className="p-6">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedTab(tab.id)}
                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          selectedTab === tab.id
                            ? 'bg-primary-100 text-primary-900'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="mr-3 h-5 w-5" />
                        {tab.name}
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  {tabs.find(tab => tab.id === selectedTab)?.name}
                </h3>
              </div>

              <div className="p-6">
                {selectedTab === 'profile' && (
                  <div className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <img
                          className="h-20 w-20 rounded-full object-cover"
                          src={mockUser.avatar || 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face'}
                          alt={mockUser.name}
                        />
                        <button className="absolute bottom-0 right-0 bg-primary-600 rounded-full p-1 text-white hover:bg-primary-700">
                          <Camera className="h-4 w-4" />
                        </button>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{mockUser.name}</h4>
                        <p className="text-sm text-gray-600">Level {mockUser.level} Researcher</p>
                        <p className="text-xs text-gray-500">Member since January 2025</p>
                      </div>
                    </div>

                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
                          defaultValue={mockUser.name}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
                          defaultValue={mockUser.email}
                        />
                      </div>
                    </div>

                    {/* Research Profile */}
                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Research Profile</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Research Field
                          </label>
                          <select className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-primary-500 focus:border-primary-500">
                            <option>Microbiology</option>
                            <option>Plant Biology</option>
                            <option>Mycology</option>
                            <option>Biotechnology</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Institution
                          </label>
                          <input
                            type="text"
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your institution or affiliation"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={3}
                          className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Tell the community about your research interests and background..."
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                )}

                {selectedTab === 'notifications' && (
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600">
                      Choose what notifications you'd like to receive and how you'd like to receive them.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Email Notifications</h4>
                      
                      <div className="space-y-3">
                        {Object.entries({
                          experimentAlerts: 'Experiment status updates and alerts',
                          communityUpdates: 'Community challenges and discussions',
                          marketplaceActivity: 'Marketplace transactions and offers',
                          systemMaintenance: 'System maintenance and downtime notices',
                          weeklyDigest: 'Weekly research digest and platform updates'
                        }).map(([key, description]) => (
                          <div key={key} className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {description}
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only"
                                checked={notifications[key as keyof typeof notifications]}
                                onChange={(e) => handleNotificationChange(key, e.target.checked)}
                              />
                              <div className={`w-11 h-6 rounded-full transition-colors ${
                                notifications[key as keyof typeof notifications] ? 'bg-primary-600' : 'bg-gray-200'
                              }`}>
                                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                  notifications[key as keyof typeof notifications] ? 'translate-x-5' : 'translate-x-0.5'
                                } mt-0.5`} />
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Push Notifications</h4>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Mobile push notifications
                          </div>
                          <div className="text-sm text-gray-500">
                            Receive notifications on your mobile device
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={notifications.mobileNotifications}
                            onChange={(e) => handleNotificationChange('mobileNotifications', e.target.checked)}
                          />
                          <div className={`w-11 h-6 rounded-full transition-colors ${
                            notifications.mobileNotifications ? 'bg-primary-600' : 'bg-gray-200'
                          }`}>
                            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              notifications.mobileNotifications ? 'translate-x-5' : 'translate-x-0.5'
                            } mt-0.5`} />
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Preferences
                      </button>
                    </div>
                  </div>
                )}

                {selectedTab === 'security' && (
                  <div className="space-y-6">
                    {/* Change Password */}
                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Change Password</h4>
                      <div className="grid grid-cols-1 gap-4 max-w-md">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Password
                          </label>
                          <div className="relative">
                            <input
                              type={showCurrentPassword ? 'text' : 'password'}
                              className="block w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:ring-primary-500 focus:border-primary-500"
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            >
                              {showCurrentPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Password
                          </label>
                          <div className="relative">
                            <input
                              type={showNewPassword ? 'text' : 'password'}
                              className="block w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:ring-primary-500 focus:border-primary-500"
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                              {showNewPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                          Update Password
                        </button>
                      </div>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Two-Factor Authentication</h4>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-green-600 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-green-800">Two-factor authentication is enabled</div>
                            <div className="text-sm text-green-700">Your account is protected with 2FA</div>
                          </div>
                        </div>
                      </div>
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Manage 2FA Settings
                      </button>
                    </div>

                    {/* API Keys */}
                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">API Keys</h4>
                      <p className="text-sm text-gray-600">
                        Generate API keys to integrate with external applications and services.
                      </p>
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <Key className="mr-2 h-4 w-4" />
                        Generate API Key
                      </button>
                    </div>
                  </div>
                )}

                {selectedTab === 'appearance' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Theme</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border-2 border-primary-500 rounded-lg p-4 bg-primary-50">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium text-primary-900">Light</span>
                            <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                          </div>
                          <div className="bg-white rounded border h-20 mb-2"></div>
                          <div className="text-xs text-primary-700">Default light theme</div>
                        </div>
                        <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gray-300">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium text-gray-900">Dark</span>
                            <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                          </div>
                          <div className="bg-gray-800 rounded h-20 mb-2"></div>
                          <div className="text-xs text-gray-600">Dark theme for night work</div>
                        </div>
                        <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gray-300">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium text-gray-900">Auto</span>
                            <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                          </div>
                          <div className="bg-gradient-to-r from-white to-gray-800 rounded h-20 mb-2"></div>
                          <div className="text-xs text-gray-600">Matches system preference</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Language & Region</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Language
                          </label>
                          <select className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-primary-500 focus:border-primary-500">
                            <option>English (US)</option>
                            <option>English (UK)</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                            <option>Chinese</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Timezone
                          </label>
                          <select className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-primary-500 focus:border-primary-500">
                            <option>UTC-8 (Pacific Time)</option>
                            <option>UTC-5 (Eastern Time)</option>
                            <option>UTC+0 (GMT)</option>
                            <option>UTC+1 (CET)</option>
                            <option>UTC+8 (Asia/Shanghai)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                )}

                {selectedTab === 'privacy' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Data & Privacy</h4>
                      <p className="text-sm text-gray-600">
                        Control how your data is used and shared within THE BOX platform.
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-900">Public Research Profile</div>
                            <div className="text-sm text-gray-500">Allow others to see your research contributions</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only" defaultChecked />
                            <div className="w-11 h-6 bg-primary-600 rounded-full">
                              <div className="w-5 h-5 bg-white rounded-full translate-x-5 mt-0.5" />
                            </div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-900">Data Sharing for Research</div>
                            <div className="text-sm text-gray-500">Share anonymized data with research partners</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only" defaultChecked />
                            <div className="w-11 h-6 bg-primary-600 rounded-full">
                              <div className="w-5 h-5 bg-white rounded-full translate-x-5 mt-0.5" />
                            </div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-900">Marketing Communications</div>
                            <div className="text-sm text-gray-500">Receive updates about new features and opportunities</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full">
                              <div className="w-5 h-5 bg-white rounded-full translate-x-0.5 mt-0.5" />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Data Export & Deletion</h4>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <Database className="mr-2 h-4 w-4" />
                          Export My Data
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Request Account Deletion
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === 'devices' && (
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600">
                      Manage devices connected to your THE BOX account and biocultivation chambers.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Biocultivation Chambers</h4>
                      <div className="space-y-3">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                              <div>
                                <div className="font-medium text-gray-900">BioBox Alpha</div>
                                <div className="text-sm text-gray-500">Serial: BBOX-001-2025 • Online</div>
                              </div>
                            </div>
                            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                              Manage
                            </button>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                              <div>
                                <div className="font-medium text-gray-900">BioBox Beta</div>
                                <div className="text-sm text-gray-500">Serial: BBOX-002-2025 • Offline</div>
                              </div>
                            </div>
                            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                              Manage
                            </button>
                          </div>
            </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900">Connected Apps & Services</h4>
                      <div className="space-y-3">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Globe className="w-6 h-6 text-blue-500 mr-3" />
                              <div>
                                <div className="font-medium text-gray-900">MOBOX Platform API</div>
                                <div className="text-sm text-gray-500">Full access • Connected Jan 15, 2025</div>
                              </div>
                            </div>
                            <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                              Revoke
                            </button>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Smartphone className="w-6 h-6 text-green-500 mr-3" />
                              <div>
                                <div className="font-medium text-gray-900">THE BOX Mobile App</div>
                                <div className="text-sm text-gray-500">iOS • Last active 2 hours ago</div>
                              </div>
                            </div>
                            <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      <Smartphone className="mr-2 h-4 w-4" />
                      Add New Device
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}