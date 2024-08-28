import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AppointPage from './pages/AppointPage'
import AudioPage from './pages/AudioPage'
import ContactPage from './pages/ContactPage'

import HomePageES from './pages/HomePageES'
import AboutPageES from './pages/AboutPageES'
import AppointPageES from './pages/AppointPageES'
import AudioPageES from './pages/AudioPageES'
import ContactPageES from './pages/ContactPageES'

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/appoint" element={<AppointPage />} />
          <Route path="/audio" element={<AudioPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route exact path="/es" element={<HomePageES />} />
          <Route path="/es/about" element={<AboutPageES />} />
          <Route path="/es/appoint" element={<AppointPageES />} />
          <Route path="/es/audio" element={<AudioPageES />} />
          <Route path="/es/contact" element={<ContactPageES />} />
        </Routes>
    </Router>
  )
}

export default App