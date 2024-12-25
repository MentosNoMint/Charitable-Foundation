import React from 'react';

const GallerySection = () => {
     // подключить страпи
  return (
    <div className='w-full flex flex-col max-w-[1196px] mt-[7rem]'>
      <h1 className='heading-size leading-[3.3125rem]'>
        Галлерея <br />
        спасенных детей
      </h1>
      <div className='flex justify-between mt-7'>
        <div className='flex items-center'>
          <div className='rounded-sm bg-[#FFCDD2] w-4 h-4'></div>
          <span className='font-custom text-[0.9375rem] ml-2.5'>Девочка</span>
          <div className='rounded-sm bg-[#BBDEFA] w-4 h-4 ml-5'></div>
          <span className='font-custom text-[0.9375rem] ml-2.5'>Мальчик</span>
        </div>
        <div className='flex items-center'>
          <span className='font-custom text-[0.9375rem]'>Показать все</span>
          <div className='flex justify-center items-center ml-4 w-7 h-7 bg-black rounded-lg'>
            <img src='/assets/images/view-all-arrow.svg' alt='' />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap mt-20 gap-11 mb-[7.125rem]'>
        <div className='max-w-[23rem] w-full bg-[#f1f1f1] h-[15.3125rem] rounded-[2rem]'></div>
        <div className='max-w-[23rem] w-full bg-[#f1f1f1] h-[15.3125rem] rounded-[2rem]'></div>
        <div className='max-w-[23rem] w-full bg-[#f1f1f1] h-[15.3125rem] rounded-[2rem]'></div>
        <div className='max-w-[23rem] w-full bg-[#f1f1f1] h-[15.3125rem] rounded-[2rem]'></div>
        <div className='max-w-[23rem] w-full bg-[#f1f1f1] h-[15.3125rem] rounded-[2rem]'></div>
        <div className='max-w-[23rem] w-full bg-[#f1f1f1] h-[15.3125rem] rounded-[2rem]'></div>
      </div>
    </div>
  );
};

export default GallerySection;
