import React from 'react';
import Slider from './Slider';

const HeroContent = () => {
  return (
    <div className='w-full flex relative flex-col'>
      <div className='flex gap-3'>
        <div className='max-w-12 w-full h-0.5 bg-black'></div>
        <div className='max-w-12 w-full h-0.5 bg-black-gray'></div>
        <div className='max-w-12 w-full h-0.5 bg-black-gray'></div>
        <div className='max-w-12 w-full h-0.5 bg-black-gray'></div>
        <div className='max-w-12 w-full h-0.5 bg-black-gray'></div>
      </div>
      <div className='flex mt-7'>
        <Slider />
        <div className='flex flex-col flex-1 items-end'>
          <div
            className='max-w-[21.5625rem] w-full h-[21.375rem] bg-black-gray rounded-[2rem] bg-cover flex flex-col items-start'
            style={{
              backgroundImage: `url('/assets/images/sample-image2.png')`,
            }}
          >
            <div className='w-[3.625rem] h-[3.625rem] rounded-full bg-black flex justify-center items-center ml-auto mt-5 mr-5 cursor-pointer'>
              <img src='/assets/images/arrow-link.svg' alt='arrow-img' />
            </div>
            <span className='mt-auto font-custom bg-white rounded-full py-4 px-8 mb-5 ml-5 text-lg'>
              Награждение
            </span>
          </div>
          <div className='bg-main-green max-w-[21.5625rem] w-full h-[15.25rem] rounded-[2rem] mt-auto relative flex flex-col'>
            <div className='flex flex-col mt-6 ml-6'>
              <span className='font-custom text-2xl'>Спасено детей</span>
              <img
                src='/assets/images/line-children-block.svg'
                alt='line'
                className='w-[11.375rem]'
              />
            </div>
            <div className='flex mt-auto ml-6 mb-6 items-end justify-between'>
              <div className='font-custom text-5xl'>990</div>
              <img src="/assets/images/heart.svg" alt="heart" className='mr-[2rem]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
