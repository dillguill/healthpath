import { NavLink, Link, useNavigate } from 'react-router-dom'
import { LayoutDashboard, UtensilsCrossed, BookOpen, UserSearch, Settings, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { to: '/dashboard',    icon: LayoutDashboard,  label: 'Dashboard',        enabled: true },
  { to: '/meal-planner', icon: UtensilsCrossed,  label: 'Meal Planner',     enabled: true },
  { to: '#',             icon: BookOpen,         label: 'Resources',        enabled: false },
  { to: '#',             icon: UserSearch,       label: 'Find a Provider',  enabled: false },
  { to: '#',             icon: Settings,         label: 'Settings',         enabled: false },
]

function getInitials(name) {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

const roleLabel = {
  patient:   'Patient',
  provider:  'Healthcare Provider',
  caregiver: 'Caregiver',
}

export default function Sidebar({ mobileOpen = false, onClose = () => {} }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const sidebarContent = (
    <>
      {/* Logo */}
      <Link
        to="/"
        onClick={onClose}
        className="flex items-center gap-3 px-5 py-6 border-b border-border hover:opacity-80 transition-opacity"
      >
        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
          </svg>
        </div>
        <span className="font-serif text-lg text-foreground tracking-wide">HealthPath</span>
      </Link>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, icon: Icon, label, enabled }) =>
          enabled ? (
            <NavLink
              key={label}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-accent bg-accent/10 border-l-2 border-accent pl-[10px]'
                    : 'text-muted hover:text-foreground hover:bg-foreground/5'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ) : (
            <div
              key={label}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-faint cursor-not-allowed"
            >
              <Icon size={18} />
              {label}
              <span className="ml-auto text-xs bg-surface text-faint px-2 py-0.5 rounded-full">Soon</span>
            </div>
          )
        )}
      </nav>

      {/* Account + logout */}
      <div className="px-3 pb-6 border-t border-border pt-4 space-y-1">
        {user && (
          <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-surface/40 mb-2">
            <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-xs font-semibold flex-shrink-0">
              {getInitials(user.name)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
              <p className="text-xs text-muted">{roleLabel[user.role] || user.role}</p>
            </div>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-danger hover:bg-danger/10 w-full transition-all"
        >
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* ── Desktop sidebar (always visible md+) ── */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-60 bg-sidebar z-20 border-r border-border">
        {sidebarContent}
      </aside>

      {/* ── Mobile: backdrop + slide-in drawer ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`
          flex flex-col fixed top-0 right-0 h-screen w-72 bg-sidebar z-40 border-l border-border
          md:hidden
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
