import React from "react";

export default function AvailablePlayer({ playerAvailable,handleChoosePlayer }) {
  const {
    player_name,
    country,
    player_type,
    player_rating,
    batting_style,
    bowling_style,
    id,
    price,
    player_image,
  } = playerAvailable;
  return (
    <div>
      <div className="card bg-base-100 p-6 border">
        <div>
          <img src={player_image} className="rounded-2xl w-96 h-60 "/>
        </div>
        <div className=" mt-6 space-y-2">
          <h2 className="card-title font-semibold text-xl text-primary-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            {player_name}
          </h2>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
              {country}
            </div>
            <div className="text-primary-text bg-primary-text/5 px-4 py-2 rounded-md">
                <p>{player_type}</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between"><h2 className="text-primary-text font-bold">Rating</h2><p className="text-xs font-normal">{player_rating}+</p></div>
          <div className="flex justify-between text-primary-text font-semibold"><h3>Batting Type</h3><h3 className="text-xs font-normal">{batting_style}</h3></div>
          <div className="flex justify-between text-primary-text font-semibold"><h3>Bowling Type</h3><h3 className="text-xs font-normal">{bowling_style}</h3></div>
          <div className="flex text-primary-text font-semibold justify-between items-center">
            <h2>Price:${price}</h2>
            <button className='btn border rounded-xl bg-yellow-400 font-bold hover:bg-primary-bg/70 hover:text-primary-text' onClick={()=>handleChoosePlayer(playerAvailable)}>Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
}
