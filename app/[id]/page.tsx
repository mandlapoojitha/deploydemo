"use client"
import Blogcard from '@/components/Blogcard'
import Latestposts from '@/components/Latestposts'
import React from 'react'

const page = ({params} : any) => {
   
  return (
    <div className='w-full min-h-96  flex justify-start gap-20 items-start pt-10 pb-10 pl-40'>
         <Latestposts/>
        <Blogcard id={params.id}></Blogcard>

    </div>
  )
}

export default page