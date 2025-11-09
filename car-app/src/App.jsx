import { useMemo, useState } from 'react';
import './App.css';
import './styles/Header.css';
import Carousel from './components/Carousel.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Preferences from './pages/Preferences.jsx';
import Match from './pages/Match.jsx';


import modelsCsv from './data/toyota_models_2025.csv?raw';


function parseCsv(raw) {
  if (!raw) return [];
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return [];
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).map(line => {
    const cols = line.split(',');
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = cols[i] ? cols[i].trim() : '';
    });
    return obj;
  });
}


function App() {
  const models = useMemo(() => parseCsv(modelsCsv), []);
  const [page, setPage] = useState('home'); // 'home' | 'preferences' | 'match'


  return (
    <>
      <Header active={page} onNavigate={setPage} />


      <main>
        {page === 'home' && <Home onNavigate={setPage} />}
<<<<<<< HEAD
        {page === 'preferences' && <Preferences models={models}/>}
=======
        {page === 'preferences' && <Preferences />}
>>>>>>> 3346e5fe77a805de9b25a4b9004aaa14826932c5
        {page === 'match' && <Match models={models} />}
      </main>
    </>
  );
}


export default App;


