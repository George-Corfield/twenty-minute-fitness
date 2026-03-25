interface BottomNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'builder', label: 'Builder', icon: 'add_circle' },
  { id: 'workout', label: 'Workout', icon: 'timer' },
  { id: 'history', label: 'History', icon: 'history' },
]

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 px-4 pb-4 z-50 bg-[#262626]/70 backdrop-blur-lg rounded-t-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-around items-center h-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={
                isActive
                  ? 'flex flex-col items-center text-primary scale-110 drop-shadow-[0_0_8px_rgba(133,173,255,0.4)] transition-all'
                  : 'flex flex-col items-center text-zinc-500 opacity-60 hover:opacity-100 active:scale-90 transition-all'
              }
            >
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {tab.icon}
              </span>
              <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
