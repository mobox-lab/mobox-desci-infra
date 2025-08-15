import { 
  FlaskConical, 
  Users, 
  TrendingUp, 
  Globe, 
  Zap, 
  Shield,
  Target,
  Lightbulb
} from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About THE BOX
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              MOBOX's revolutionary pivot into Decentralized Science (De-Sci), transforming our 
              Web3 gaming expertise into interactive scientific research experiences for everyone.
            </p>
          </div>
        </div>
   </div>

      {/* Mission section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Mission</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Making Scientific Research Interactive for ALL
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're applying MOBOX's proven gamification expertise to transform complex scientific research 
            into intuitive, engaging experiences that democratize discovery and create value for every participant.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <Target className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Democratizing Science
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Breaking down barriers to scientific participation by making research accessible, 
                understandable, and engaging for people regardless of their scientific background.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Gamified Discovery
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Leveraging our Web3 gaming expertise to create interactive experiences that make 
                scientific exploration as engaging and rewarding as playing your favorite game.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <Globe className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Global Collaboration
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Building a worldwide network of researchers, contributors, and curious minds working 
                together to accelerate scientific discovery and innovation.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <TrendingUp className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Value Creation
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Creating sustainable economic models where research contributions generate real value 
                through blockchain-verified data assets and token-based reward systems.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* MOBOX Evolution */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">MOBOX Evolution</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Strategic Evolution Journey
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From Web3 gaming pioneers to scientific research revolutionaries - our three-phase evolution 
              demonstrates our commitment to making valuable experiences accessible for everyone.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">  // Minor update
            <div className="grid max-w-xl grid-cols-1 gap-y-8 lg:max-w-none lg:grid-cols-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Phase 1: Making Web3 Gaming Immersive for ALL
                </h3>
                <p className="text-gray-600">
                  Built a comprehensive Web3 Gaming Platform with over 10 game titles forming the 
                  MOBOX ecosystem Matrix. Established one of the most successful gaming platforms 
         in the Web3 space through dedicated development and community focus.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Phase 2: Making Game Production Accessible for ALL
                </h3>
                <p className="text-gray-600">
                  Launched Dragonverse Neo, an ever-evolving open world where users create and 
                  contribute game content through UGC Gaming. Empowered our community to become 
                  creators rather than just players.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-primary-200">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">
                  Phase 3: Making Scientific Research Interactive for ALL
                </h3>
                <p className="text-primary-700">
                  Now venturing into scientific research through Gamified De-Sci. Implementing 
                  gamified mechanisms to enhance scientific exploration, enabling everyone to 
                  become a scientist and making research interactive for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THE BOX Features */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">THE BOX Platform</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Gateway to Scientific Discovery
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              An ecosystem built on gamified biocultivation infrastructure that connects research, 
              product development, and retail through Decentralized Science.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-y-20">
              <div className="flex flex-col">
                <div className="flex items-center gap-x-3 mb-4">
                  <FlaskConical className="h-8 w-8 text-primary-600" />  // Minor update
                  <h3 className="text-xl font-semibold text-gray-900">
                    Advanced Biocultivation Chamber
                  </h3>  // Minor update
                </div>
                <p className="text-gray-600 mb-4">
         Supports a wide range of organisms from plants and fungi to customized microbiomes. 
                  Features comprehensive safety with food-grade materials, easy-to-clean design, 
                  and integrated monitoring systems.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Laboratory-grade precision controls</li>
                  <li>• Light, nutrients, temperature, and humidity management</li>
                  <li>• Food-grade materials and safety features</li>
                  <li>• Real-time monitoring and digital twin visualization</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-x-3 mb-4">
                  <Lightbulb className="h-8 w-8 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Gamified Research Experience
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Transform complex scientific concepts into intuitive, engaging experiences. 
                  Digital twins visualize experiments in real-time with interfaces to explore 
                  microscopic worlds.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Interactive scientific discovery mechanisms</li>
                  <li>• Global collaboration and challenge systems</li>
                  <li>• Achievement and progress tracking</li>
                  <li>• Community-driven research adventures</li>
                </ul>
              </div>
  // Minor update
              <div className="flex flex-col">
                <div className="flex items-center gap-x-3 mb-4">
                  <Shield className="h-8 w-8 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Blockchain-Verified Data
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  All experimental data and results are traceable, certified, and owned by their 
                  creators using blockchain technology. Creating an equitable scientific ecosystem 
                  where everyone can participate and benefit.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Immutable research data records</li>
                  <li>• Creator ownership and attribution</li>
                  <li>• Transparent verification processes</li>
                  <li>• Commercial partnership integration</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-x-3 mb-4">
                  <Users className="h-8 w-8 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    $MBOX Token Utility
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  $MBOX serves as the primary payment tool powering every aspect of our research 
                  economy. Essential for hardware purchases while unlocking various benefits for 
                  holders based on their contributions.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Primary payment system for platform transactions</li>
                  <li>• Priority access and incentive opportunities</li>
                  <li>• Revenue sharing and exclusive research opportunities</li>
                  <li>• Ecosystem partner asset airdrops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to join the scientific revolution?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-200">
              Be part of the community that's redefining the boundaries of science and gaming. 
              Start your research journey today and contribute to global scientific advancement.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/research"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Research
              </a>
              <a href="/community" className="text-sm font-semibold leading-6 text-white">
                Join Community <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}