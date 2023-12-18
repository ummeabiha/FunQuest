import React from 'react'
import { Link } from "react-router-dom";
import funQuestLogo from '../assets/funquest-logo.png'
import phdIcon from '../assets/phdicon.png'
import msgIcon from '../assets/message-icon.png'
import paint from '../assets/paint.png'
import homeIcon from '../assets/home-icon.png'
const Navbar = () => {
  return (
    <div>
      

<nav className="bg-transparent border-gray-200 dark:bg-gray-900 absolute top-0 w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-10">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white flex">
          <img src={funQuestLogo} alt="" className='w-44' />
          
        </span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  idth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto mr-10" id="navbar-default ">
      <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
        <li className='flex justify-center items-center'>
        <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
      <img src={homeIcon} alt="" className='w-7 h-7'/>
        </li>
        <li className='flex justify-center items-center'>
          <Link to="/game" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
          <img src={msgIcon} alt="" className='w-7 h-7'/>

        </li>
        <li className='flex justify-center items-center'>
          <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
          <img src={phdIcon} alt="" className='w-7 h-7'/>

        </li>
        <li className='flex justify-center items-center'>
          <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
          <img src={paint} alt="" className='w-7 h-7'/>

        </li>
      
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
