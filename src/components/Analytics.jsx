import React from 'react'
import Laptop from "../assets/laptop.jpg"
const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='font-bold text-[#00df9a]'>
                        DATA ANALYTICS DASHBOARD</p>
                    <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py2'>
                        Manage Data Analytics Centrally</h1>
                    <p className='py-2'>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Obcaecati odio quas
                        similique eaque mollitia quae dolore perspiciatis,
                         beatae autem, rerum illum repellendus
                        nesciunt odit hic cumque, libero provident
                        sapiente nisi.</p>
                    <button className='bg-black py-3 w-[200px]  text-[#00df9a] rounded-md font-medium my-6 mx-auto md:mx-0 '>
                        Get Started
                    </button>
                </div>
                 
            </div>

        </div>
    );
};
    export default Analytics;