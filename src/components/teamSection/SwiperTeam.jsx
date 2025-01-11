import React, { useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { getEmployees } from '../../lib/API';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperTeam = () => {
  const swiperRef = useRef(null); // Создаем ссылку для Swiper
  const { data, isLoading } = useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees,
    select: (data) => data?.data.data,
  });
  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='flex gap-3 w-full justify-end mt-5'>
        {/* Кнопка назад */}
        <div
          onClick={handlePrevSlide}
          className='rounded-full w-10 h-10 bg-[#f1f1f1] flex justify-center items-center cursor-pointer'
        >
          <img src='/assets/images/black-arrow.svg' alt='arrow' />
        </div>

        {/* Кнопка вперед */}
        <div
          onClick={handleNextSlide}
          className='rounded-full w-10 h-10 bg-[#f1f1f1] flex justify-center items-center cursor-pointer'
        >
          <img
            src='/assets/images/black-arrow.svg'
            alt='arrow'
            className='rotate-180'
          />
        </div>
      </div>

      <div className='flex mt-7'>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={4}
          slidesPerGroup={4}
          breakpoints={{
            1100: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 8,
            },
            960: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 6,
            },
            720: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 6,
            },
            540: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 4,
            },
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 2,
            },
          }}
          loop={true}
        >
          {data?.map((employee) => (
            <SwiperSlide key={employee.id}>
              <div className='flex flex-col'>
                <div className='w-[270px] h-[319px] bg-[#f1f1f1] rounded-[45px] max-md:w-full'>
                  <img
                    src={import.meta.env.VITE_LOCAL_URL + employee.photo?.url}
                    alt='photo'
                    className='rounded-[2.5rem] h-full w-full object-cover'
                  />
                </div>
                <span className='font-custom text-[1.375rem] mt-5 leading-[1.5rem]'>
                  {employee.name}
                </span>
                <span className='font-custom text-lg'>{employee.position}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperTeam;
