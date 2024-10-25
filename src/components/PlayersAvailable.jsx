import React from 'react'
import AvailablePlayer from './AvailablePlayer'

export default function PlayersAvailable({availablePlayers}) {
    console.log("player", availablePlayers);
    return (
    <div className='grid md:grid-cols-2 gap-5 lg:grid-cols-3'>
        {
            availablePlayers.map(playerAvailable=><AvailablePlayer key={playerAvailable.id} playerAvailable={playerAvailable}></AvailablePlayer>)
        }
    </div>
  )
}
