import React from "react";
import ChoosenPlayer from "./ChoosenPlayer";

export default function ChoosenPlayers({ choosenPlayers }) {
    
  return (
    <div className="space-y-3">
      {choosenPlayers.map((player) => (
        <ChoosenPlayer key={player.id} player={player}/>
      ))}
    </div>
  );
}
