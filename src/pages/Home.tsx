import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  FlaskConical, 
  Microscope, 
  Users, 
  Coins,
  Zap,
  Globe,
  TrendingUp
} from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                THE BOX
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform scientific research into interactive, accessible experiences through MOBOX's 
              revolutionary gamified biocultivation platform. Everyone can become a scientist.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/research"
                className="btn btn-primary px-6 py-3 text-sm"
              >
                Start Research <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div 
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Revolutionary Platform</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making Scientific Research Interactive for ALL
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
       MOBOX's expertise in gamification transforms complex scientific research into engaging, 
              accessible experiences that anyone can participate in and benefit from.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <FlaskConical className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  Biocultivation Home-Lab
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Advanced cultivation chambers with laboratory-grade controls for plants, fungi, and microbiomes. 
                    Food-grade materials, easy cleaning, and integrated monitoring systems.
                  </p>
                  <p className="mt-6">
                    <Link to="/lab" className="text-sm font-semibold leading-6 text-primary-600">
                      Explore Lab <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Microscope className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  Gamified Research
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Transform complex concepts into intuitive experiences with digital twins, 
                    real-time visualization, and collaborative challenges that make discovery fun.
                  </p>
                  <p className="mt-6">
                    <Link to="/research" className="text-sm font-semibold leading-6 text-primary-600">
                      Start Research <span aria-hidden="true">→</span>
                    </Link>
                  </p> 
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Coins className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  Data Monetization
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Blockchain-verified research data becomes valuable digital assets. 
                    Create revenue streams while contributing to global scientific advancement.
                  </p>
                  <p className="mt-6">
                    <Link to="/marketplace" className="text-sm font-semibold leading-6 text-primary-600">
                      View Marketplace <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-primary-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Global Research Network
              </h2>
       <p className="mt-4 text-lg leading-8 text-primary-200">
                Join thousands of researchers, scientists, and curious minds advancing human knowledge together.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-primary-400/10 p-8">
                <dt className="text-sm font-semibold leading-6 text-primary-200">Active Researchers</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">12,450+</dd>
              </div>
              <div className="flex flex-col bg-primary-400/10 p-8">
                <dt className="text-sm font-semibold leading-6 text-primary-200">Experiments Running</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">3,247</dd>
              </div>
              <div className="flex flex-col bg-primary-400/10 p-8">
                <dt className="text-sm font-semibold leading-6 text-primary-200">Data Points Collected</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">2.4M+</dd>
              </div>
              <div className="flex flex-col bg-primary-400/10 p-8">
                <dt className="text-sm font-semibold leading-6 text-primary-200">$MBOX Rewards Distributed</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">$850K</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to revolutionize science?
                <br />
                Join THE BOX today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Be part of the community that's making scientific research accessible, 
                fun, and rewarding for everyone. Start your research journey now.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  to="/research"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start Research
                </Link>
        <Link to="/community" className="text-sm font-semibold leading-6 text-white">
                  Join Community <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Scientific research dashboard"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}