import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSaveKids } from '../../lib/API';
const SaveKids = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['kids'],
    queryFn: getSaveKids,
    select: (data) => data?.data.data,
  });
  return (
    <>
      {data && (
        <div className='bg-main-green max-w-[21.5625rem] w-full h-[15.25rem] rounded-[2rem] mt-auto relative flex flex-col max-md:max-w-[50rem] max-book:h-[21.375rem] max-md:h-[15.25rem] max-book:max-w-[100rem]'>
          <div className='flex flex-col mt-6 ml-6'>
            <span className='font-custom text-2xl'>Спасено детей</span>
            <img
              src='/assets/images/line-children-block.svg'
              alt='line'
              className='w-[11.375rem]'
            />
          </div>
          <div className='flex mt-auto ml-6 mb-6 items-end justify-between'>
            <div className='font-custom text-5xl'>{data.count}</div>
            <img
              src='/assets/images/heart.svg'
              alt='heart'
              className='mr-[2rem]'
            />
          </div>
        </div>
      )}
      {isLoading && (
        <div className='bg-main-green max-w-[21.5625rem] w-full h-[15.25rem] rounded-[2rem] mt-auto relative flex flex-col max-md:max-w-[50rem] max-book:h-[21.375rem] max-md:h-[15.25rem] max-book:max-w-[100rem] animate-pulse' />
      )}
    </>
  );
};

export default SaveKids;
