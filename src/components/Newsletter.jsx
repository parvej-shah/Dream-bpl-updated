import React from 'react'
import bgShadow from '../assets/images/bg-shadow.png'
export default function Newsletter() {
  return (
      <div className='p-6  outline outline-white bg-white/15  backdrop-filter backdrop-blur-sm bg-opacity-15  mx-auto max-w-[80%] rounded-xl mt-10'>
        <div className='relative h-80 border border-primary-text/10 rounded-xl bg-white'>
        <img src={bgShadow} className='h-full w-full rounded-xl' alt="" />
          <div className='absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 mx-auto text-center flex flex-col items-center space-y-2'>
          <h2 className='text-primary-text font-bold text-3xl'>Subscribe to our newsletter</h2>
          <p>Get the latest updates and news right in your inbox!</p>
          <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
              />
              <button  className="font-bold btn bg-gradient-to-r from-[#d48cb5] to-[#f0c454]">Subscribe</button>
          </div>
            </div>
        </div>
      </div>
  )
}
