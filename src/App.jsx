import React from 'react'
import NavBar from './components/navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import StatSection from './sections/StatSection'
import MateriSection from './sections/MateriSection'
import Footer from './components/footer'
import FAQSection from './sections/FAQSection'
import TimelineSection from './sections/TimelineSection'
import RegisterSection from './sections/RegisterSection'

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <StatSection />
      <MateriSection />
      <TimelineSection />
      <RegisterSection />
      <Footer />
    </div>
  )
}

export default App