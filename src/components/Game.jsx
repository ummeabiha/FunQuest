import React from 'react'
import '../App.css'
import { FaAngleRight } from "react-icons/fa";

import qmark from '../assets/qmark.png'
import nerd from '../assets/nerd.png'
import study from '../assets/groupstudy.png'

const Game = () => {
    return (
        <div className='overflow-hidden'>
            {/* div 2 */}
            <div className='D-gamebg1 h-auto sm:h-screen'>
                <div className='flex flex-col  sm:flex-row sm:mx-auto pt-32 sm:pt-20 space-y-8  items-center justify-center w-full sm:w-[80%]'>
                    <div className='flex-col sm:justify-start sm:items-start flex w-[80%] space-y-8 sm:space-y-3 justify-center items-center'>
                        <h1 className='text-[50px] D-lazydog    font-bold text-center'>GAMES</h1>
                        <p className='text-xl text-center sm:text-start D-futura'>These courses are designed to be interactive, often using games, puzzles, and visual aids to engage young learners and foster a strong understanding of mathematical concepts. </p>
                        <button className='D-glacialFont bg-rose-600 text-white py-2 px-5 rounded-md text-lg sm:text-2xl mt-4 mx-auto sm:mx-0 '>Explore</button>

                    </div>
                    <div className='flex justify-end w-full'>
                        <img src={qmark} alt="" className='w-32 sm:w-56' />
                    </div>

                </div>
            </div>

            {/* div 2 */}
            <div className='D-gamebg2 h-auto  pt-10 sm:py-20' >
                <div className='flex sm:flex-row flex-col space-y-3 justify-center sm:justify-center sm:space-x-56  items-center sm:w-[100%] sm:mx-auto sm:pl-14'>
                    <div className='flex flex-col justify-start items-center sm:items-start space-y-4 '>
                    <img src={nerd} alt="" className='w-52 sm:w-60' />
                    <p className='text-2xl sm:text-3xl D-lazydog'>my name is :</p>
                    <input type="text" placeholder='Enter name' className='D-lazydog rounded-md bg-gray-200 p-2 text-xl' />
                    <button>
                    <FaAngleRight className='h-14 w-10' />
                    </button>
                    </div>
                    <img src={study} alt="" className='w-[90%] sm:w-[50%]' />

                </div>
            </div>
        </div>
    )
}

export default Game
