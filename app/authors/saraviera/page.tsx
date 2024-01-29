import Teasercard from '@/components/Teasercard'
import React from 'react'
import { data } from "@/data/data.json";

const page = () => {
   const sdata = data.filter(item=>item.authorname == 'Sara viera')  
  
  return (
    <div className='flex flex-wrap pl-14'>{
      sdata.map((item, index) => (
        <Teasercard
          key={index}
          id ={item.id}
          techname={item.techname}
          blogname={item.blogname}
          authorname={item.authorname}
          color={item.color}
        />
      ))}
      
     
    </div>
   
  )
}

export default page