import { useState,useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PlayersAvailable from './components/PlayersAvailable';

function App() {
  const [availablePlayers,setAvailablePlayers] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=>setAvailablePlayers(data))
    },[])
    console.log("app:",availablePlayers)
  return (
    <div className='container mx-auto'>
      {/* header */}
      <header className='fixed top-0 container mx-auto z-10'>
        <nav>
          <Header/>
        </nav>
      </header>
      {/* hero section */}
      <div className='mt-28'>
        <Hero/>
      </div>
      {/* main section */}
      <main>
        <section className='flex justify-between mt-10'>
          <h3 className='text-3xl font-bold text-primary-text'>Available Players</h3>
          <div>
            <button className='btn rounded-r-none border border-r-0 rounded-xl hover:bg-primary-bg/70 hover:text-primary-text bg-primary-bg text-primary-text font-bold'> Available </button>
            <button className='btn rounded-l-none border border-l-0 rounded-xl font-bold hover:bg-primary-bg/70 hover:text-primary-text'>Selected (0)</button>
          </div>
        </section>
        <section>
          <div>Kotha ko</div>
          <PlayersAvailable></PlayersAvailable>
        </section>
      </main>
    </div>
  )
}

export default App
