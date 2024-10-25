import { useState,useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PlayersAvailable from './components/PlayersAvailable';
import Footer from './components/Footer';

function App() {
  const [availablePlayers,setAvailablePlayers] = useState([]);
  const [choosenPlayers,setChoosenPlayers] = useState([]);
  
    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=>setAvailablePlayers(data))
    },[])
  function handleChoosePlayer(player){
    console.log("player will be choosen Soon")
    if(choosenPlayers.length<6){
      setChoosenPlayers([...choosenPlayers,player]);
    }
    else{
      alert("Player Limit exists")
    }
  }
  const [toggleState,setToggleState] = useState({type:'available-player'});
  function handleToggle(buttonType){
    if(buttonType==='available-player'){
      setToggleState({
        type:'available-button'
      })
    }
    else{
      setToggleState({
        type:'choosen-button'
      })
    }
  }
  const activeButton = 'btn rounded-none hover:bg-primary-bg/70 hover:text-primary-text bg-primary-bg text-primary-text font-bold';
  const deActiveButton = 'btn rounded-none font-bold hover:bg-primary-bg/70 hover:text-primary-text';
  return (
    <div className=''>
      {/* header */}
      <div className='container mx-auto'>
      <header className='fixed top-0 container mx-auto z-10'>
        <nav>
          <Header/>
        </nav>
      </header>
      </div>
      
      {/* hero section */}
      <div className='mt-28 container mx-auto'>
        <Hero/>
      </div>
      {/* main section */}
      <main className='container mx-auto'>
        <section className='flex justify-between my-10 z-10 sticky top-24 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10'>
          <h3 className='text-3xl font-bold text-primary-text'>Available Players</h3>
          <div className=''>
            <button className={`${toggleState.type=='available-button'?activeButton:deActiveButton} ${"border border-r-0 rounded-lg rounded-r-none"}`} onClick={()=>handleToggle('available-player')}> Available </button>
            <button className={`${toggleState.type=='choosen-button'?activeButton:deActiveButton} ${"border border-l-0 rounded-lg rounded-l-none"}`} onClick={()=>handleToggle('choosen-button')}>Selected ({choosenPlayers.length})</button>
          </div>
        </section>
        <section>
          <PlayersAvailable handleChoosePlayer={handleChoosePlayer} availablePlayers={availablePlayers}></PlayersAvailable>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
