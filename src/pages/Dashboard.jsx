import { Link } from 'react-router-dom'
import { FileText, Calendar, UtensilsCrossed, Activity, BookOpen, Clock, UserCheck, Edit3, Heart } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import AppLayout from '../components/layout/AppLayout'

const stats = [
  { label: 'Resources Accessed',    value: '12',  icon: FileText,       color: 'text-accent',  bg: 'bg-accent/10' },
  { label: 'Days Active',            value: '7',   icon: Calendar,       color: 'text-success', bg: 'bg-success/10' },
  { label: 'Meal Plans Generated',   value: '3',   icon: UtensilsCrossed,color: 'text-warning', bg: 'bg-warning/10' },
  { label: 'Health Score',           value: '84%', icon: Activity,       color: 'text-accent',  bg: 'bg-accent/10' },
]

const activity = [
  { icon: UtensilsCrossed, label: 'Generated a Low Sodium meal plan', time: '2 hours ago', color: 'text-accent' },
  { icon: BookOpen,        label: 'Viewed Nutrition Guide',            time: 'Yesterday',  color: 'text-success' },
  { icon: UserCheck,       label: 'Connected with a provider',         time: '2 days ago', color: 'text-warning' },
  { icon: Edit3,           label: 'Updated health profile',            time: '3 days ago', color: 'text-muted' },
  { icon: Heart,           label: 'Logged daily vitals',               time: '4 days ago', color: 'text-danger' },
]

const tips = [
  { title: 'Stay Hydrated',     body: 'Aim for 8 glasses of water daily — more if you are active or managing kidney conditions.' },
  { title: 'Track Your Sodium', body: 'Less than 2,300mg per day is the general guideline. Check labels on processed foods.' },
  { title: 'Move Daily',        body: 'Even 20 minutes of walking makes a measurable difference in cardiovascular health.' },
]

function greeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <AppLayout title="Dashboard">
      <div className="space-y-6">

        {/* Welcome banner */}
        <div className="bg-gradient-to-r from-accent/15 to-panel border border-accent/25 rounded-xl p-6">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-1">
            {greeting()}, {user?.name?.split(' ')[0] || 'there'}.
          </h2>
          <p className="text-muted text-sm">
            {user?.role === 'provider'
              ? "Here's your patient activity overview for today."
              : "Here's your health overview. You're on a great path."}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stats.map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-4 md:p-5">
              <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                <Icon size={18} className={color} />
              </div>
              <p className={`text-xl md:text-2xl font-bold font-serif ${color}`}>{value}</p>
              <p className="text-muted text-xs mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div>
            <h3 className="text-muted font-semibold text-xs uppercase tracking-wider mb-3">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/meal-planner"
                className="flex items-center gap-4 bg-accent rounded-xl p-5 text-white hover:bg-accent-hover transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors flex-shrink-0">
                  <UtensilsCrossed size={20} />
                </div>
                <div>
                  <p className="font-semibold">Plan My Meals</p>
                  <p className="text-white/70 text-sm">Generate a personalized 7-day plan</p>
                </div>
              </Link>
              <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 text-faint cursor-not-allowed">
                <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} className="text-faint/60" />
                </div>
                <div>
                  <p className="font-semibold">Browse Resources</p>
                  <p className="text-faint/70 text-sm">Coming soon — health guides & articles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h3 className="text-muted font-semibold text-xs uppercase tracking-wider mb-3">Recent Activity</h3>
            <div className="bg-card border border-border rounded-xl divide-y divide-border/50">
              {activity.map(({ icon: Icon, label, time, color }) => (
                <div key={label} className="flex items-center gap-3 px-4 py-3.5">
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className={color} />
                  </div>
                  <p className="flex-1 text-sm text-foreground/80 font-medium truncate">{label}</p>
                  <div className="flex items-center gap-1 text-faint text-xs flex-shrink-0">
                    <Clock size={11} />
                    {time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Health Tips */}
        <div>
          <h3 className="text-muted font-semibold text-xs uppercase tracking-wider mb-3">Health Tips</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {tips.map(({ title, body }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Heart size={15} className="text-accent" />
                </div>
                <p className="font-semibold text-foreground text-sm mb-1.5">{title}</p>
                <p className="text-muted text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </AppLayout>
  )
}
