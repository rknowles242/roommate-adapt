import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import PreferencesPage from './pages/PreferencesPage'
import MatchesPage from './pages/MatchesPage'
import RoommateDetailsPage from './pages/RoommateDetailsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/preferences" element={<PreferencesPage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/matches/:id" element={<RoommateDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App