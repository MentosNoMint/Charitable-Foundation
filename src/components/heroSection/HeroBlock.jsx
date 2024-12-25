import React from 'react';
import HeroContent from './HeroContent';

const HeroBlock = () => {
  return (
    <div className='max-w-[1196px] w-full flex items-center flex-col'>
      <div className='w-full flex justify-between mt-10'>
        <div></div>
        <div className='flex ml-9'>
          <img
            src='/assets/images/draw-arrow.svg'
            alt='arrow'
            className='mr-[4.0625rem]'
          />
          <div className='relative flex'>
            <h1 className='text-[2.5rem] font-custom max-w-[510px] leading-[3rem]'>
              Региональный благотворительный фонд «Жизнь - священный дар»
            </h1>
            <img
              src='/assets/images/draw-select-text.svg'
              alt='draw'
              className='absolute mt-[5.575rem] ml-[-0.8rem]'
            />
          </div>
        </div>
        <span className='mt-auto font-custom font-sm'>[новости фонда]</span>
      </div>
      <HeroContent />
    </div>
  );
};

export default HeroBlock;
