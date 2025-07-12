import  { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Lab from './pages/Lab'
import Community from './pages/Community'
import Marketplace from './pages/Marketplace' 
import Economics from './pages/Economics'
import Documentation from './pages/Documentation'
import Support from './pages/Support'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="research" element={<Research />} />
        <Route path="lab" element={<Lab />} />
        <Route path="community" element={<Community />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="economics" element={<Economics />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="support" element={<Support />} />
    <Route path="settings" element={<Settings />} />
      </Route>
  </Routes>
  ) 
}

export default App