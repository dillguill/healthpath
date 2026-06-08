import { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function AppLayout({ title, children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-sidebar">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex-1 flex flex-col md:ml-60 min-h-screen">
        <TopBar title={title} onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 bg-content p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
