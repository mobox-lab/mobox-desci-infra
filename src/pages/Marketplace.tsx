import { useState } from 'react'
import { 
  Store, 
  TrendingUp, 
  Search, 
  Filter,
  Eye,
  ShoppingCart,
  Star,
  Verified,
  Database,
  Image,
  FileText,
  Activity
} from 'lucide-react'
import { mockResearchData } from '../data/mockData'

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Data', icon: Database },
    { id: 'images', name: 'Images', icon: Image },
    { id: 'measurements', name: 'Measurements', icon: Activity },
    { id: 'protocols', name: 'Protocols', icon: FileText },
  ]  // Minor update

  const mockDataAssets = [
    {
      id: 'asset-1',
      title: 'C. elegans Longevity Dataset - 30 Day Study',
      description: 'Comprehensive dataset tracking C. elegans lifespan and activity patterns under controlled conditions with novel nutrient compositions.',
      type: 'measurements',
      price: 150,
      dataPoints: 2450,
      verified: true,
      rating: 4.9,
      reviews: 23,
      seller: 'Dr. Sarah Chen',
      tags: ['C. elegans', 'Longevity', 'Nutrition'],
      preview: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=200&fit=crop'
    },
    {
      id: 'asset-2', 
      title: 'Mycorrhizal Fungi Growth Time-lapse Collection',
      description: 'High-resolution time-lapse imagery showing mycorrhizal fungi development over 14 days with detailed growth pattern analysis.',
      type: 'images',
      price: 200,
      dataPoints: 336,
      verified: true,
      rating: 4.8,
      reviews: 18,
      seller: 'Dr. Maria Santos',
      tags: ['Fungi', 'Time-lapse', 'Growth'],
      preview: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop'
    },
    {
      id: 'asset-3',
      title: 'Optimized Microgreen Protocol - 95% Success Rate',
      description: 'Detailed cultivation protocol for microgreens with environmental controls, achieving 95% germination success rate across 12 varieties.',
      type: 'protocols',
      price: 75,
      dataPoints: 144,
      verified: true,
      rating: 4.7,
      reviews: 45,
      seller: 'Prof. David Kim',
      tags: ['Microgreens', 'Protocol', 'Hydroponics'],
      preview: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop'
    },
    {
      id: 'asset-4',
      title: 'Bacterial Growth Under LED Spectrum Analysis',
      description: 'Quantitative analysis of bacterial growth rates under different LED light spectrums with detailed metabolic measurements.',
      type: 'measurements',
      price: 125,
      dataPoints: 1860,
      verified: false,
      rating: 4.5,
      reviews: 12,
      seller: 'Lab Research Team',  // Minor update
      tags: ['Bacteria', 'LED', 'Spectrum'],
      preview: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop'
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'images': return Image
      case 'measurements': return Activity
      case 'protocols': return FileText
      default: return Database
    }
  }

  const filteredAssets = mockDataAssets.filter(asset => {
    const matchesCategory = selectedCategory === 'all' || asset.type === selectedCategory
    const matchesSearch = asset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Data Marketplace
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Trade verified research data and protocols. Transform your scientific contributions into valuable digital assets.
                </p>
              </div>
              <div className="mt-4 flex space-x-3 md:ml-4 md:mt-0">
                <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <Store className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  Sell Data
                </button>
                <button className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700">
                  <TrendingUp className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  Analytics
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
                  <Database className="h-6 w-6 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Available Datasets</dt>
                    <dd className="text-lg font-medium text-gray-900">1,247</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-green-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
          <dt className="text-sm font-medium text-gray-500 truncate">Total Volume</dt>
                    <dd className="text-lg font-medium text-gray-900">$2.4M</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Verified className="h-6 w-6 text-purple-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Verified Assets</dt>
                    <dd className="text-lg font-medium text-gray-900">892</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Star className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Avg Rating</dt>
                    <dd className="text-lg font-medium text-gray-900">4.7</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                          selectedCategory === category.id
                            ? 'bg-primary-100 text-primary-900'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="mr-3 h-5 w-5" />
                        {category.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="bg-white shadow rounded-lg mt-6">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Price Range (MBOX)
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Min Price</label>
                    <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Max Price</label>
                    <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" placeholder="1000" />
                  </div>
                  <button className="w-full bg-primary-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700">
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white shadow rounded-lg mb-6">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex-1 max-w-lg">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="Search datasets, protocols, images..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                      <option>Sort by Newest</option>
                      <option>Sort by Price: Low to High</option>
                      <option>Sort by Price: High to Low</option>
                      <option>Sort by Rating</option>
                      <option>Sort by Downloads</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Assets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAssets.map((asset) => {
                const TypeIcon = getTypeIcon(asset.type)
                return (
                  <div key={asset.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={asset.preview}
                        alt={asset.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <TypeIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-500 capitalize">{asset.type}</span>
                        </div>
                        {asset.verified && (
                          <div className="flex items-center">
                            <Verified className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">Verified</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{asset.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{asset.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-gray-500">
                          by {asset.seller}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-900">{asset.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({asset.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {asset.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div> 
                          <div className="text-2xl font-bold text-gray-900">{asset.price} MBOX</div>
                          <div className="text-sm text-gray-500">{asset.dataPoints} data points</div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </button>
                          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {filteredAssets.length === 0 && (
              <div className="text-center py-12">
                <Database className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No data assets found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search criteria or browse different categories.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}