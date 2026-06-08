export default function Badge({ variant = 'info', children }) {
  const variants = {
    success: 'bg-success/15 text-success',
    warning: 'bg-warning/15 text-warning',
    info: 'bg-accent/15 text-accent',
    muted: 'bg-surface text-muted',
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
