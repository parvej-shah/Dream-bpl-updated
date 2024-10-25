import React from "react";
import heroLogo from "../assets/images/banner-main.png";
import bannerBg from "../assets/images/bg-shadow.png";
export default function Hero({handleFreeCredit}) {
  return (
    <div className="hero bg-primary-text rounded-3xl mt-2">
    <div className="w-full h-full"><img className="h-full w-full rounded-3xl" src={bannerBg} alt="" /></div>
      <div className="hero-content text-center py-16">
        <div className="max-w-4xl">
          <div className="w-full flex justify-center mb-4
          "><img src={heroLogo} alt="" className="h-52 w-64"/></div>
          <h1 className="text-4xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="py-6 text-white/70 font-medium text-2xl">
          Beyond Boundaries Beyond Limits
          </p>
          <button onClick={handleFreeCredit} className="btn rounded-2xl shadow-md bg-primary-bg text-primary-text font-bold border-primary-text border-4 outline outline-primary-bg">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
}
