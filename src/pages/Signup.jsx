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

export default function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', role: 'patient' })
  const [errors, setErrors] = useState({})
  const [globalError, setGlobalError] = useState('')
  const [loading, setLoading] = useState(false)

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    if (!form.password) e.password = 'Password is required.'
    else if (form.password.length < 6) e.password = 'Password must be at least 6 characters.'
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match.'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setGlobalError('')
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    const result = signup(form.name.trim(), form.email.trim(), form.password, form.role)
    setLoading(false)
    if (result.error) {
      setGlobalError(result.error)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-sidebar flex items-center justify-center px-4 py-10">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-[440px] bg-panel border border-border rounded-2xl p-8">
        <div className="mb-8">
          <Logo />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-1">Create your account</h2>
        <p className="text-muted text-sm mb-7">Join HealthPath and take control of your health journey</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={set('name')}
            error={errors.name}
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set('email')}
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Min. 6 characters"
            value={form.password}
            onChange={set('password')}
            error={errors.password}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Re-enter password"
            value={form.confirm}
            onChange={set('confirm')}
            error={errors.confirm}
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-muted">Role</label>
            <select
              value={form.role}
              onChange={set('role')}
              className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            >
              <option value="patient">Patient</option>
              <option value="provider">Healthcare Provider</option>
              <option value="caregiver">Caregiver</option>
            </select>
          </div>

          {globalError && (
            <div className="bg-danger/10 border border-danger/30 text-danger text-sm rounded-lg px-4 py-3">
              {globalError}
            </div>
          )}

          <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full mt-2">
            {loading ? 'Creating account…' : 'Create Account'}
          </Button>
        </form>

        <p className="text-center text-muted text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-accent hover:underline font-medium">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
