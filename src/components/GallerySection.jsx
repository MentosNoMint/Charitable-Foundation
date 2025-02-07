import React, { useState } from 'react';
import { getGalleryKids } from '../lib/API';
import { useQuery } from '@tanstack/react-query';

const GallerySection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['gallery'],
    queryFn: getGalleryKids,
    select: (data) => data?.data.data,
  });


  const [openAll, setOpenAll] = useState(false);

  return (
    <div className='w-full flex flex-col max-w-[74.75rem] mt-[7rem]'>
      <h1 className='heading-size leading-[3.3125rem] max-md:text-[2.5rem]'>
        Галерея <br />
        спасенных детей
      </h1>
      <div className='flex justify-between mt-7 flex-wrap'>
        <div className='flex items-center'>
          <div className='rounded-sm bg-[#FFCDD2] w-4 h-4'></div>
          <span className='font-custom text-[0.9375rem] ml-2.5'>Девочка</span>
          <div className='rounded-sm bg-[#BBDEFA] w-4 h-4 ml-5'></div>
          <span className='font-custom text-[0.9375rem] ml-2.5'>Мальчик</span>
        </div>
        <button className='flex items-center max-md:mt-2' onClick={() => setOpenAll(!openAll)}>
          <span className='font-custom text-[0.9375rem]'>{openAll ? 'Скрыть' : 'Показать все'}</span>
          <div className='flex justify-center items-center ml-4 w-7 h-7 bg-black rounded-lg'>
            <img src='/assets/images/view-all-arrow.svg' alt='arrow' />
          </div>
        </button>
      </div>
      <div className='flex flex-wrap mt-20 gap-11 mb-[7.125rem] max-md:gap-5 max-md:justify-center'>
        {data?.slice(0, openAll ? data.length : 3).map((photo) => (
          <div key={photo.id} className='max-w-[23rem] w-full bg-[#f1f1f1] h-[23rem] rounded-[2rem] max-sm:max-w-[27rem] max-md:max-w-[20rem]'>
            <img
              src={import.meta.env.VITE_LOCAL_URL + photo.photo?.url}
              alt='photo'
              className='rounded-[2rem] h-full w-full object-cover'
            />
          </div>
        ))}
      </div>
      {openAll && (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px' }}>
          <button onClick={() => setOpenAll(!openAll)} className='font-custom bg-black pt-2 pb-3 px-5 rounded-full text-white'>Закрыть все</button>
        </div>
      )}
    </div>
  );
};

export default GallerySection;