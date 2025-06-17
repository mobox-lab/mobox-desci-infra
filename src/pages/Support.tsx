import { useState } from 'react'
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone,
  Search,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Clock,
  CheckCircle,
  Users
} from 'lucide-react'

export default function Support() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const supportChannels = [
    {
      id: 'community',
      name: 'Community Forum',
      icon: Users,
      description: 'Get help from the research community',
      response: 'Usually within 2 hours',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'chat',
      name: 'Live Chat',
      icon: MessageCircle,
      description: '24/7 instant support for urgent issues',
      response: 'Response in minutes',
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      id: 'email',
      name: 'Email Support',
      icon: Mail,
      description: 'Detailed assistance for complex issues',
      response: 'Within 24 hours',
      color: 'bg-yellow-50 text-yellow-700 border-yellow-200'
    },
    {
      id: 'priority',
      name: 'Priority Support',
      icon: Phone,
      description: 'Direct phone support for premium users',
      response: 'Same day response',
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ]

  const faqData = [
    {
      id: 'getting-started',
      category: 'Getting Started',
      questions: [
        {
          id: 'what-is-thebox',
          question: 'What is THE BOX and how does it work?',
          answer: 'THE BOX is a revolutionary gamified decentralized science platform that transforms scientific research into interactive experiences. It combines biocultivation hardware with gamification mechanics to make research accessible to everyone. Users can conduct experiments, share data, and earn rewards through our blockchain-verified ecosystem.'
        },
        {
          id: 'first-experiment',
          question: 'How do I set up my first experiment?',
          answer: 'Setting up your first experiment is easy! Navigate to the Research Dashboard, click "New Experiment", choose your organism type (plants, fungi, or microbiomes), configure environmental parameters, and start your cultivation. Our step-by-step wizard guides you through the entire process.'
        },
        {
          id: 'hardware-requirements',
          question: 'What hardware do I need to get started?',
          answer: 'You need a MOBOX Biocultivation Chamber, which includes precision controls for temperature, humidity, lighting, and nutrients. The chamber comes with food-grade materials, integrated monitoring systems, and connects to the platform via WiFi. Additional accessories like specialized growing substrates are available in our marketplace.'
        }
      ]
    },
    {
      id: 'technical',
      category: 'Technical Issues',
      questions: [
        {
          id: 'connectivity-issues',
          question: 'My chamber won\'t connect to WiFi. What should I do?',
          answer: 'First, ensure your WiFi network is 2.4GHz (5GHz not supported). Check that your chamber is within range of your router. Try resetting the chamber by holding the WiFi button for 10 seconds. If issues persist, check your firewall settings and ensure ports 8080 and 443 are open.'
        },
        {
          id: 'data-not-syncing',
          question: 'My experiment data isn\'t syncing to the cloud. How can I fix this?',
          answer: 'Data sync issues are usually network-related. Check your internet connection and ensure the chamber shows "Online" status. You can manually sync data by going to Lab > Data Management > Force Sync. If data is still missing, our support team can help recover it from local chamber storage.'
        },
        {
          id: 'calibration-errors',
          question: 'I\'m getting calibration errors on my sensors. What does this mean?',
          answer: 'Calibration errors indicate sensors need recalibration or cleaning. For pH sensors, clean with distilled water and recalibrate using standard pH solutions. Temperature and humidity sensors should be cleaned with a soft, dry cloth. Access calibration mode through Lab > Settings > Sensor Calibration.'
        }
      ]
    },
    {
      id: 'platform',
      category: 'Platform Features',
      questions: [
        {
          id: 'earning-rewards',
          question: 'How do I earn MBOX tokens through research?',
          answer: 'You can earn MBOX tokens by completing experiments, contributing high-quality data, participating in community challenges, helping other researchers, and maintaining consistent research activity. Rewards are automatically distributed to your wallet based on contribution quality and platform engagement.'
        },
        {
          id: 'data-marketplace',
          question: 'How does the data marketplace work?',
          answer: 'The data marketplace allows you to monetize your research data. Upload verified datasets, set prices in MBOX tokens, and earn when other researchers purchase your data. All transactions are blockchain-verified, ensuring data authenticity and creator attribution. Popular datasets with good reviews earn more.'
        },
        {
          id: 'collaboration',
          question: 'Can I collaborate with other researchers on experiments?',
          answer: 'Yes! THE BOX supports collaborative research through shared experiments, data pooling, and co-authored publications. You can invite collaborators through the Community section, share chamber access, and jointly manage experiments. Revenue from collaborative work is split according to predefined agreements.'
        }
      ]
    }
  ]

  const tickets = [
    {
      id: 'ticket-001',
      subject: 'Chamber temperature sensor malfunction',
      status: 'open',
      priority: 'high',
      created: '2025-01-26T10:30:00Z',
      updated: '2025-01-26T14:22:00Z'
    },
    {
      id: 'ticket-002', 
      subject: 'Data export feature not working',
      status: 'in-progress',
      priority: 'medium',
      created: '2025-01-25T16:45:00Z',
      updated: '2025-01-26T09:15:00Z'
    },
    {
      id: 'ticket-003',
      subject: 'Question about staking rewards', 
      status: 'resolved',
      priority: 'low',
      created: '2025-01-24T12:20:00Z',
      updated: '2025-01-25T08:30:00Z'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600'
      case 'medium': return 'text-yellow-600'
      case 'low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  const allFaqs = faqData.flatMap(category => category.questions)
  const filteredFaqs = selectedCategory === 'all' 
    ? allFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqData.find(cat => cat.id === selectedCategory)?.questions.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ) || []

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">How can we help you?</h2>
              <p className="mt-2 text-lg text-gray-600">
                Get support for THE BOX platform, troubleshoot issues, and connect with our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Support</h3>
          <p className="text-gray-600">Choose the best way to reach us based on your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportChannels.map((channel) => {
            const Icon = channel.icon
            return (
              <div key={channel.id} className={`border-2 rounded-lg p-6 ${channel.color} hover:shadow-lg transition-shadow cursor-pointer`}>
                <div className="text-center">
                  <Icon className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{channel.name}</h4>
                  <p className="text-sm mb-4 opacity-80">{channel.description}</p>
                  <div className="text-xs font-medium opacity-90 mb-4">
                    <Clock className="inline h-3 w-3 mr-1" />
                    {channel.response}
                  </div>
                  <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-current font-medium py-2 px-4 rounded-md transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h3>
              </div>

              {/* Search and Filter */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="Search FAQs..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  <select 
                    className="border border-gray-300 rounded-md px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    {faqData.map((category) => (
                      <option key={category.id} value={category.id}>{category.category}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* FAQ List */}
              <div className="divide-y divide-gray-200">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="p-6">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="flex justify-between items-start w-full text-left"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="flex-shrink-0 ml-4 h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="flex-shrink-0 ml-4 h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="mt-4 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
  // Minor update
              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No FAQs found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search terms or browse different categories.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Support Tickets & Resources */}
          <div className="space-y-6">
            {/* My Tickets */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">My Support Tickets</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm text-gray-900">{ticket.subject}</span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span className={`font-medium ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority} priority
                        </span>
                        <span>{new Date(ticket.updated).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
                  Create New Ticket
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Quick Links</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <a href="/documentation" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-sm text-gray-900">Documentation</span>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-sm text-gray-900">Video Tutorials</span>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="/community" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-sm text-gray-900">Community Forum</span>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-sm text-gray-900">System Status</span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-xs text-green-600">All systems operational</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-sm">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-3" />
                    <span>support@mobox.io</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 text-gray-400 mr-3" />
                    <span>Live chat: 24/7 available</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-3" />
                    <span>Priority support: Premium users</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-500">
                      Business hours: Monday-Friday, 9AM-6PM UTC
                    </div>
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