export default function Button({ variant = 'primary', size = 'md', disabled, onClick, children, className = '', type = 'button' }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-accent hover:bg-accent-hover text-white',
    outline: 'border border-accent text-accent hover:bg-accent/10 bg-transparent',
    ghost:   'bg-transparent text-muted hover:text-foreground hover:bg-foreground/5',
    danger:  'bg-danger hover:bg-red-600 text-white',
  }

  const sizes = {
    sm: 'text-sm px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
