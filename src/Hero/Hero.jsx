import React from 'react'
import PyBg from '../assets/pybg.jpg'

function Hero() {
  return (
    <div>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <nav class="flex px-4 justify-between items-center">
              <div class="text-4xl font-bold">
                Papaya<span class="text-green-700">.</span>
              </div>
              <div>
                <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8" />
              </div>
            </nav>
            <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div class="w-full">
                <h1 class="text-4xl lg:text-6xl font-bold">Predict <span class="text-green-700">Papaya</span> Disease With A Single Click!</h1>
                <div class="w-20 h-2 bg-green-700 my-4"></div>
                <p class="text-xl mb-10">Discover the future of papaya farming with our cutting-edge disease prediction technology. Stay ahead, save crops, and harvest success!</p>
                <button class="bg-green-500 text-white text-2xl font-bold px-4 py-2 rounded shadow">PREDICT!</button>
              </div>
            </header>
          </div>
        </div>
        <img src={PyBg} alt="Leafs" class="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
      </div>
    </div>
  )
}

export default Hero