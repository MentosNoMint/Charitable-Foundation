import React, { useEffect, useState } from 'react';
import { getSlider } from '../../lib/API';
import { useQuery } from '@tanstack/react-query';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
const Slider = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['slides'],
    queryFn: getSlider,
  });
  return (
    <div className={`max-w-[831px] h-[606px] flex relative w-full rounded-[2rem] ${isLoading && 'animate-pulse bg-gray-300'}`}>
      <Swiper
        spaceBetween={10}
        slidesPerGroup={1}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {data?.data.data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={`http://localhost:1337${slide.photo.url}`}
              alt='img'
              className='rounded-[2rem] h-full w-full object-cover'
            />
          </SwiperSlide>
        ))}
        <div className='absolute z-20 mt-[-40%] rounded-full w-10 h-10 bg-white flex justify-center items-center cursor-pointer swiper-button-prev ml-4'>
          <img src='/assets/images/black-arrow.svg' alt='arrow' />
        </div>
        <div className='w-full flex justify-end'>
        <div className='absolute z-20 mt-[-40%] rounded-full w-10 h-10 bg-white flex justify-center items-center cursor-pointer swiper-button-next mr-4'>
          <img src='/assets/images/black-arrow.svg' alt='arrow' className='rotate-180'/>
        </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
