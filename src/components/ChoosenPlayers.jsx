import React from "react";
import ChoosenPlayer from "./ChoosenPlayer";

export default function ChoosenPlayers({ choosenPlayers,handleToggle,handleRemovePlayer}) {
  return (
    <div className="space-y-3">
      {choosenPlayers.map((player) => (
        <ChoosenPlayer handleRemovePlayer={handleRemovePlayer} key={player.id} player={player}/>
      ))}
        <button onClick={()=>handleToggle('available-button')} className="btn rounded-2xl shadow-md bg-primary-bg text-primary-text font-bold border-white border-4 outline outline-gray-400">Choose More Player</button>
    </div>
  );
}
