import React from 'react'
import coin from '../assets/images/doller1.png'
import logoNav from '../assets/images/logo.png'
export default function Header() {
  return (
    <div class="navbar justify-between bg-base-100 py-2">
    {/* navbar start */}
  <div class="">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-primary-text/70">
        <li><a>Home</a></li>
        <li><a>Fixture</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
      </ul>
    </div>
    <a class=""><img src={logoNav} alt="logo" className='w-20 h-20' /></a>
  </div>
  {/* navbar end */}
  <div>
  <div class="hidden lg:flex">
    <ul class="menu menu-horizontal px-1 text-primary-text/70">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
  </div>
  <div class="">
    <a class="flex gap-1 border p-2 rounded-md text-primary-text font-semibold">{}0 Coin <img src={coin} alt="" /></a>
  </div>
  </div>
</div>
  )
}
