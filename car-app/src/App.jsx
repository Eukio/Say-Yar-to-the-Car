import { useMemo, useState } from 'react'
import './styles/colors.css'
import './App.css'
import './styles/Header.css'
import Carousel from './components/Carousel.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Preferences from './pages/Preferences.jsx'
import Match from './pages/Match.jsx'

// Import the CSV as raw text using Vite's ?raw suffix
import modelsCsv from './data/toyota_models_2025.csv?raw'
import { PreferencesProvider } from './contexts/PreferencesContext.jsx'

function parseCsv(raw) {
  if (!raw) return []
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean)
  if (lines.length === 0) return []
  const headers = lines[0].split(',').map(h => h.trim())
  return lines.slice(1).map(line => {
    const cols = line.split(',')
    const obj = {}
    headers.forEach((h, i) => {
      obj[h] = cols[i] ? cols[i].trim() : ''
    })
    return obj
  })
}

function App() {
  const models = useMemo(() => parseCsv(modelsCsv), [])
  const [page, setPage] = useState('home') // 'home' | 'preferences' | 'match'

  return (
    <PreferencesProvider>
      <Header active={page} onNavigate={setPage} />

      <main>
        {/* Keep the carousel on the home/main area for now */}
        {page === 'home' && (
          <>
            <h1 style={{padding: '1rem'}}>Ignition</h1>
            <Carousel />
            <Home />
          </>
        )}

        {page === 'preferences' && <Preferences models={models}/>}

        {page === 'match' && <Match models={models} />}
      </main>
    </PreferencesProvider>
  )
}

export default App
