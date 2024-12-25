import React from 'react';

const AboutSection = () => {
  return (
    <div className='max-w-[1196px] w-full flex items-center flex-col'>
      <div className='w-full flex my-[6.25rem] justify-between'>
        <div className='flex items-center'>
          <div className='w-3 h-3 bg-main-green rounded-full'></div>
          <span className='font-custom text-lg ml-2'>Кто мы</span>
        </div>
        <span className='font-custom text-xl max-w-[40.6875rem] leading-6'>
          Региональный Благотворительный фонд «Жизнь – Священный дар» создан в
          2011 году с целью развития благотворительной деятельности в области
          защиты материнства и детства. В настоящее время Фонд при поддержке
          храма Святого великомученика Георгия Победоносца в г. Сургуте
          реализует социально-демографический проект «В защиту жизни и семейных
          ценностей».
        </span>
        <div></div>
      </div>
    </div>
  );
};

export default AboutSection;
