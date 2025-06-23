import React from 'react'
import Ima from '../../assets/dicee.jpg'
import Image from 'next/image'
const Home = ({startgame}) => {
    return (
        <>
        <div className='w-full bg-black h-screen flex items-center justify-center gap-8'>
            <div className='ml-16 max-md:hidden  '><Image className='border-2  border-spacing-4 border-slate-950 shadow-2xl' src={Ima} alt="Bacground Image" width={300} /></div>
            <div className='flex flex-col  gap-12'>
                <h1 className='text-7xl text-white border-b-4 border-slate-800 shadow-2xl font-bold'>DICE GAME </h1>
                <div className=' flex justify-end max-md:justify-center'>
                    <button className='p-4 px-6 bg-gradient-to-r from-amber-700 to-blue-700 text-2xl font-extrabold rounded-2xl shadow-2xl border-sky-600 border-2 ' type="button" onClick={startgame}>PLAY NOW</button>
                </div>

            </div>

        </div>
        </>
    )
}

export default Home
