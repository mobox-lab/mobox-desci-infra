import { useState } from 'react'
import { 
  Book, 
  Search, 
  ChevronRight,
  FileText,
  Video,
  Code,
  Beaker,
  Settings,
  Users,
  HelpCircle,
  ExternalLink
} from 'lucide-react'

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('getting-started')

  const categories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Book,
      articles: [
        { id: 'welcome', title: 'Welcome to THE BOX', type: 'guide', readTime: '5 min' },
        { id: 'setup', title: 'Setting Up Your First Experiment', type: 'guide', readTime: '15 min' },
        { id: 'chamber-basics', title: 'Understanding Biocultivation Chambers', type: 'guide', readTime: '10 min' },
        { id: 'safety', title: 'Safety Guidelines and Best Practices', type: 'guide', readTime: '12 min' }
      ]
    },
    {
      id: 'lab-operations',
      name: 'Lab Operations',
      icon: Beaker,
      articles: [
        { id: 'chamber-controls', title: 'Chamber Control Interface', type: 'tutorial', readTime: '8 min' },
        { id: 'environmental-monitoring', title: 'Environmental Monitoring and Alerts', type: 'guide', readTime: '12 min' },
        { id: 'data-collection', title: 'Automated Data Collection', type: 'tutorial', readTime: '15 min' },
        { id: 'maintenance', title: 'Regular Maintenance Procedures', type: 'guide', readTime: '20 min' }
      ]
    },
    {
      id: 'research-protocols',
      name: 'Research Protocols',
      icon: FileText,
      articles: [
        { id: 'c-elegans', title: 'C. elegans Cultivation Protocol', type: 'protocol', readTime: '25 min' },
        { id: 'microgreens', title: 'Microgreen Growing Guide', type: 'protocol', readTime: '18 min' },
        { id: 'fungi-cultivation', title: 'Mycorrhizal Fungi Cultivation', type: 'protocol', readTime: '30 min' },
        { id: 'custom-protocols', title: 'Creating Custom Research Protocols', type: 'guide', readTime: '22 min' }
      ]
    },
    {
      id: 'api-integration',
      name: 'API & Integration',
      icon: Code,
      articles: [
        { id: 'api-overview', title: 'Platform API Overview', type: 'reference', readTime: '10 min' },
        { id: 'data-export', title: 'Data Export and Integration', type: 'tutorial', readTime: '15 min' },
        { id: 'webhooks', title: 'Setting Up Webhooks', type: 'tutorial', readTime: '12 min' },
        { id: 'third-party', title: 'Third-party Tool Integration', type: 'guide', readTime: '18 min' }
      ]
    },
    {
      id: 'community',
      name: 'Community Features',
      icon: Users,
      articles: [
        { id: 'challenges', title: 'Participating in Research Challenges', type: 'guide', readTime: '8 min' },
        { id: 'collaboration', title: 'Collaborative Research Projects', type: 'guide', readTime: '15 min' },
        { id: 'data-sharing', title: 'Data Sharing and Marketplace', type: 'tutorial', readTime: '20 min' },
        { id: 'peer-review', title: 'Peer Review Process', type: 'guide', readTime: '12 min' }
      ]
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      icon: Settings,
      articles: [
        { id: 'common-issues', title: 'Common Issues and Solutions', type: 'troubleshooting', readTime: '25 min' },
        { id: 'chamber-errors', title: 'Chamber Error Codes', type: 'reference', readTime: '15 min' },
        { id: 'connectivity', title: 'Network Connectivity Issues', type: 'troubleshooting', readTime: '10 min' },
        { id: 'data-recovery', title: 'Data Recovery and Backup', type: 'guide', readTime: '18 min' }
      ]
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return Book
      case 'tutorial': return Video
      case 'protocol': return Beaker
      case 'reference': return Code
      case 'troubleshooting': return Settings
      default: return FileText
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'bg-blue-100 text-blue-800'
      case 'tutorial': return 'bg-green-100 text-green-800'
      case 'protocol': return 'bg-purple-100 text-purple-800'
      case 'reference': return 'bg-gray-100 text-gray-800'
      case 'troubleshooting': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory)
  const filteredArticles = selectedCategoryData?.articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Documentation
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Comprehensive guides, tutorials, and reference materials for THE BOX platform.
                </p>
              </div>
              <div className="mt-4 flex md:ml-4 md:mt-0">
                <button className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700">
                  <ExternalLink className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  API Docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
            <div className="flex items-center">
              <Book className="h-8 w-8 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Quick Start Guide</h3>
                <p className="text-blue-200 text-sm">Get up and running in 15 minutes</p>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md text-sm font-medium">
              Start Here
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white">
            <div className="flex items-center">
              <Video className="h-8 w-8 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Video Tutorials</h3>
                <p className="text-green-200 text-sm">Step-by-step visual guides</p>
              </div>
            </div>
            <button className="mt-4 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-md text-sm font-medium">
              Watch Now
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white">
            <div className="flex items-center">
              <HelpCircle className="h-8 w-8 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Community Support</h3>
                <p className="text-purple-200 text-sm">Get help from other researchers</p>
              </div>
            </div>
            <button className="mt-4 bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-md text-sm font-medium">
              Join Forum
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Categories
                </h3>
                <nav className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary-100 text-primary-900'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="mr-3 h-5 w-5" />
                        <span className="flex-1 text-left">{category.name}</span>
                        <span className="text-xs text-gray-500">{category.articles.length}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>

            {/* Popular Articles */}
            <div className="bg-white shadow rounded-lg mt-6">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Popular Articles
                </h3>
                <div className="space-y-3">
                  <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-sm text-gray-900">Setting Up Your First Experiment</div>
                    <div className="text-xs text-gray-500 mt-1">Most viewed this week</div>
                  </a>
                  <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-sm text-gray-900">C. elegans Protocol</div>
                    <div className="text-xs text-gray-500 mt-1">Trending in protocols</div>
                  </a>
                  <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-sm text-gray-900">Troubleshooting Common Issues</div>
                    <div className="text-xs text-gray-500 mt-1">Most helpful</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="bg-white shadow rounded-lg mb-6">
              <div className="px-4 py-4 sm:px-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Articles */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {selectedCategoryData?.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredArticles.map((article) => {
                    const TypeIcon = getTypeIcon(article.type)
                    return (
                      <div key={article.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <TypeIcon className="h-5 w-5 text-gray-400 mr-3" />
                              <h4 className="text-lg font-medium text-gray-900">{article.title}</h4>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(article.type)}`}>
                                {article.type}
                              </span>
                              <span className="text-sm text-gray-500">{article.readTime}</span>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    ) 
                  })}
                </div>

                {filteredArticles.length === 0 && (
                  <div className="text-center py-12">
                    <Search className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No articles found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Try adjusting your search terms or browse different categories.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Resources */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Video className="h-6 w-6 text-primary-600 mr-3" />
                  <h4 className="text-lg font-medium text-gray-900">Video Library</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Watch comprehensive video tutorials covering all aspects of THE BOX platform.
                </p>
                <button className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                  Browse Videos
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-primary-600 mr-3" />
                  <h4 className="text-lg font-medium text-gray-900">API Reference</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Complete API documentation for integrating with THE BOX platform.
                </p>
                <button className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                  View API Docs
                  <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}