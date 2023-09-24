import React from 'react'
import Single from '../assets/single.jpg'
import Double from '../assets/double.jpg'

const Cards = () => {
    return (
      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="mx-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 items-center mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt=""
            />
            <h2 className="font-bold text-2xl text-center py-8">Single User</h2>
            <p className="font-bold text-4xl text-center">$149</p>
            <div className="font-bold text-center">
              <p className="py-2 border-b mx-8 mt-8 ">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 User Allowed</p>
              <p className="py-2 border-b mx-8">Send up to 2GB</p>

              <button className="bg-[#00df9a] py-3 ml-4 w-[200px]  text-black rounded-md font-medium mx-auto my-6 px-6">
                Start Trail
              </button>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col bg-gray-100 p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 items-center mx-auto mt-[-3rem] bg-transparent"
              src={Double}
              alt=""
            />
            <h2 className="font-bold text-2xl text-center py-8">Single User</h2>
            <p className="font-bold text-4xl text-center">$149</p>
            <div className="font-bold text-center">
              <p className="py-2 border-b mx-8 mt-8 ">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 User Allowed</p>
              <p className="py-2 border-b mx-8">Send up to 2GB</p>

              <button className="bg-black text-[#00df9a] py-3 ml-4 w-[200px] rounded-md font-medium mx-auto my-6 px-6">
                Start Trail
              </button>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 items-center py-2 mx-auto mt-[-3rem] bg-white"
              src={Double}
              alt=""
            />
            <h2 className="font-bold text-2xl text-center py-8">Single User</h2>
            <p className="font-bold text-4xl text-center">$149</p>
            <div className="font-bold text-center">
              <p className="py-2 border-b mx-8 mt-8 ">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 User Allowed</p>
              <p className="py-2 border-b mx-8">Send up to 2GB</p>

              <button className="bg-[#00df9a] py-3 ml-4 w-[200px]  text-black rounded-md font-medium mx-auto my-6 px-6">
                Start Trail
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cards;
