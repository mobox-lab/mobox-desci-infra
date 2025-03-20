import { useState } from 'react'
import { 
  Coins, 
  TrendingUp, 
  Wallet, 
  Gift,
  Lock,
  Users,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Award
} from 'lucide-react'
import { mockUser, mockRewards } from '../data/mockData'

export default function Economics() {
  const [selectedTab, setSelectedTab] = useState('overview')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'staking', name: 'Staking', icon: Lock },
    { id: 'rewards', name: 'Rewards', icon: Gift },
    { id: 'history', name: 'History', icon: Calendar },
  ]

  const stakingOptions = [
    {
      id: 'stake-30',
      duration: '30 Days',
      apy: '12%',
      minAmount: 100,
      benefits: ['Basic research access', 'Weekly rewards', 'Community voting'],
      popular: false
    },
    {
      id: 'stake-90',
      duration: '90 Days',
      apy: '18%',
      minAmount: 500,
      benefits: ['Priority lab access', 'Daily rewards', 'Advanced analytics', 'Beta features'],
      popular: true
    },
    {
      id: 'stake-365',
      duration: '365 Days',
      apy: '25%',
      minAmount: 1000,
      benefits: ['Premium lab priority', 'Maximum rewards', 'Governance rights', 'Exclusive partnerships', 'VIP support'],
      popular: false
    }
  ]

  const tokenMetrics = {
    totalSupply: 1000000000,
    circulatingSupply: 650000000,
    stakedTokens: 285000000,
    burnedTokens: 15000000,
    marketCap: 125000000,
    price: 0.192
  }

  const getRewardTypeIcon = (type: string) => {
    switch (type) {
      case 'experiment_completion': return '🧪'
      case 'data_contribution': return '📊'
      case 'challenge_win': return '🏆'
      case 'community_participation': return '👥'
      default: return '🎁'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Token Economics
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your $MBOX tokens, stake for rewards, and participate in the research economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Token Balance */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-200">MBOX Balance</p>
                <p className="text-3xl font-bold">{mockUser.mboxBalance.toLocaleString()}</p>
                <p className="text-primary-200 text-sm">${(mockUser.mboxBalance * tokenMetrics.price).toFixed(2)} USD</p>
              </div>
              <Wallet className="h-12 w-12 text-primary-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-200">veMBOX (Staked)</p>
                <p className="text-3xl font-bold">{mockUser.veMboxBalance.toLocaleString()}</p>
                <p className="text-secondary-200 text-sm">Earning 18% APY</p>
              </div>
              <Lock className="h-12 w-12 text-secondary-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-200">Total Earned</p>
                <p className="text-3xl font-bold">{mockRewards.reduce((sum, reward) => sum + reward.amount, 0)}</p>
                <p className="text-green-200 text-sm">This month</p>
              </div>
              <TrendingUp className="h-12 w-12 text-green-200" />
            </div>
          </div>
        </div>

        {/* Token Metrics */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">$MBOX Token Metrics</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">${tokenMetrics.price}</div>
                <div className="text-sm text-gray-500">Current Price</div>
                <div className="flex items-center justify-center mt-1">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">+5.2%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">${tokenMetrics.marketCap.toLocaleString()}</div>
                <div className="text-sm text-gray-500">Market Cap</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{(tokenMetrics.circulatingSupply / 1000000).toFixed(0)}M</div>
                <div className="text-sm text-gray-500">Circulating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{(tokenMetrics.stakedTokens / 1000000).toFixed(0)}M</div>
                <div className="text-sm text-gray-500">Staked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{(tokenMetrics.burnedTokens / 1000000).toFixed(1)}M</div>
                <div className="text-sm text-gray-500">Burned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{((tokenMetrics.stakedTokens / tokenMetrics.circulatingSupply) * 100).toFixed(1)}%</div>
                <div className="text-sm text-gray-500">Staking Ratio</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
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

          {/* Tab Content */}
          <div className="px-4 py-5 sm:p-6">
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">$MBOX Utility</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                        </div>
                        <div className="ml-3">
                          <div className="font-medium text-gray-900">Hardware Purchases</div>
                          <div className="text-sm text-gray-600">Essential payment method for biocultivation equipment</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                        </div>
                        <div className="ml-3">
                          <div className="font-medium text-gray-900">Platform Transactions</div>
                          <div className="text-sm text-gray-600">Access premium features and data marketplace</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                        </div>
                        <div className="ml-3">
                          <div className="font-medium text-gray-900">Governance Voting</div>
                          <div className="text-sm text-gray-600">Participate in platform decision making</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                        </div>
                        <div className="ml-3">
                          <div className="font-medium text-gray-900">Revenue Sharing</div>
                          <div className="text-sm text-gray-600">Earn from platform profits through staking</div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Token Economics Model</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-medium text-gray-900 mb-2">Deflationary Mechanism</div>
                        <div className="text-sm text-gray-600">Regular buyback and burn funded by platform revenue</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-medium text-gray-900 mb-2">Staking Rewards</div>
                        <div className="text-sm text-gray-600">Up to 25% APY for long-term stakers</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-medium text-gray-900 mb-2">Research Incentives</div>
                        <div className="text-sm text-gray-600">Rewards for data contributions and experiment completion</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'staking' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-lg font-medium text-gray-900">Choose Your Staking Plan</h3>
                  <p className="text-sm text-gray-600 mt-1">Lock your MBOX tokens to earn rewards and unlock premium benefits</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stakingOptions.map((option) => (
                    <div key={option.id} className={`relative rounded-lg border-2 p-6 ${option.popular ? 'border-primary-500 bg-primary-50' : 'border-gray-200 bg-white'}`}>
                      {option.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-primary-600 text-white">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-semibold text-gray-900">{option.duration}</h4>
                        <div className="text-3xl font-bold text-primary-600 my-2">{option.apy}</div>
                        <div className="text-sm text-gray-600">Annual Percentage Yield</div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="text-center">
                          <div className="text-sm text-gray-600">Minimum Amount</div>
                          <div className="font-semibold text-gray-900">{option.minAmount} MBOX</div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-gray-900 mb-2">Benefits:</div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {option.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <button className={`w-full py-2 px-4 rounded-md font-medium ${option.popular ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                        Stake Now
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Award className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-yellow-800">Early Staker Bonus</h4>
                      <div className="text-sm text-yellow-700 mt-1">
                        Stake before March 31st to receive an additional 3% APY bonus for the first 3 months!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'rewards' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">
                      {mockRewards.filter(r => r.type === 'experiment_completion').reduce((sum, r) => sum + r.amount, 0)}
                    </div>
                    <div className="text-sm text-blue-700">Experiment Rewards</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-900">
                      {mockRewards.filter(r => r.type === 'data_contribution').reduce((sum, r) => sum + r.amount, 0)}
                    </div>
                    <div className="text-sm text-green-700">Data Contributions</div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-900">
                      {mockRewards.filter(r => r.type === 'challenge_win').reduce((sum, r) => sum + r.amount, 0)}
                    </div>
                    <div className="text-sm text-yellow-700">Challenge Wins</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-900">
                      {mockRewards.filter(r => r.type === 'community_participation').reduce((sum, r) => sum + r.amount, 0)}
                    </div>
                    <div className="text-sm text-purple-700">Community</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Recent Rewards</h4>
                  <div className="space-y-3">
                    {mockRewards.map((reward) => (
                      <div key={reward.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{getRewardTypeIcon(reward.type)}</span>
                          <div>
                            <div className="font-medium text-gray-900">{reward.description}</div>
                            <div className="text-sm text-gray-600">{formatDate(reward.timestamp)}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">+{reward.amount} MBOX</div>
                          <div className="text-sm text-gray-500">${(reward.amount * tokenMetrics.price).toFixed(2)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'history' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium text-gray-900">Transaction History</h4>
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Export CSV
                  </button>
                </div>

                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Description</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wide">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockRewards.map((reward) => (
                        <tr key={reward.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatDate(reward.timestamp)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Reward
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{reward.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                            <span className="text-green-600 font-medium">+{reward.amount} MBOX</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}