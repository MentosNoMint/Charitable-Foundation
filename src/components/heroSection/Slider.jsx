import React, { useContext } from 'react';
import { getSlider } from '../../lib/API';
import { useQuery } from '@tanstack/react-query';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { SlideContext } from '../../lib/SliderContext';
import 'swiper/css';
const Slider = () => {
  const { setCurrentSlide } = useContext(SlideContext);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['slides'],
    queryFn: getSlider,
    select: (data) => data?.data.data,
  });

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex + 1);
  };

  return (
    <div
      className={`max-w-[831px] h-[606px] flex relative w-full rounded-[2rem] ${
        isLoading && 'animate-pulse bg-gray-300'
      } max-md:h-[21.375rem] max-book:max-w-[100rem]`}
    >
      <Swiper
        spaceBetween={10}
        slidesPerGroup={1}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        loop={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.swiper-btn-prev',
          nextEl: '.swiper-btn-next',
        }}
      >
        {data?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={import.meta.env.VITE_LOCAL_URL + slide.photo?.url}
              alt='img'
              className='rounded-[2rem] h-full w-full object-cover'
            />
          </SwiperSlide>
        ))}
        <div className='absolute z-20 mt-[-40%] rounded-full w-10 h-10 bg-white flex justify-center items-center cursor-pointer swiper-btn-prev ml-4 max-sm:mt-[-50%] max-book:mt-[-28%]'>
          <img src='/assets/images/black-arrow.svg' alt='arrow' />
        </div>
        <div className='w-full flex justify-end'>
          <div className='absolute z-20 mt-[-40%] rounded-full w-10 h-10 bg-white flex justify-center items-center cursor-pointer swiper-btn-next mr-4 max-sm:mt-[-50%] max-book:mt-[-28%]'>
            <img
              src='/assets/images/black-arrow.svg'
              alt='arrow'
              className='rotate-180'
            />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
