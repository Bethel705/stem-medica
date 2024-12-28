import React from 'react'

const News = () => {
  return (
    <div className='bg-blue-400 justify-center '>
      <div className=' flex justify-between max-w-[1000px] mx-auto h-[20vh] items-center mt-50'>
        <div className='gap-15'>
          <h1 className=' text-3xl font-bold text-black-80'>vaccancy anouncment</h1>
          <p className=' text-md text-black-50'>we are not accepting new stuf curuntly!</p>

        </div>
        <div>
          <button class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Learn More
            </button>

        </div>
      </div>
      
    </div>
  )
}

export default News