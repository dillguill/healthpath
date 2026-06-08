import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import ProtectedRoute from './components/layout/ProtectedRoute'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import MealPlanner from './pages/MealPlanner'

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter basename="/healthpath">
          <Routes>
            <Route path="/"             element={<Landing />} />
            <Route path="/login"        element={<Login />} />
            <Route path="/signup"       element={<Signup />} />
            <Route path="/dashboard"    element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/meal-planner" element={<ProtectedRoute><MealPlanner /></ProtectedRoute>} />
            <Route path="*"             element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}
