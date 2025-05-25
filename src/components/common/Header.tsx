import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  Microscope, 
  FlaskConical,
  Users,
  Store,
  Coins,
  BookOpen,
  HelpCircle,
  Settings
} from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Research', href: '/research', icon: Microscope },
  { name: 'Lab', href: '/lab', icon: FlaskConical },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Marketplace', href: '/marketplace', icon: Store },
  { name: 'Economics', href: '/economics', icon: Coins },
  { name: 'Docs', href: '/documentation', icon: BookOpen },
  { name: 'Support', href: '/support', icon: HelpCircle },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">MOBOX THE BOX</span>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div className="text-xl font-bold text-gray-900">THE BOX</div>
              </div>
            </Link>
          </div>
          
          <div className="ml-10 hidden space-x-8 lg:block">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center space-x-2 text-sm font-medium ${
                    isActive 
                      ? 'text-primary-600 border-b-2 border-primary-600 pb-1' 
                      : 'text-gray-500 hover:text-gray-900'
                  } transition-colors`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          <div className="ml-6 flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Coins className="h-4 w-4 text-yellow-500" />
              <span className="font-medium">1,250.75 MBOX</span>
            </div>
            <button
              type="button"
              className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">MOBOX THE BOX</span>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">THE BOX</div>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`-mx-3 flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                          isActive 
                            ? 'text-primary-600 bg-primary-50' 
                            : 'text-gray-900 hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
                <div className="py-6">
                  <div className="flex items-center space-x-2 text-base font-semibold text-gray-900">
                    <Coins className="h-5 w-5 text-yellow-500" />
                    <span>1,250.75 MBOX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}