

import React from 'react';

const Herobanner = () => {
  const backgroundImageUrl = 'url("https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041861.jpg?w=826&t=st=1703072578~exp=1703073178~hmac=00c851d17b3fa2bd88686d0059a470218ccf7a9898d9e35eab12fd4a82be8e59")';

  return (
    <div
      className='relative w-full bg-slate-400 h-96 flex flex-col justify-flex-start items-center'
      style={{ backgroundImage: backgroundImageUrl, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      
      <div
        className='absolute inset-0 bg-black opacity-70'
        style={{ zIndex: 1 }}
      ></div>

      <div className='relative z-10 text-white text-center mt-24'>
        <p className='font-bold text-4xl'>Home for tech writers and readers.</p>
        <p className='font-semibold text-xl mt-10'>Blogging platform optimized for software developers and technical writers.</p>
        
      </div>
    </div>
  );
};

export default Herobanner;
