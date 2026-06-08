import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('hp_user')
    if (stored) setUser(JSON.parse(stored))
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const accounts = JSON.parse(localStorage.getItem('hp_accounts') || '[]')
    const match = accounts.find(a => a.email === email && a.password === password)
    if (!match) return { error: 'Invalid email or password.' }
    const userData = { email: match.email, name: match.name, role: match.role }
    localStorage.setItem('hp_user', JSON.stringify(userData))
    setUser(userData)
    return { success: true }
  }

  const signup = (name, email, password, role) => {
    const accounts = JSON.parse(localStorage.getItem('hp_accounts') || '[]')
    if (accounts.find(a => a.email === email)) return { error: 'Email already registered.' }
    const newAccount = { name, email, password, role }
    accounts.push(newAccount)
    localStorage.setItem('hp_accounts', JSON.stringify(accounts))
    const userData = { email, name, role }
    localStorage.setItem('hp_user', JSON.stringify(userData))
    setUser(userData)
    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem('hp_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
