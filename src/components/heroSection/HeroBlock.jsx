import React from 'react';
import HeroContent from './HeroContent';

const HeroBlock = ({ ref }) => {
  return (
    <div
      className='max-w-[74.75rem] w-full flex items-center flex-col max-book:px-6'
      ref={ref}
      id='hero'
    >
      <div className='w-full flex justify-between mt-10'>
        <div></div>
        <div className='flex ml-9 max-md:items-start max-md:ml-0 max-sm:w-full'>
          <img
            src='/assets/images/draw-arrow.svg'
            alt='arrow'
            className='mr-[4.0625rem] max-md:hidden'
          />
          <div className='relative flex'>
            <h1 className='text-[2.5rem] font-custom max-w-[510px] leading-[3rem] max-sm:max-w-[300px] max-sm:text-[2rem] max-book:max-w-[335px]'>
              Региональный благотворительный фонд «Жизнь - священный дар»
            </h1>
            <img
              src='/assets/images/draw-select-text.svg'
              alt='draw'
              className='absolute mt-[5.575rem] ml-[-0.8rem] max-sm:ml-[5.5rem] max-sm:w-[10rem] max-sm:mt-[6rem] max-book:ml-[6.5rem]'
            />
          </div>
        </div>
        <span className='mt-auto font-custom font-sm max-sm:hidden max-md:text-sm max-md:mr-6'>
          [новости фонда]
        </span>
      </div>
      <HeroContent />
    </div>
  );
};

export default HeroBlock;
