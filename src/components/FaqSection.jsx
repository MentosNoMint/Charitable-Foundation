import React from 'react';

const FaqSection = () => {
  return (
    <div className='max-w-[1196px] w-full flex items-center flex-col mt-[6.5rem]'>
      <h1 className='heading-size'>Часто задаваемые вопросы</h1>
      <div className='flex flex-col w-full mt-20 cursor-pointer'>
        <div className='flex w-full justify-between font-custom items-center'>
          <span className='text-[2rem]'>Зачем вы это делаете? Каждый сам распоряжается своим телом.</span>
          <img src='/assets/images/plus-icon.svg' alt='plus' />
        </div>
        <div className='w-full h-px bg-[#E1E1E1] mt-9'></div>
      </div>
      <div className='flex flex-col w-full mt-8 cursor-pointer'>
        <div className='flex w-full justify-between font-custom items-center'>
          <span className='text-[2rem]'>Зачем плодить нищету?</span>
          <img src='/assets/images/plus-icon.svg' alt='plus' />
        </div>
        <div className='w-full h-px bg-[#E1E1E1] mt-9'></div>
      </div>
      <div className='flex flex-col w-full mt-8 cursor-pointer'>
        <div className='flex w-full justify-between font-custom items-center'>
          <span className='text-[2rem]'>Что я могу дать ребенку?</span>
          <img src='/assets/images/plus-icon.svg' alt='plus' />
        </div>
        <div className='w-full h-px bg-[#E1E1E1] mt-9'></div>
      </div>
      <div className='flex flex-col w-full mt-8 cursor-pointer'>
        <div className='flex w-full justify-between font-custom items-center'>
          <span className='text-[2rem]'>А чем вы мне поможете? Миллион дадите?</span>
          <img src='/assets/images/plus-icon.svg' alt='plus' />
        </div>
        <div className='w-full h-px bg-[#E1E1E1] mt-9'></div>
      </div>
    </div>
  );
};

export default FaqSection;
