import React from 'react'
import Typed from 'react-typed';
const Hero = () => {
    return (
        <div className='text-white'>
            <div className="max-w-[800px] mt-[-96px]  w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className='text-[#00df9a] uppercase font-bold p-2'>
                    Growing with data analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>
                    Grow with data.
                </h1>
             
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl py-4 font-bold'>
                        Fast,flexible financing for
                    </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-gray-500 text-xl font-bold md:pl-4 pl-2'
                        strings={['BTB', 'BTC', 'SASS']}
                        typespeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <div>
                    <p className='md:2xl text-xl font-bold  text-gray-500'>
                        Monitor your data analytics to increase revenue for BTB,BTC,& SASS platforms.
                    </p>
                    <button className='bg-[#00df9a] py-3 w-[200px] text-black rounded-md font-medium my-6 mx-auto '>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero
