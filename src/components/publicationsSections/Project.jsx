import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../lib/API';
const Project = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['project'],
    queryFn: getProjects,
    select: (data) => data?.data.data,
  });
  return (
    <>
      <h1 className='heading-size'>Проекты</h1>
      <div className='flex flew-wrap gap-4'>
        {data?.map((project) => (
          <div className='mt-14 font-custom' key={project.id}>
            <div className='w-[23.75rem] h-[13.5rem] rounded-[1.2rem]'>
              <img
                src={import.meta.env.VITE_LOCAL_URL + project.photo?.url}
                alt='test'
                className='rounded-[1.2rem] h-full w-full object-cover'
              />
            </div>
            <h1 className='text-xl mt-2'>{project.name}</h1>
            <p className='text-base text-[#797979]'>{project.countSlides}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
