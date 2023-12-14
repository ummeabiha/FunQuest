import React from 'react'
import bear from '../assets/sillybear.png'
import astronaut from '../assets/astronut.png'
import octupus from '../assets/octupus.png'
import penguin from '../assets/penguin.mp4'
import penguinn from '../assets/penguin.png'
import owl from '../assets/owl.png'
import mouse from '../assets/mouse.png'
import animals from '../assets/animal-kingdom.png'
import Footer from './footer'


const Home = () => {
  return (
    <>
      {/* div 1 */}
      <div className='D-homebg1 h-screen pt-16'>
        <div className='flex ml-32 mr-5 justify-between items-center w-auto'>
          {/* learn and play div */}
          <div className=' flex-col w-[45%] '>
            <h1 className='bg-purple-400 D-glacialFont rounded-md w-max text-white text-3xl font-bold py-2 px-3'>
              WELCOME TO FUNQUEST
            </h1>
            <h1 className='text-4xl my-4 D-lazydog'>LEARN & PLAY !</h1>
            <p className='text-2xl D-futura'>We work everyday to build the foundations for  amazing futures. Both for the child and for our community .</p>

            <button className='D-glacialFont bg-rose-600 text-white py-2 px-5 rounded-md text-2xl mt-4'>Read More</button>
          </div>
          {/* bear div */}
          <div className='' >
            <img src={bear} alt="" width={500} />
          </div>
        </div>
      </div>
      {/* div 2 */}
      <div className='D-homebg2 h-auto pt-10 py-10  '>
        {/* <video autoPlay muted loop>
          <source src={snowfall} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className='D-cgirls ml-16 mx-auto text-center text-4xl font-semibold mt-2 '>
          Learn With Us
        </div>
        <div className='flex justify-center space-x-24 items-center w-full  my-5'>

          <div className='flex-col flex space-y-4 items-center justify-center w-[30%] '>
            <img src={astronaut} alt="" width={400} />
            <h1 className='text-3xl font-bold text-center D-pacific'>SCI-WOW</h1>
            <p className='text-xl text-center D-glacialFont'>WHERE CUROSITY COLLIDES WITH DISCOVERY </p>
            <button className='D-glacialFont py-2 px-7 text-2xl rounded-md text-white bg-rose-600'>EXPLORE</button>
          </div>

          <div className='flex-col flex space-y-4 items-center justify-center w-[30%] '>
            <img src={octupus} alt="" width={400} />
            <h1 className='text-3xl font-bold text-center D-pacific'>MATH MARVEL</h1>
            <p className='text-xl text-center D-glacialFont'>THRILLING TALE OF MATHEMATICAL MASTERY</p>
            <button className='D-glacialFont py-2 px-7 text-2xl rounded-md text-white bg-rose-600'>EXPLORE</button>
          </div>

        </div>
      </div>

      {/* div 3 */}
      <div className='D-homebg3 h-screen pt-16'>
        <div className='flex flex-col items-center '>
          <div className='D-cgirls text-3xl text-center font-bold'>
            GAME GALAXY
          </div>
          <div className='D-glacialFont mx-auto text-center text-xl mt-4 mb-10'>
            INTERACTIVE GAMES FOR ENHANCED LEARNING
          </div>
          <div className='flex  w-[90%] space-x-10 justify-center items-center'>
            <div className='w-[30%] flex-col items-center  p-5 pb-7 border-2  D-bgopacityseablue border-gray-600 rounded-3xl'>
              <img src={penguinn} alt="" className=' h-56' />
              {/* <video autoPlay muted loop width={800}> 
                <source src={penguin}   type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <h1 className='mt-5 text-center text-[40px] D-sacram'>icy penguin stack</h1>
            </div>

            <div className='w-[30%] flex-col items-center   p-5 pb-7 border-2  D-bgopacityyellow border-gray-600 rounded-3xl'>
              <img src={owl} alt="" width={167} className='mx-auto' />
              {/* <video autoPlay muted loop width={800}> 
                <source src={penguin}   type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <h1 className='mt-5 text-center text-[40px] D-sacram'>wise lab owls</h1>
            </div>

            <div className='w-[30%]  p-5 pb-7 border-2  D-bgopacitypink border-gray-600 rounded-3xl'>
              <img src={mouse} alt="" width={215} className='mx-auto' />
              {/* <video autoPlay muted loop width={800}> 
                <source src={penguin}   type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <h1 className='mt-5 text-center text-[40px] D-sacram'>math magician mousy</h1>
            </div>
          </div>
        </div>

         
      </div>
       {/* div 4 */}
       <div className='D-homebg4 h-screen pt-20 '>
              <div className='flex  h-auto   w-[95%] mx-auto space-x-2 justify-center items-center'>
                <div className='w-[45%]  marker:'>
                  <img src={animals} alt="" width={500} />
                </div>
                <div className='w-[45%] flex flex-col items-center justify-start h-96 '>
                  <h1 className='text-4xl font-semibold D-cgirls'>Art Attack !</h1>
                  <p className='text-2xl  mt-5 text-slate-800 D-futura'>Welcome to Art Attack, where creativity thrives! Join us in exploring a world of vibrant expression, unleashing your inner artist through exciting mediums. From lively canvas sessions to dynamic craft escapades, let the Art Attack adventure begin – turning ordinary moments into extraordinary expressions of creativity!</p>
                  <button className='D-glacialFont bg-rose-600 text-white py-2 px-7 mt-7 rounded-md text-2xl '>Discover</button>
                </div>
                

                
              </div>
        </div>
        <Footer/>





    </>


  )
}

export default Home
