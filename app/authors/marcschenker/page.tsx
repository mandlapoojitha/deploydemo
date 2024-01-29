import Teasercard from '@/components/Teasercard'
import React from 'react'
import { data } from "@/data/data.json";

const page = () => {
   const mdata = data.filter(item=>item.authorname == 'Marc schenker')  
  
  return (
    <div className='flex flex-wrap pl-14'>{
      mdata.map((item, index) => (
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