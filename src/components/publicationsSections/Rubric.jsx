import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRubrics } from '../../lib/API';
const Rubric = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['rubrics'],
    queryFn: getRubrics,
    select: (data) => data?.data.data,
  });
  
  return (
    <div className='mt-[4.25rem]'>
      <h1 className='heading-size mb-10'>Рубрика "Две полоски"</h1>
      <div className='flex flex-wrap gap-4 max-sm:justify-center'>
        {data?.map((rubrics) => (
          <a
            className='mt-4 font-custom cursor-pointer'
            key={rubrics.id}
            href={rubrics.link}
            target='_blank'
          >
            <div className='w-[23.75rem] h-[13.5rem] rounded-[1.2rem] max-sm:w-full max-md:max-w-[20rem]'>
              <img
                src={import.meta.env.VITE_LOCAL_URL + rubrics.photo?.url}
                alt='test'
                className='rounded-[1.2rem] h-full w-full object-cover'
              />
            </div>
            <h1 className='text-xl mt-2'>{rubrics.name}</h1>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Rubric;
