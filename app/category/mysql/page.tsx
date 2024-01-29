import Teasercard from '@/components/Teasercard'
import React from 'react'
import { data } from "@/data/data.json";

const page = () => {
  const mysqldata= data.filter(item=> item.techname == 'MySQL')
  
  
  
  
  
    
  
  return (
    <div className='flex flex-wrap pl-14'>{
      mysqldata.map((item, index) => (
        <Teasercard
          key={index}
          id={item.id}
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