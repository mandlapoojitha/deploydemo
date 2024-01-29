import Link from 'next/link';
import React from 'react';

const Teasercard = (props: any) => {
  const cardStyle={
    backgroundColor : props.color
  }
  
  return (
    <Link href="/[id]" as={`/${props.id}`}  className='w-96 shadow-lg min-h-96 flex flex-col justify-start items-start m-10 rounded hover:shadow-3xl'>
      <div className="header pt-6 pl-8 pb-6 bg-pink-200 w-full rounded" style={cardStyle}>
        <p className='font-semibold text-lg'>{props.techname}</p>
        <p className='font-extrabold text-2xl mt-2 '>{props.blogname}</p>
        <p className='font-semibold text-lg mt-2'>{props.authorname}</p>
      </div>
      <div className="body pt-8 pl-8 pr-8 pb-8">
        <p className='font-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi reprehenderit eveniet voluptas repellat sapiente necessitatibus deleniti, eum commodi perferendis minus vitae fugiat, beatae accusantium laborum. Quasi vel repellat eos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque nisi sapiente. Sequi distinctio mollitia cumque optio iusto. Tempore harum consequatur non! Dolore aspernatur ullam quas, hic officiis assumenda tempora.</p>
      </div>
    </Link>
  );
};

export default Teasercard;
