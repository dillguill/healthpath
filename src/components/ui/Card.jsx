export default function Card({ children, className = '', hover = false }) {
  return (
    <div className={`bg-panel border border-border rounded-xl p-6 ${hover ? 'hover:border-accent transition-colors duration-200' : ''} ${className}`}>
      {children}
    </div>
  )
}
