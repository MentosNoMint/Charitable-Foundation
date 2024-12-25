import React from 'react';

const PublicationsContent = () => {
    // подключить страпи, сделать свайпер.
  return (
    <div className='w-full flex flex-col mt-[6rem]'>
      <h1 className='heading-size'>Проекты</h1>
      <div className='flex flew-wrap'>
        <div className='mt-14 font-custom'>
          <img src='/assets/images/sample-project.svg' alt='test' />
          <h1 className='text-xl mt-2'>Название проекта</h1>
          <p className='text-base text-[#797979]'>22 слайда</p>
        </div>
      </div>
      <h1 className='heading-size mt-[4.25rem]'>Мероприятия</h1>
      <div className='flex flew-wrap'>
        <div className='mt-14 font-custom'>
          <img src='/assets/images/sample-project.svg' alt='test' />
          <h1 className='text-xl mt-2'>Название проекта</h1>
          <p className='text-base text-[#797979]'>22 слайда</p>
        </div>
      </div>
      <h1 className='heading-size mt-[4.25rem]'>Сотрудничество</h1>
      <div className='flex flew-wrap'>
        <div className='mt-14 font-custom'>
          <img src='/assets/images/sample-project.svg' alt='test' />
          <h1 className='text-xl mt-2'>Название проекта</h1>
          <p className='text-base text-[#797979]'>22 слайда</p>
        </div>
      </div>
      <div className='w-full flex justify-between flex-wrap mt-[4.25rem]'>
        <div className='max-w-[36.75rem] w-full bg-light-gray h-[15rem] rounded-[2rem] py-6 px-6 flex flex-col font-custom'>
          <h1 className='text-2xl'>Фильмы</h1>
          <div className='mt-auto flex justify-between'>
            <span className='text-lg leading-[1.5rem]'>
              Фильмы, которые связанны с <br /> нашей деятельностью
            </span>
            <div className='w-14 h-14 rounded-full bg-black flex justify-center items-center ml-auto cursor-pointer'>
              <img src='/assets/images/arrow-link.svg' alt='arrow-img' />
            </div>
          </div>
        </div>
        <div className='max-w-[36.75rem] w-full bg-light-gray h-[15rem] rounded-[2rem] py-6 px-6 flex flex-col font-custom'>
          <h1 className='text-2xl'>Статьи</h1>
          <div className='mt-auto flex justify-between'>
            <span className='text-lg leading-[1.5rem]'>
              Статьи с новостей, групп вк, про <br /> нашу деятельность
            </span>
            <div className='w-14 h-14 rounded-full bg-black flex justify-center items-center ml-auto cursor-pointer'>
              <img src='/assets/images/arrow-link.svg' alt='arrow-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsContent;
