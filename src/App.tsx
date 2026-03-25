import { useState } from 'react'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Dashboard from './pages/Dashboard'
import Builder from './pages/Builder'
import Workout from './pages/Workout'
import History from './pages/History'

function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard')

  const renderPage = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />
      case 'builder': return <Builder />
      case 'workout': return <Workout />
      case 'history': return <History />
      default: return <Dashboard />
    }
  }

  return (
    <>
      <Header />
      {renderPage()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  )
}

export default App
