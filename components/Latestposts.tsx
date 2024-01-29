import React from 'react'

const Latestposts = () => {
  return (
    <div className='w-1/6 min-h-9  rounded shadow-md flex flex-col justify-center items-center'>
        <p className=' w-full py-4 px-4 text-xl font-bold bg-gradient-to-r from-rose-100 to-teal-100 rounded'>Latestposts</p>
        <div className='flex flex-col justify-start items-start w-full py-2 px-4 border-b-1 border-black mx-1'>
            <p className='font-semibold text-base'>WordPress</p>
            <p>WordPress SEO Strategies</p>

        </div>
        <div className='flex flex-col justify-start items-start  w-full py-2 px-4 border-b-1 border-black'>
            <p className='font-semibold text-base'>HTML</p>
            <p>Web Accessibility with HTML</p>

        </div>
        <div className='flex flex-col justify-start items-start  w-full py-2 px-4 border-b-1 border-black'>
            <p className='font-semibold text-base'>Java script</p>
            <p>Async Programming in JavaScript</p>

        </div>
        <div className='flex flex-col justify-start items-start  w-full py-2 px-4 border-b-1 border-black'>
            <p className='font-semibold text-base'>PHP</p>
            <p>Secure Coding Practices in PHP</p>

        </div>
        <div className='flex flex-col justify-start items-start  w-full py-2 px-4 border-b-1 border-black'>
            <p className='font-semibold text-base'>css</p>
            <p>CSS Grid Layout Explained</p>

        </div>
    </div>
  )
}

export default Latestposts