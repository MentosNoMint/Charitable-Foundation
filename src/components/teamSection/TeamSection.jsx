import React from 'react';
import SwiperTeam from './SwiperTeam';

const TeamSection = () => {
  return (
    <div className='w-full flex flex-col max-w-[74.75rem]'>
      <div className='relative flex'>
        <h1 className='heading-size max-w-[47.875rem] mt-[6.875rem] max-md:text-[2.5rem]'>
          Вместе мы помогаем спасать жизни и поддерживаем тех, кто в этом
          нуждается
        </h1>
        <img
          src='/assets/images/draw-select-team.svg'
          alt='draw'
          className='absolute mt-[10rem] ml-[40.5%] max-md:ml-[55%] max-md:mt-[13rem] max-sm:ml-[0%] max-sm:mt-[16.5rem]'
        />
      </div>
      <SwiperTeam />
    </div>
  );
};

export default TeamSection;
