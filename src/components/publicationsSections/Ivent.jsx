import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getIvents } from '../../lib/API';
const Ivent = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['ivent'],
    queryFn: getIvents,
    select: (data) => data?.data.data,
  });
  return (
    <div className='mt-[4.25rem]'>
      <h1 className='heading-size'>Мероприятия</h1>
      <div className='flex flew-wrap gap-4 max-sm:flex-wrap max-sm:justify-center'>
        {data?.map((ivent) => (
          <a
            className='mt-14 font-custom'
            key={ivent.id}
            href={import.meta.env.VITE_LOCAL_URL + ivent.presentation?.url}
            target='_blank'
          >
            <div className='w-[23.75rem] h-[13.5rem] rounded-[1.2rem] max-sm:w-full max-md:max-w-[20rem]'>
              <img
                src={import.meta.env.VITE_LOCAL_URL + ivent.photo?.url}
                alt='test'
                className='rounded-[1.2rem] h-full w-full object-cover'
              />
            </div>
            <h1 className='text-xl mt-2'>{ivent.name}</h1>
            <p className='text-base text-[#797979]'>{ivent.countSlides}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Ivent;
