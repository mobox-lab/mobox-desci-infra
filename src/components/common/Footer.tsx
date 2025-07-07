import { Link } from 'react-router-dom'
import { Github, Twitter, MessageCircle, Send } from 'lucide-react'

const navigation = {
  product: [
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Lab', href: '/lab' },
    { name: 'Community', href: '/community' },
  ],
  platform: [
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Economics', href: '/economics' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Support', href: '/support' },
  ],
  company: [
    { name: 'About MOBOX', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
  { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'License', href: '#' },
  ],
}

const social = [
  {
    name: 'Discord',
    href: '#',
    icon: MessageCircle,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: Github,
  },
  {
    name: 'Telegram',  // Minor update
    href: '#',
    icon: Send,
  },
] 

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">  // Minor update
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div className="text-xl font-bold text-gray-900">THE BOX</div>
            </div>
      <p className="text-sm leading-6 text-gray-600">
              Making scientific research interactive for ALL through gamified biocultivation infrastructure that democratizes discovery.
            </p>
            <div className="flex space-x-6">
              {social.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Platform</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.platform.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (  // Minor update
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="text-xs leading-5 text-gray-500 text-center">
            <p>&copy; 2025 MOBOX. All rights reserved. Built with ❤️ by the MOBOX team.</p>
            <p className="mt-2">Join us as we redefine the boundaries of science and gaming! 🧬🎮</p>
          </div>
        </div>
      </div>
    </footer>
  )
}