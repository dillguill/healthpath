import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import ThemeToggle from '../components/ui/ThemeToggle'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 justify-center hover:opacity-80 transition-opacity">
      <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
        </svg>
      </div>
      <span className="font-serif text-2xl text-foreground">HealthPath</span>
    </Link>
  )
}

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const result = login(email, password)
    setLoading(false)
    if (result.error) {
      setError(result.error)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-sidebar flex items-center justify-center px-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-[440px] bg-panel border border-border rounded-2xl p-8">
        <div className="mb-8">
          <Logo />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-1">Welcome back</h2>
        <p className="text-muted text-sm mb-7">Sign in to your HealthPath account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          {error && (
            <div className="bg-danger/10 border border-danger/30 text-danger text-sm rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full mt-2">
            {loading ? 'Signing in…' : 'Sign In'}
          </Button>
        </form>

        <p className="text-center text-muted text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-accent hover:underline font-medium">Create one</Link>
        </p>

        <p className="text-center text-faint text-xs mt-5 leading-relaxed">
          Demo: create an account on the signup page, then log in with those credentials.
        </p>
      </div>
    </div>
  )
}
