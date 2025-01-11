import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSotrudnichestvos } from '../../lib/API';
const Cooperation = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['cooperation'],
    queryFn: getSotrudnichestvos,
    select: (data) => data?.data.data,
  });
  return (
    <div className='mt-[4.25rem]'>
      <h1 className='heading-size'>Сотрудничество</h1>
      <div className='flex flew-wrap gap-4 max-sm:flex-wrap max-sm:justify-center'>
        {data?.map((cooperation) => (
          <a
            className='mt-14 font-custom'
            key={cooperation.id}
            href={import.meta.env.VITE_LOCAL_URL + cooperation.presentation?.url}
            target='_blank'
          >
            <div className='w-[23.75rem] h-[13.5rem] max-sm:w-full max-md:max-w-[20rem]'>
              <img
                src={import.meta.env.VITE_LOCAL_URL + cooperation.photo?.url}
                alt='test'
                className='rounded-[1.2rem] h-full w-full object-cover'
              />
            </div>
            <h1 className='text-xl mt-2'>{cooperation.name}</h1>
            <p className='text-base text-[#797979]'>
              {cooperation.countSlides}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cooperation;
