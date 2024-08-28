import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AppointPage from './pages/AppointPage'
import AudioPage from './pages/AudioPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/appoint" element={<AppointPage />} />
          <Route path="/audio" element={<AudioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer></Footer>
    </Router>
  )
}

export default App