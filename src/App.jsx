import { useState,useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PlayersAvailable from './components/PlayersAvailable';
import Footer from './components/Footer';
import ChoosenPlayers from './components/ChoosenPlayers';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Newsletter from './components/Newsletter';


function App() {
  const [availablePlayers,setAvailablePlayers] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=>setAvailablePlayers(data))
    },[])
  const [credit,setCredit] = useState(0);
  function handleFreeCredit(){
    setCredit(credit+5000000);
    toast.success("Credit Added",{theme:'dark',position:'top-center'})
  }
  const [choosenPlayers,setChoosenPlayers] = useState([]);
  function handleRemovePlayer(player){
    toast.success("Player Removed",{theme:'colored',position:'top-center'});
    const newChoosenPlayer = choosenPlayers.filter(playerRemove=>playerRemove.id!==player.id);
    setChoosenPlayers(newChoosenPlayer);
  }
  function handleChoosePlayer(player){
    if(choosenPlayers.length<6){
      const isPlayerChoosen = choosenPlayers.find(playerfound=>playerfound.id==player.id);
      if(!isPlayerChoosen){
        if(credit>=player.price){
        setCredit(credit-player.price);
        setChoosenPlayers([...choosenPlayers,player]);
        toast.success(`${player.player_name} Added to your squad!`,{position:'top-center'})
        }
        else{
          toast.error("You don't have enough money",{position:'top-center',theme:'colored'})
        }
      }
      else{
        toast.warning(`${player.player_name} already choosen`,{position:'top-center'})
      }
    }
    else{
      toast.error("Your Squad is Full",{position:'top-center'})
    }
  }
  const [toggleState,setToggleState] = useState({type:'available-button'});
  function handleToggle(buttonType){
    if(buttonType==='available-button'){
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

  const activeButton = 'join-item btn  hover:bg-primary-bg/70 hover:text-primary-text bg-primary-bg text-primary-text font-bold';
  const deActiveButton = 'join-item btn  font-bold hover:bg-primary-bg/70 hover:text-primary-text';
  return (
    <div className='bg-white'>
      <ToastContainer/>
      {/* header */}
      <div className=' bg-white w-full'>
      <div className='w-full fixed top-0 z-20 bg-white '>
      <header className='container mx-auto '>
        <nav>
          <Header credit={credit}/>
        </nav>
      </header>
      </div>
      </div>
      
      {/* hero section */}
      <div className='mt-28 container mx-auto'>
        <Hero handleFreeCredit={handleFreeCredit}/>
      </div>
      {/* main section */}
      <main className='container mx-auto'>
        <section className='flex justify-between my-10 z-10 sticky top-24 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10'>
          <h3 className='text-3xl font-bold text-primary-text'>{toggleState.type=='available-button'?"Available Players":`Selected Player ${choosenPlayers.length}/6`}</h3>
          <div className='join'>
            <button className={`${toggleState.type=='available-button'?activeButton:deActiveButton}`} onClick={()=>handleToggle('available-button')}> Available </button>
            <button className={`${toggleState.type=='choosen-button'?activeButton:deActiveButton}`} onClick={()=>handleToggle('choosen-button')}>Selected ({choosenPlayers.length})</button>
          </div>
        </section>
        <section>
          { toggleState.type=='available-button'?
            <PlayersAvailable handleChoosePlayer={handleChoosePlayer} availablePlayers={availablePlayers}></PlayersAvailable>:<ChoosenPlayers handleToggle={handleToggle} handleRemovePlayer={handleRemovePlayer} choosenPlayers={choosenPlayers}/>}
        </section>
      </main>
      <div className='-mb-48 '>
      <Newsletter/>
      </div>
      <footer className=''>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
