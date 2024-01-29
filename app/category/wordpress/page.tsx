import Teasercard from '@/components/Teasercard'
import React from 'react'
import { data } from "@/data/data.json";

const page = () => {

  const wordpressData = data.filter(item=>item.techname == 'WordPress')
  
    
  
  return (
    <div className='flex flex-wrap pl-14'>{
      wordpressData.map((item, index) => (
        <Teasercard
          key={index}
          id = {item.id}
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