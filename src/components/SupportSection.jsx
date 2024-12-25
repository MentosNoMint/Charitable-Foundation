import React from 'react';

const SupportSection = () => {
  return (
    <div className='max-w-[1196px] w-full flex flex-col mt-[5.75rem]'>
      <div>
        <span className='font-sm font-custom bg-[#F5FFC2] px-5 py-2.5 rounded-full'>
          Помочь фонду
        </span>
      </div>
      <div className='relative flex mt-5'>
        <h1 className='heading-size max-w-[52rem]'>
          Ваша поддержка спасает жизни. Каждый ваш вклад — это шанс для будущего
          ребенка и его мамы. Помогите нам вместе создавать чудо.
        </h1>
        <img
          src='/assets/images/draw-select-support.svg'
          alt='draw'
          className='absolute mt-[6.3rem] ml-[-1rem]'
        />
      </div>
      <div className='flex mt-[5.75rem] gap-5 flex-wrap'>
        <div className='flex-1 bg-light-gray h-[16.75rem] rounded-[2rem] py-7 px-7 flex flex-col'>
          <div className='flex flex-col'>
            <span className='text-2xl font-custom'>Статьньте волонтером</span>
            <img
              src='/assets/images/draw-volunteer.svg'
              alt='draw'
              className='w-[17rem] mt-0.5'
            />
          </div>
          <div className='flex w-full mt-auto items-end'>
            <span className='font-custom text-[1.1875rem] leading-[1.5rem] max-w-[27.5rem]'>
              Поддержите тех, кто нуждается в помощи. Ваша забота может спасти
              жизнь!
            </span>
            <div className='w-[3.625rem] h-[3.625rem] rounded-full bg-black flex justify-center items-center ml-auto cursor-pointer'>
              <img src='/assets/images/arrow-link.svg' alt='arrow-img' />
            </div>
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
            <span className='font-custom text-[1.1875rem] leading-[1.5rem] max-w-[25rem]'>
              Пожертвованные вами вещи с благодарностью примут в офисе ЦЗМ «Моя
              радость»
            </span>
            <div className='w-[3.625rem] h-[3.625rem] rounded-full bg-black flex justify-center items-center ml-auto cursor-pointer'>
              <img src='/assets/images/arrow-link.svg' alt='arrow-img' />
            </div>
          </div>
        </div>
      </div>
      <div
        className='w-full h-[19.25rem] mt-4 py-7 px-7 flex'
        style={{
          backgroundImage: `url('/assets/images/bg-support.svg')`,
        }}
      >
        <div className='flex flex-col'>
          <h1 className='font-custom text-2xl'>Банковские реквизиты</h1>
          <div className='mt-auto flex gap-12 font-custom'>
            <div className='flex flex-col'>
              <span className='text-[#4C4C4C] text-sm'>ИНН</span>
              <span className='text-lg'>8602999031</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#4C4C4] text-sm'>КПП</span>
              <span className='text-lg'>860201001</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#4C4C4] text-sm'>БИК</span>
              <span className='text-lg'>047144709</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#4C4C4] text-sm'>Р/счет</span>
              <span className='text-lg'>40703810300000106171</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#4C4C4] text-sm'>К/c</span>
              <span className='text-lg'>30101810600000000709</span>
            </div>
          </div>
        </div>
        <img
          src='/assets/images/qr-code.svg'
          alt='qr-code'
          className='w-[9rem] ml-auto mr-5'
        />
      </div>
    </div>
  );
};

export default SupportSection;
