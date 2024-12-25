import React from 'react';

const SwiperTeam = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex gap-3 w-full justify-end'>
        <div className='rounded-full w-10 h-10 bg-[#f1f1f1] flex justify-center items-center'>
          <img src='/assets/images/black-arrow.svg' alt='arrow' />
        </div>
        <div className='rounded-full w-10 h-10 bg-[#f1f1f1] flex justify-center items-center'>
          <img src='/assets/images/black-arrow.svg' alt='arrow' className='rotate-180'/>
        </div>
      </div>
      <div className='flex mt-7 gap-10'>
        <div className='flex flex-col'>
            <div className='w-[270px] h-[319px] bg-[#f1f1f1] rounded-[45px]'></div>
            <span className='font-custom text-[1.375rem] mt-5 leading-[1.5rem]'>Имя Фамилия</span>
            <span className='font-custom text-lg'>Психолог</span>
        </div>
        <div className='flex flex-col'>
            <div className='w-[270px] h-[319px] bg-[#f1f1f1] rounded-[45px]'></div>
            <span className='font-custom text-[1.375rem] mt-5 leading-[1.5rem]'>Имя Фамилия</span>
            <span className='font-custom text-lg'>Психолог</span>
        </div>
        <div className='flex flex-col'>
            <div className='w-[270px] h-[319px] bg-[#f1f1f1] rounded-[45px]'></div>
            <span className='font-custom text-[1.375rem] mt-5 leading-[1.5rem]'>Имя Фамилия</span>
            <span className='font-custom text-lg'>Психолог</span>
        </div>
      </div>
    </div>
  );
};

export default SwiperTeam;
