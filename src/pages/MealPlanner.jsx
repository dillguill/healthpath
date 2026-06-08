import { useState } from 'react'
import { RefreshCw, Zap, Settings2 } from 'lucide-react'
import { getQuickPlan, getAdvancedPlan } from '../data/mealData'
import AppLayout from '../components/layout/AppLayout'
import Button from '../components/ui/Button'

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
const DAY_LABELS = { monday: 'Mon', tuesday: 'Tue', wednesday: 'Wed', thursday: 'Thu', friday: 'Fri', saturday: 'Sat', sunday: 'Sun' }

const GOALS = [
  { id: 'heart-health',     emoji: '🫀', label: 'Heart Health' },
  { id: 'kidney-health',    emoji: '🫘', label: 'Kidney Health' },
  { id: 'diabetic-friendly',emoji: '🩸', label: 'Diabetic Friendly' },
  { id: 'low-sodium',       emoji: '🧂', label: 'Low Sodium' },
  { id: 'general-wellness', emoji: '🌿', label: 'General Wellness' },
]

const CONDITIONS = [
  { value: 'none',         label: 'None / General Health' },
  { value: 'ckd-1-2',     label: 'CKD Stage 1–2' },
  { value: 'ckd-3',       label: 'CKD Stage 3' },
  { value: 'ckd-4-5',     label: 'CKD Stage 4–5' },
  { value: 'hypertension', label: 'Hypertension' },
  { value: 'diabetes',     label: 'Type 2 Diabetes' },
  { value: 'heart',        label: 'Heart Disease' },
]

const DIETARY = [
  { value: '',            label: 'No Preference' },
  { value: 'vegetarian',  label: 'Vegetarian' },
  { value: 'vegan',       label: 'Vegan' },
  { value: 'gluten-free', label: 'Gluten-Free' },
  { value: 'dairy-free',  label: 'Dairy-Free' },
]

const NUTRIENTS = ['sodium', 'potassium', 'phosphorus', 'saturated-fat', 'sugar']
const ALLERGENS = ['nuts', 'shellfish', 'eggs', 'gluten', 'dairy']

function PlanGrid({ plan }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
      {DAYS.map(day => (
        <div key={day} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-accent/10 border-b border-accent/20 px-3 py-2">
            <p className="text-accent font-semibold text-sm">{DAY_LABELS[day]}</p>
          </div>
          <div className="p-3 space-y-2.5">
            {['breakfast', 'lunch', 'dinner', 'snack'].map(meal => (
              <div key={meal}>
                <p className="text-faint text-[10px] uppercase tracking-wider font-semibold mb-0.5">{meal}</p>
                <p className="text-foreground/80 text-xs leading-snug">{plan[day]?.[meal] || '—'}</p>
              </div>
            ))}
            {plan[day]?.restrictions?.length > 0 && (
              <div className="pt-1 border-t border-border/50">
                <p className="text-[10px] text-accent font-semibold uppercase tracking-wider mb-1">Restrictions</p>
                <div className="flex flex-wrap gap-1">
                  {plan[day].restrictions.slice(0, 3).map(r => (
                    <span key={r} className="text-[9px] bg-accent/10 text-accent px-1.5 py-0.5 rounded-full">{r}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function QuickMode() {
  const [goal, setGoal] = useState(null)
  const [plan, setPlan] = useState(null)

  const generate = () => { if (goal) setPlan(getQuickPlan(goal)) }
  const regenerate = () => { if (goal) setPlan(getQuickPlan(goal)) }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-muted font-semibold text-xs uppercase tracking-wider mb-3">Select Your Goal</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {GOALS.map(g => (
            <button
              key={g.id}
              onClick={() => setGoal(g.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all text-center ${
                goal === g.id
                  ? 'border-accent bg-accent/10 shadow-sm shadow-accent/20'
                  : 'border-border bg-card hover:border-muted'
              }`}
            >
              <span className="text-2xl">{g.emoji}</span>
              <span className={`text-xs font-semibold leading-tight ${goal === g.id ? 'text-accent' : 'text-muted'}`}>
                {g.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Button variant="primary" size="lg" disabled={!goal} onClick={generate} className="w-full">
        <Zap size={17} />
        Generate My 7-Day Plan
      </Button>

      {plan && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-muted font-semibold text-xs uppercase tracking-wider">Your 7-Day Plan</h3>
            <button
              onClick={regenerate}
              className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover font-medium transition-colors"
            >
              <RefreshCw size={14} />
              Regenerate
            </button>
          </div>
          <PlanGrid plan={plan} />
        </div>
      )}
    </div>
  )
}

function AdvancedMode() {
  const [condition, setCondition] = useState('none')
  const [dietary, setDietary]     = useState('')
  const [avoid, setAvoid]         = useState([])
  const [allergies, setAllergies] = useState([])
  const [plan, setPlan]           = useState(null)

  const toggleCheck = (list, setList, val) => {
    setList(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val])
  }

  const generate = () => setPlan(getAdvancedPlan({ condition, dietary, avoid, allergies }))

  const selectClass = 'w-full bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all'

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-muted mb-2">Health Condition</label>
          <select value={condition} onChange={e => setCondition(e.target.value)} className={selectClass}>
            {CONDITIONS.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-muted mb-2">Dietary Preference</label>
          <select value={dietary} onChange={e => setDietary(e.target.value)} className={selectClass}>
            {DIETARY.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm font-semibold text-muted mb-2">Nutrients to Limit</p>
          <div className="space-y-2">
            {NUTRIENTS.map(n => (
              <label key={n} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={avoid.includes(n)}
                  onChange={() => toggleCheck(avoid, setAvoid, n)}
                  className="w-4 h-4 accent-[#00C2A8] rounded"
                />
                <span className="text-sm text-muted group-hover:text-foreground capitalize transition-colors">{n.replace('-', ' ')}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-muted mb-2">Allergies</p>
          <div className="space-y-2">
            {ALLERGENS.map(a => (
              <label key={a} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={allergies.includes(a)}
                  onChange={() => toggleCheck(allergies, setAllergies, a)}
                  className="w-4 h-4 accent-[#00C2A8] rounded"
                />
                <span className="text-sm text-muted group-hover:text-foreground capitalize transition-colors">{a}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <Button variant="primary" size="lg" onClick={generate} className="w-full">
        <Settings2 size={17} />
        Generate Advanced Plan
      </Button>

      {plan && (
        <div className="space-y-4">
          <h3 className="text-muted font-semibold text-xs uppercase tracking-wider">Your Personalized Plan</h3>
          <PlanGrid plan={plan} />
        </div>
      )}
    </div>
  )
}

export default function MealPlanner() {
  const [tab, setTab] = useState('quick')

  return (
    <AppLayout title="Meal Planner">
      {/* Mode tabs */}
      <div className="flex gap-1 bg-card border border-border rounded-xl p-1 w-fit mb-6 shadow-sm">
        <button
          onClick={() => setTab('quick')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            tab === 'quick'
              ? 'bg-accent text-white shadow-sm'
              : 'text-muted hover:text-foreground'
          }`}
        >
          <Zap size={15} />
          Quick Plan
        </button>
        <button
          onClick={() => setTab('advanced')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            tab === 'advanced'
              ? 'bg-accent text-white shadow-sm'
              : 'text-muted hover:text-foreground'
          }`}
        >
          <Settings2 size={15} />
          Advanced Plan
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm p-4 md:p-6">
        {tab === 'quick' ? <QuickMode /> : <AdvancedMode />}
      </div>
    </AppLayout>
  )
}
