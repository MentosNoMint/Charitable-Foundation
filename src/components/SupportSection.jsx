import React from 'react';
import { getQrCode } from '../lib/API';
import { useQuery } from '@tanstack/react-query';
const SupportSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['qrCode'],
    queryFn: getQrCode,
    select: (data) => data?.data.data,
  });
  return (
    <div
      className='max-w-[74.75rem] w-full flex flex-col mt-[5.75rem] max-book:px-6'
      id='support'
    >
      <div>
        <span className='font-sm font-custom bg-[#F5FFC2] px-5 py-2.5 rounded-full'>
          Помочь фонду
        </span>
      </div>
      <div className='relative flex mt-5'>
        <h1 className='heading-size max-w-[52rem] max-md:text-[2.5rem]'>
          Ваша поддержка спасает жизни. Каждый ваш вклад — это шанс для будущего
          ребенка и его мамы. Помогите нам вместе создавать чудо.
        </h1>
        <img
          src='/assets/images/draw-select-support.svg'
          alt='draw'
          className='absolute mt-[6.3rem] ml-[-1rem] max-sm:ml-[-1.5rem] max-sm:max-w-[13rem] max-md:ml-[4rem] max-md:max-w-[14rem]'
        />
      </div>
      <div className='flex mt-[5.75rem] gap-5 flex-wrap max-md:flex-col'>
        <div className='flex-1 bg-light-gray h-[16.75rem] rounded-[2rem] py-7 px-7 flex flex-col'>
          <div className='flex flex-col'>
            <span className='text-2xl font-custom'>Станьте волонтером</span>
            <img
              src='/assets/images/draw-volunteer.svg'
              alt='draw'
              className='w-[17rem] mt-0.5'
            />
          </div>
          <div className='flex w-full mt-auto items-end'>
            <span className='font-custom text-[1.1875rem] leading-[1.5rem] max-w-[27.5rem] max-md:max-w-[27.5rem] max-sm:text-[1.1rem] max-sm:max-w-[14rem] max-md:mt-[7rem] max-book:max-w-[16rem]'>
              Поддержите тех, кто нуждается в помощи. Ваша забота может спасти
              жизнь!
            </span>
            <a
              className='w-[3.625rem] h-[3.625rem] rounded-full bg-black flex justify-center items-center ml-auto cursor-pointer'
              href='https://vk.com/zhsd86'
              target='_blank'
            >
              <img src='/assets/images/arrow-link.svg' alt='arrow-img' />
            </a>
          </div>
        </div>
        <div className='flex-1 bg-light-gray h-[16.75rem] rounded-[2rem] py-7 px-7 flex flex-col'>
          <div className='flex flex-col'>
            <span className='text-2xl font-custom'>Помощь вещами</span>
            <img
              src='/assets/images/draw-help-text.svg'
              alt='draw'
              className='w-[13rem] mt-0.5'
            />
          </div>
          <div className='flex w-full mt-auto items-end'>
            <span className='font-custom text-[1.1875rem] leading-[1.5rem] max-w-[25rem] max-md:max-w-[25rem] max-sm:text-[1.1rem] max-sm:max-w-[14rem] max-md:mt-[7rem] max-book:max-w-[16rem]'>
              Пожертвованные вами вещи с благодарностью примут в офисе ЦЗМ «Моя
              радость»
            </span>
            <a
              className='w-[3.625rem] h-[3.625rem] rounded-full bg-black flex justify-center items-center ml-auto cursor-pointer'
              href='https://vk.com/club74498711'
              target='_blank'
            >
              <img src='/assets/images/arrow-link.svg' alt='arrow-img' />
            </a>
          </div>
        </div>
      </div>
      <div
        className='w-full h-[19.25rem] mt-4 py-7 px-7 flex bg-no-repeat max-md:bg-main-green max-md:rounded-[2rem] max-md:flex-col max-sm:h-[33rem] max-md:h-[25rem]'
        style={{
          backgroundImage: `url('/assets/images/bg-support.svg')`,
        }}
      >
        <div className='flex flex-col'>
          <h1 className='font-custom text-2xl'>Банковские реквизиты</h1>
          <div className='mt-auto flex gap-12 font-custom flex-wrap max-md:gap-5 max-book:gap-5 max-md:mt-5'>
            <div className='flex gap-12 max-md:gap-7  max-md:mt-0'>
              <div className='flex flex-col'>
                <span className='text-[#4C4C4C] text-sm'>ИНН</span>
                <span className='text-lg'>8602999031</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-[#4C4C4] text-sm'>КПП</span>
                <span className='text-lg'>860201001</span>
              </div>
            </div>
            <div className='flex gap-12 font-custom flex-wrap max-md:gap-5 max-book:gap-5'>
              <div className='flex flex-col'>
                <span className='text-[#4C4C4] text-sm'>БИК</span>
                <span className='text-lg'>047144709</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-[#4C4C4] text-sm'>Р/счет</span>
                <span className='text-lg'>40703810300000106171</span>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#4C4C4] text-sm'>К/c</span>
              <span className='text-lg'>30101810600000000709</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <img
            src={import.meta.env.VITE_LOCAL_URL + data?.qr.url}
            alt='qr-code'
            className='w-[9rem] h-[9rem] ml-auto mr-5 max-sm:ml-0 max-md:mt-5'
          />
          {data?.link && (
            <a href={data?.link} className='font-custom mt-2 text-sm text-gray-800'>Ссылка на оплату</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
