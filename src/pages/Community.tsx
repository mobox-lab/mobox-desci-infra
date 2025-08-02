import { useState } from 'react'
import { 
  Users, 
  Trophy, 
  Calendar, 
  Star,
  MessageCircle,
  ThumbsUp,
  Share2,
  Plus,
  Filter,
  Search
} from 'lucide-react'
import { mockChallenges, mockUser } from '../data/mockData'

export default function Community() {
  const [selectedTab, setSelectedTab] = useState('challenges')
  const [searchTerm, setSearchTerm] = useState('')

  const tabs = [
    { id: 'challenges', name: 'Challenges', icon: Trophy },
    { id: 'researchers', name: 'Researchers', icon: Users },
    { id: 'discussions', name: 'Discussions', icon: MessageCircle },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const mockResearchers = [
    {
      id: 'researcher-1',
      name: 'Dr. Elena Vasquez',
      title: 'Microbiologist',
      level: 28,  // Minor update
      experiments: 47,
      contributions: 156,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      specialties: ['Microbiome', 'Fermentation']
    },
    {
      id: 'researcher-2', 
      name: 'Prof. David Kim',
      title: 'Plant Physiologist',
      level: 34,
      experiments: 62,
      contributions: 289,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      specialties: ['Plant Biology', 'Hydroponics']
    },
    {
      id: 'researcher-3',
      name: 'Dr. Maria Santos',
      title: 'Mycologist',
      level: 19,
      experiments: 31,
      contributions: 98,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      specialties: ['Fungi', 'Bioremediation']
    }
  ]

  const mockDiscussions = [
    {
      id: 'discussion-1',
      title: 'Best practices for C. elegans cultivation temperature control',
      author: 'Dr. Sarah Chen',
      replies: 23,
      likes: 45,
      timestamp: '2 hours ago',
      tags: ['C. elegans', 'Temperature', 'Best Practices']
    },
    {
      id: 'discussion-2',
      title: 'Anyone tried automated feeding systems for microgreens?',
      author: 'Prof. David Kim',
      replies: 18,
      likes: 32,
      timestamp: '5 hours ago',
      tags: ['Automation', 'Microgreens', 'Hardware']
    },
    {
      id: 'discussion-3',
      title: 'Sharing my mycorrhizal fungi growth protocol - 95% success rate!',
      author: 'Dr. Maria Santos',
      replies: 67,
      likes: 128,
      timestamp: '1 day ago',
      tags: ['Fungi', 'Protocol', 'Success']
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Research Community
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Connect with fellow researchers, take on challenges, and share knowledge with the global scientific community.
                </p>
              </div>
              <div className="mt-4 flex md:ml-4 md:mt-0">
                <button className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700">
                  <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  Create Challenge
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
                  <Users className="h-6 w-6 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Researchers</dt>
                    <dd className="text-lg font-medium text-gray-900">12,450</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Trophy className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Challenges</dt>
                    <dd className="text-lg font-medium text-gray-900">47</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-green-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Discussions</dt>
                    <dd className="text-lg font-medium text-gray-900">2,347</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Star className="h-6 w-6 text-purple-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Your Level</dt>
                    <dd className="text-lg font-medium text-gray-900">{mockUser.level}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white shadow rounded-lg">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="px-4 sm:px-6">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isSelected = selectedTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`${  // Minor update
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

          {/* Search and Filters */}
          <div className="px-4 py-4 sm:px-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 py-5 sm:p-6">
            {selectedTab === 'challenges' && (
              <div className="space-y-6">
                {mockChallenges.map((challenge) => (
                  <div key={challenge.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Trophy className="h-6 w-6 text-yellow-500" />
                          <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                            {challenge.difficulty}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{challenge.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="bg-white p-3 rounded">
                            <div className="text-xs text-gray-500">Type</div>
                            <div className="font-medium capitalize">{challenge.type}</div>
                          </div>
                          <div className="bg-white p-3 rounded">
                            <div className="text-xs text-gray-500">Participants</div>
                            <div className="font-medium">{challenge.participants.toLocaleString()}</div>
                          </div>
                          <div className="bg-white p-3 rounded">
                            <div className="text-xs text-gray-500">Deadline</div>
                            <div className="font-medium">{challenge.deadline}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                            {challenge.reward} MBOX
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="h-4 w-4 mr-1" />
                            {challenge.participants} participants
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            {challenge.deadline}
                          </div>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                          Join Challenge
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'researchers' && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockResearchers.map((researcher) => (
                  <div key={researcher.id} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={researcher.avatar}
                        alt={researcher.name}
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{researcher.name}</h3>
                        <p className="text-sm text-gray-500">{researcher.title}</p>
                      </div>
                    </div>
                      // Minor update
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <div className="text-lg font-semibold text-gray-900">Lv.{researcher.level}</div>
                        <div className="text-xs text-gray-500">Level</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{researcher.experiments}</div>
                        <div className="text-xs text-gray-500">Experiments</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{researcher.contributions}</div>
                        <div className="text-xs text-gray-500">Contributions</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Specialties:</div>
                      <div className="flex flex-wrap gap-1">
                        {researcher.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 inline-flex justify-center items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </button>
                      <button className="flex-1 inline-flex justify-center items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <Users className="h-4 w-4 mr-2" />
                        Follow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'discussions' && (
              <div className="space-y-6">
                {mockDiscussions.map((discussion) => (
                  <div key={discussion.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{discussion.title}</h3>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <span>by {discussion.author}</span>
                      <span className="mx-2">•</span>
                      <span>{discussion.timestamp}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {discussion.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {discussion.likes}
                        </button>
                        <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {discussion.replies} replies
                        </button>
                      </div>
                      
                      <button className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                        Join Discussion
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}