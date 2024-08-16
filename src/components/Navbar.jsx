import React from 'react'
import { NavLink } from 'react-router-dom'
import news from '../assets/news-broadcast.svg'

function Navbar() {
  return (
    <div className='flex flex-col lg:flex-row justify-around items-center  bg-neutral-900 text-neutral-200 h-24 lg:h-14  '>
         <div className="flex">
            <img className="w-8 mr-3" src={news} alt=""/>
         <h1>NewsApp</h1>
            </div>

        <ul className='flex justify-around items-center text-sm lg:text-base'>
       
       <li className="m-2">
           <NavLink className="nav-link"  to="/Time">Time</NavLink>
      </li>
      <li className="m-2">
           <NavLink className="nav-link"  to="/Abc-news">ABC-News</NavLink>
      </li>
      <li className="m-2">
           <NavLink className="nav-link"  to="/Wallstreet">Wallstreet</NavLink>
      </li>
      <li className="m-2">
           <NavLink className="nav-link"  to="/Wired">Wired</NavLink>
      </li>
      <li className="m-2">
           <NavLink className="nav-link"  to="/BBC-news">BBC News</NavLink>
      </li>
      
      
      
       
   </ul>
    </div>
  )
}

export default Navbar
