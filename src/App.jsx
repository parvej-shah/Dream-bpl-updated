import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <div className='container mx-auto'>
      <header >
        <nav>
          <Header/>
        </nav>
        {/* hero section */}
        <div>
          <Hero/>
        </div>
      </header>
    </div>
  )
}

export default App
