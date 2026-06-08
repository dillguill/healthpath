import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import ThemeToggle from '../ui/ThemeToggle'

function getInitials(name) {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

const roleLabel = {
  patient:   'Patient',
  provider:  'Healthcare Provider',
  caregiver: 'Caregiver',
}

export default function TopBar({ title, onMenuClick }) {
  const { user } = useAuth()

  return (
    <header className="bg-panel border-b border-border flex-shrink-0 relative">

      {/* ── Mobile layout ── */}
      <div className="flex md:hidden items-center justify-between h-14 px-4">
        {/* Left: home logo */}
        <Link
          to="/"
          className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
          </svg>
        </Link>

        {/* Center: page title — absolutely centered on the full header width */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-foreground whitespace-nowrap pointer-events-none">
          {title}
        </h1>

        {/* Right: theme toggle + hamburger */}
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={onMenuClick}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-foreground/5 transition-all"
            aria-label="Open navigation"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex items-center justify-between h-16 px-6">
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {user && (
            <>
              <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-sm font-semibold flex-shrink-0">
                {getInitials(user.name)}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-foreground leading-none">{user.name}</p>
                <p className="text-xs text-muted mt-0.5">{roleLabel[user.role] || user.role}</p>
              </div>
            </>
          )}
        </div>
      </div>

    </header>
  )
}
