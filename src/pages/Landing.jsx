import { Link } from 'react-router-dom'
import { Shield, Award, Lock, Users, User, UtensilsCrossed, BookOpen, Star, ChevronRight, LayoutDashboard } from 'lucide-react'
import ThemeToggle from '../components/ui/ThemeToggle'
import { useAuth } from '../context/AuthContext'

function getInitials(name) {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
        </svg>
      </div>
      <span className="font-serif text-xl text-foreground">HealthPath</span>
    </Link>
  )
}

const trustItems = [
  { icon: Shield,  label: 'HIPAA Compliant' },
  { icon: Award,   label: 'Board-Certified Providers' },
  { icon: Lock,    label: 'Secure & Encrypted' },
  { icon: Users,   label: '50,000+ Patients' },
]

const features = [
  {
    icon: User,
    title: 'Patient Portal',
    desc: 'Manage your health profile, appointments, and records in one secure place. Always up to date, always accessible.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Meal Planning',
    desc: 'Get personalized 7-day meal plans tailored to your health condition, dietary preferences, and nutrient goals.',
  },
  {
    icon: Users,
    title: 'Provider Network',
    desc: 'Connect with board-certified specialists who understand your specific health journey and can guide your care.',
  },
]

const steps = [
  { num: '01', title: 'Create your profile', desc: 'Sign up in minutes and tell us about your health goals, conditions, and dietary preferences.' },
  { num: '02', title: 'Get matched to resources', desc: 'Our system surfaces meal plans, guides, and providers that fit your specific situation.' },
  { num: '03', title: 'Track your progress', desc: 'Monitor your activity, meals, and milestones to stay motivated on your health journey.' },
]

const testimonials = [
  { quote: "HealthPath made managing my CKD diet so much easier. I finally have a meal plan I can actually follow.", name: 'Maria S.', role: 'Patient — CKD Stage 3', initials: 'MS' },
  { quote: "As a dietitian I recommend this platform to my patients. The meal planner is clinically sound and practical.", name: 'Dr. James T.', role: 'Registered Dietitian', initials: 'JT' },
  { quote: "The provider network helped me find a nephrologist who specialized in exactly what I needed. Life changing.", name: 'Robert K.', role: 'Patient — Hypertension', initials: 'RK' },
]

const footerLinks = {
  Platform: ['Dashboard', 'Meal Planner', 'Find a Provider', 'Resources'],
  'Health Topics': ['Kidney Health', 'Heart Health', 'Diabetes', 'Nutrition'],
  Company: ['About', 'Careers', 'Privacy Policy', 'Terms of Service'],
}

export default function Landing() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-sidebar text-foreground font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-sidebar border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {user ? (
              <Link
                to="/dashboard"
                className="flex items-center gap-2 bg-accent/10 hover:bg-accent/20 border border-accent/25 text-accent px-3 py-1.5 rounded-lg transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {getInitials(user.name)}
                </div>
                <span className="text-sm font-medium hidden sm:block">{user.name.split(' ')[0]}</span>
                <LayoutDashboard size={14} className="hidden sm:block" />
              </Link>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-muted hover:text-foreground border border-border px-4 py-2 rounded-lg transition-colors hidden sm:block">
                  Login
                </Link>
                <Link to="/signup" className="text-sm font-medium bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg transition-colors">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-6">
            Trusted Healthcare Platform
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Your health journey,<br />guided by experts.
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Personalized meal plans, specialist connections, and tools designed for patients managing chronic conditions — all in one secure platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            {user ? (
              <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Go to Dashboard <ChevronRight size={16} />
              </Link>
            ) : (
              <Link to="/signup" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Get Started Free <ChevronRight size={16} />
              </Link>
            )}
            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 border border-border text-muted hover:text-foreground hover:border-muted px-6 py-3 rounded-lg transition-colors font-medium">
              See How It Works
            </a>
          </div>
        </div>

        {/* Mock Dashboard Preview */}
        <div className="flex-1 w-full max-w-md relative">
          <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl scale-75 opacity-60 pointer-events-none" />
          <div className="relative bg-panel border border-border rounded-2xl p-6 shadow-2xl">
            <p className="text-xs text-muted font-medium mb-4 uppercase tracking-wider">Dashboard Preview</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: 'Resources', val: '12', color: 'text-accent' },
                { label: 'Days Active', val: '7', color: 'text-success' },
                { label: 'Meal Plans', val: '3', color: 'text-warning' },
                { label: 'Health Score', val: '84%', color: 'text-accent' },
              ].map(s => (
                <div key={s.label} className="bg-surface border border-border rounded-lg p-3">
                  <p className={`text-2xl font-bold font-serif ${s.color}`}>{s.val}</p>
                  <p className="text-xs text-muted mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-surface border border-border rounded-lg p-3 mb-3">
              <div className="flex justify-between text-xs text-muted mb-2">
                <span>Weekly Progress</span><span className="text-accent font-medium">68%</span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: '68%' }} />
              </div>
            </div>
            <div className="space-y-2">
              {['Generated Low Sodium plan', 'Viewed Nutrition Guide', 'Updated health profile'].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-panel border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={20} className="text-accent flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Everything you need to manage your health</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">Built specifically for patients navigating chronic conditions, with tools that actually make a difference.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-panel border border-border rounded-xl p-6 hover:border-accent transition-colors duration-200">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon size={22} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-panel border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Get started in three simple steps</h2>
            <p className="text-muted text-lg">From signup to a personalized health plan in minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center md:text-left">
                <p className="font-serif text-6xl font-bold text-accent/30 mb-3 leading-none">{num}</p>
                <h3 className="font-semibold text-foreground text-xl mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Trusted by patients and providers</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, initials }) => (
            <div key={name} className="bg-panel border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(n => <Star key={n} size={14} className="text-warning fill-warning" />)}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6 italic">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-xs font-bold">
                  {initials}
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{name}</p>
                  <p className="text-muted text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section id="pricing" className="bg-accent">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to take control of your health?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Join thousands of patients managing their health smarter with HealthPath. Free to get started.</p>
          <Link to="/signup" className="inline-flex items-center gap-2 bg-white text-[#0F1923] font-semibold px-8 py-3.5 rounded-lg hover:bg-white/90 transition-colors">
            Create Your Free Account <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-muted text-sm mt-4 leading-relaxed max-w-xs">
              A healthcare platform built for patients navigating complex conditions, designed with care.
            </p>
          </div>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-foreground text-sm font-semibold mb-4">{section}</p>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-muted text-sm hover:text-foreground transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-muted text-xs">© 2025 HealthPath. All rights reserved.</p>
            <p className="text-muted text-xs">Built for better health outcomes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
