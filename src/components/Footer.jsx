import React from 'react';

const Footer = () => {
  return (
    <footer className='max-w-[1196px] w-full flex flex-col mt-[17.5rem] mb-10'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <img
            src='/assets/images/logo.svg'
            alt='logo'
            className='w-[7.25rem]'
          />
          <div className='flex gap-2 mt-8'>
            <button className='font-custom text-sm py-2.5 px-4 bg-main-green rounded-full'>
              Стать волонтером
            </button>
            <button className='font-custom text-sm py-2.5 px-4 rounded-full border-[1px] border-black'>
              Пожертвовать
            </button>
          </div>
        </div>
        <div className='flex max-w-[22.5rem] w-full justify-between'>
          <nav className='flex flex-col gap-2.5'>
            <h1 className='font-custom text-base leading-5'>Навигация</h1>
            <a href='#' className='footer-text'>
              Кто мы
            </a>
            <a href='#' className='footer-text'>
              Помочь фонду
            </a>
            <a href='#' className='footer-text'>
              Публикации
            </a>
            <a href='#' className='footer-text'>
              Что мы делаем
            </a>
          </nav>
          <nav className='flex flex-col gap-2.5'>
            <h1 className='font-custom text-base leading-5'>Информация</h1>
            <a href='#' className='footer-text'>
              Новости
            </a>
            <a href='#' className='footer-text'>
              Истории
            </a>
            <a href='#' className='footer-text'>
              Статьи
            </a>
            <a href='#' className='footer-text'>
              Фильмы
            </a>
          </nav>
        </div>
      </div>
      <div className='w-full h-px bg-black mt-[4.25rem] opacity-70'></div>
      <div className='flex justify-between mt-6'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-custom text-sm'>Телефоны</h1>
          <span className='text-xs font-custom text-[#414141]'>
            «Жизнь – Священный дар: +79048794455
          </span>
          <span className='text-xs font-custom text-[#414141]'>
            Семейный психолог: +79222514046
          </span>
          <span className='text-xs font-custom text-[#414141]'>
            Телефон доверия в ХМАО-Югре: 8-800-101-1212
          </span>
        </div>
        <div className='flex max-w-[31rem] w-full justify-between'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-custom text-sm'>Банковские реквизиты</h1>
            <span className='font-custom text-xs max-w-[13.5rem] text-[#414141]'>
              ИНН 8602999031 КПП 860201001 Р/счет № 40703810300000106171 в АО
              БАНК «СНГБ» г. Сургут К/с 30101810600000000709, БИК 047144709
            </span>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-custom text-sm'>Получатель</h1>
            <span className='font-custom text-xs max-w-[13.5rem] text-[#414141]'>
              Региональный Благотворительный фонд «Жизнь – Священный дар» 
              628400, ХМАО-Югра, г. Сургут, ул. Григория Кукуевицкого, дом 9
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
