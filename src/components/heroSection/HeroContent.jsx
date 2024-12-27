import React, { useContext } from 'react';
import Slider from './Slider';
import { useQuery } from '@tanstack/react-query';
import { getSlider } from '../../lib/API';
import SaveKids from './SaveKids';
import { SlideContext } from '../../lib/SliderContext';
const HeroContent = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['slides'],
    queryFn: getSlider,
    select: (data) => data?.data.data,
  });
  const fixedNews = data?.find((test) => test.fixed);
  const { currentSlide } = useContext(SlideContext);
  const divs = Array.from({ length: data?.length }, (_, index) => index + 1);

  return (
    <div className='w-full flex relative flex-col'>
      <div className='flex gap-3 max-w-[18rem]'>
        {divs.map((id) => (
          <div key={id} className='flex-1 h-0.5 bg-black-gray'>
            {id === currentSlide && (
              <div className='h-0.5 bg-black pagination-anim'></div>
            )}
          </div>
        ))}
      </div>
      <div className='flex mt-7'>
        <Slider />
        <div className='flex flex-col flex-1 items-end'>
          {fixedNews && (
            <div
              className='max-w-[21.5625rem] w-full h-[21.375rem] bg-black-gray rounded-[2rem] bg-cover flex flex-col items-start bg-center'
              style={{
                backgroundImage: `url('${
                  import.meta.env.VITE_LOCAL_URL + fixedNews.photo?.url
                }')`,
              }}
            >
              <div className='w-[3.625rem] h-[3.625rem] rounded-full bg-black flex justify-center items-center ml-auto mt-5 mr-5 cursor-pointer'>
                <img src='/assets/images/arrow-link.svg' alt='arrow-img' />
              </div>
              <span className='mt-auto font-custom bg-white rounded-full py-4 px-8 mb-5 ml-5 text-lg'>
                {fixedNews?.shortDescription}
              </span>
            </div>
          )}
          {isLoading && (
            <div className='max-w-[21.5625rem] w-full h-[21.375rem] bg-gray-300 rounded-[2rem] bg-cover flex flex-col items-start bg-center animate-pulse' />
          )}
          <SaveKids />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
