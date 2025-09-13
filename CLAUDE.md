# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MOBOX De-Sci Infrastructure - A gamified decentralized science platform called "THE BOX" that transforms scientific research into interactive, accessible experiences. Built as a static React.js web application with Vite.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

#  Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Run type checking
npm run type-check
```

## Architecture

### Tech Stack
- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling 
- **React Router** for client-side navigation
- **Context API** for state management
- **Lucide React** for consistent iconography

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── common/         # Common components (Header, Footer, etc.)
│   └── pages/          # Page-specific components
├── pages/              # Main page components
├── contexts/           # React Context providers
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── data/               # Mock data and constants
└── styles/             # Global styles and Tailwind config
```

### Key Pages (10 total)
1. **Home** - Landing page with THE BOX introduction
2. **About** - Detailed platform information and mission
3. **Research** - Dashboard for experiment management
4. **Lab** - Biocultivation hardware interface
5. **Community** - Global researcher collaboration hub
6. **Marketplace** - Data trading and asset exchange
7. **Economics** - $MBOX token utility and rewards
8. **Documentation** - Technical guides and protocols
9. **Support** - Help center and resources
10. **Settings** - User preferences and account management

## Development Guidelines

### Component Patterns
- Use functional components with hooks
- Implement responsive design with Tailwind CSS
- Follow atomic design principles (atoms, molecules, organisms)
- Create reusable components in `src/components/common/`
- Use TypeScript interfaces for prop definitions

### State Management
- Use Context API for global state (user, theme, settings)
- Local state with useState for component-specific data
- Mock all external API calls - no real backend integration

### Styling Conventions 
- Tailwind CSS utility classes for styling
- Responsive design with mobile-first approach
- Consistent color scheme matching MOBOX branding
- Dark/light theme support

### Mock Data Strategy
- All features should use mock data only
- Create realistic sample data in `src/data/`
- Simulate loading states and interactions
- No actual API calls or external integrations

## Key Features to Implement

### Biocultivation Interface
- Cultivation chamber controls (temperature, humidity, light)
- Real-time monitoring dashboard with mock data
- Digital twin visualization of experiments
- Progress tracking and milestone achievements

### Research Management
- Experiment creation and management
- Data collection and analysis tools
- Collaboration features with mock users
- Research milestone tracking

### Community Features
- Global researcher network simulation
- Challenge and quest systems
- Achievement and reward mechanisms
- Knowledge sharing and collaboration tools

### Token Economics
- $MBOX utility showcase
- Staking and reward mechanisms
- Data monetization examples
- Revenue sharing simulations

## Deployment

The project builds to static files for deployment on any static hosting platform:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Important Notes

- **No Backend Required**: Pure static site with mock data
- **Mobile Responsive**: All pages must work on mobile devices
- **Accessibility**: Follow WCAG 2.1 AA guidelines
- **Performance**: Optimize for fast loading and smooth interactions
- **SEO Ready**: Include proper meta tags and structured data### perf: ⚡ optimize database indexing

Updated documentation to reflect the latest changes and improvements.
### feat: ✨ implement wallet connection for Web3

Updated documentation to reflect the latest changes and improvements.
### security: 🔒 implement session management

Updated documentation to reflect the latest changes and improvements.
### refactor: 🔧 optimize component structure

Updated documentation to reflect the latest changes and improvements.
### security: 🔒 add rate limiting

Updated documentation to reflect the latest changes and improvements.
