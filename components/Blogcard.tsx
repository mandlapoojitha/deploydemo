import React from 'react'
import { data } from "@/data/data.json";

const Blogcard = (props :any) => {
  const  bdata = data.filter(item=>item.id == props.id)
  const cardStyle={
    backgroundColor : props.color
  }

  return (
    <>
    {
      bdata.map((item, index) => (
        <div className='w-1/2 min-h-72  flex flex-col justify-start items-center shadow-lg rounded'>
        <div className="header w-full flex flex-col justify-start items-start bg-gradient-to-r from-blue-200 to-cyan-200 pt-10 pl-16 pb-10 rounded">
            <p className='text-xl font-bold'>{item.techname}</p>
            <p className='text-3xl font-extrabold mt-4'>{item.blogname}</p>
            <p  className='text-xl font-bold mt-4'>{item.authorname}</p>
          
        </div>
        <div className="body w-full pt-10 pl-16 pb-10 pr-16 text-base font-medium">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, culpa enim? Dolores maxime soluta assumenda, similique beatae voluptates, perspiciatis atque nostrum reprehenderit perferendis et laudantium quas incidunt optio, dolorum ab.
            Voluptates quidem blanditiis doloremque corporis reprehenderit minus quaerat consectetur, velit repellendus quae suscipit voluptatibus? Tempora quos recusandae velit deserunt est facilis, libero sit nam necessitatibus aliquid sunt quam, nobis aliquam.
            Velit voluptatem expedita atque sequi dolores consequuntur, pariatur ea, aspernatur nihil magni in nostrum reprehenderit eius sit cumque veritatis et inventore accusamus distinctio quos aliquid dicta modi nobis. Consequuntur, quam.
            Reiciendis incidunt similique dicta, dolores, perspiciatis inventore repellat ad debitis natus nulla aut perferendis quidem sapiente aperiam nemo. Molestiae dolores dicta nesciunt molestias, officiis voluptates autem amet unde nemo repudiandae!
            Mollitia dicta culpa, consequatur quasi facere laborum facilis! Molestias, tenetur. Laudantium eius illum esse saepe praesentium, quas similique porro repellendus deleniti nesciunt nemo commodi totam distinctio dignissimos reiciendis dolorum nostrum.
            Ex consequatur deserunt nulla omnis odio provident molestiae, distinctio blanditiis. Recusandae maiores aliquam optio possimus accusantium eligendi saepe? Enim perspiciatis sint, porro repellat sunt nemo. Est odio consequuntur saepe expedita.
            Illum at perspiciatis ipsa, enim necessitatibus saepe voluptatem, cupiditate dolorem architecto corporis incidunt dolore? Nesciunt magni nulla tenetur autem temporibus quibusdam, officia illum suscipit soluta alias nam molestiae optio minus.
            Rem numquam obcaecati, neque expedita mollitia aut eius, earum dolor adipisci perspiciatis fugit eaque nemo hic, delectus laboriosam quos voluptas? Molestias omnis ullam exercitationem quibusdam, eligendi incidunt enim fugiat iusto.
            Nisi placeat inventore sequi soluta, ratione laudantium molestias! Sint, odio vitae tenetur dicta quam consequuntur ipsa nisi magni vel aspernatur impedit ut sit deserunt, veniam neque necessitatibus quo. Quisquam, beatae.
            Omnis, nobis quo aliquam exercitationem sit assumenda commodi similique fugit dolor, itaque ea tempora quia tenetur nostrum esse? Laudantium nihil sit nemo deleniti ipsa in quidem numquam! Voluptates, ab beatae.
            Harum saepe ipsam assumenda alias hic, esse numquam commodi est quaerat voluptatibus reiciendis a aliquid perspiciatis vitae tempore ut nam laudantium facere suscipit fugit deserunt voluptas? Dolore repellendus ab aperiam.
            Quaerat modi voluptatem nesciunt repudiandae voluptates ducimus fugit, nemo impedit rem corrupti corporis magni, blanditiis libero cum amet recusandae facere, iste exercitationem alias quas laudantium quae commodi? Aliquid, molestiae sed?
            Architecto deleniti numquam, dolores excepturi dolorum sed ipsa possimus in ut accusamus quasi enim molestias, veniam alias eligendi voluptatum repudiandae praesentium dolore accusantium quam dicta iste! Similique sunt aspernatur odit.
            Explicabo vitae, omnis debitis voluptatibus ullam suscipit dolor quidem doloremque tempore ut a provident numquam fugit vel cum illum earum praesentium incidunt, aut voluptatem neque exercitationem facilis? Illum, quae quo?
            Eaque, accusantium vero sed rerum eum voluptas eius dicta nobis numquam reiciendis laborum enim neque minima unde. Sed deleniti, illum, esse, non perferendis placeat sapiente eaque voluptatem ut neque eius.
            Molestiae beatae sint repellat sed veritatis doloremque deleniti voluptatem, necessitatibus aperiam. Nobis labore placeat dolore corporis doloremque, beatae obcaecati possimus voluptatibus ad, dolor pariatur rem enim eum, voluptate veniam! Dolorem.
            Voluptates pariatur blanditiis laboriosam alias, odio, accusamus veniam obcaecati, doloremque esse in reiciendis sit atque ratione error ducimus deserunt repudiandae. Maiores corporis sunt modi odit et nesciunt fugiat ipsam veritatis!
            Quasi perferendis quo eius nemo laboriosam adipisci temporibus magnam saepe sunt id vel tenetur, repellat dolorum aspernatur voluptatibus, aliquam nam! Voluptatem necessitatibus corporis quae, similique aperiam cum facere fugiat quia!
            Aliquam officiis recusandae, incidunt tempore, voluptatem consequatur nemo tempora dolores ipsam consectetur alias unde expedita quibusdam, suscipit repellat cupiditate voluptate non. Similique voluptates in placeat laboriosam aliquid, repellat tempore asperiores.
            Beatae necessitatibus quo veniam impedit! Veritatis, ducimus. Molestias, nobis sed? Ipsam ea facere a laudantium doloribus animi impedit optio sunt! Nesciunt dolore commodi explicabo eos aliquid repellat id consequatur nisi?</p>

        </div>
    </div>
        
      ))}
     
    </>
   
  )
}

export default Blogcard