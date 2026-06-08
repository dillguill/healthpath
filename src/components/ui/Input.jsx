export default function Input({ label, error, type = 'text', placeholder, value, onChange, id }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-muted">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-surface border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-faint focus:outline-none focus:ring-2 transition-all ${
          error
            ? 'border-danger focus:ring-danger/30'
            : 'border-border focus:border-accent focus:ring-accent/20'
        }`}
      />
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  )
}
