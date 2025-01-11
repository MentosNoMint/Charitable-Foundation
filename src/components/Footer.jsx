import React from 'react';
import { Link } from 'react-scroll';
const Footer = () => {
  return (
    <footer className='max-w-[74.75rem] w-full flex flex-col mt-[17.5rem] mb-10 max-md:mt-[10rem] max-book:px-6'>
      <div className='flex justify-between flex-wrap'>
        <div className='flex flex-col'>
          <img
            src='/assets/images/logo.svg'
            alt='logo'
            className='w-[7.25rem]'
          />
          <div className='flex gap-2 mt-8'>
            <a
              className='font-custom text-sm py-2.5 px-4 bg-main-green rounded-full'
              href='https://vk.com/zhsd86'
              target='_blank'
            >
              Стать волонтером
            </a>
            <Link
              to='support'
              smooth={true}
              duration={500}
              className='font-custom text-sm py-2.5 px-4 rounded-full border-[1px] border-black cursor-pointer'
            >
              Пожертвовать
            </Link>
          </div>
        </div>
        <div className='flex max-w-[22.5rem] w-full justify-between max-md:mt-8'>
          <nav className='flex flex-col gap-2.5'>
            <h1 className='font-custom text-base leading-5'>Навигация</h1>
            <Link
              to='about'
              smooth={true}
              duration={500}
              className='footer-text cursor-pointer'
            >
              Кто мы
            </Link>
            <Link
              to='support'
              smooth={true}
              duration={500}
              className='footer-text cursor-pointer'
            >
              Помочь фонду
            </Link>
            <Link
              to='publications'
              smooth={true}
              duration={500}
              className='footer-text cursor-pointer'
            >
              Публикации
            </Link>
            <Link
              to='hero'
              smooth={true}
              duration={500}
              className='footer-text cursor-pointer'
            >
              Что мы делаем
            </Link>
          </nav>
          <nav className='flex flex-col gap-2.5'>
            <h1 className='font-custom text-base leading-5'>Информация</h1>
            <Link
              to='hero'
              smooth={true}
              duration={500}
              className='footer-text cursor-pointer'
            >
              Новости
            </Link>
            <Link
              to='history'
              smooth={true}
              duration={500}
              className='footer-text cursor-pointer'
            >
              Истории
            </Link>
            <Link
              to='films'
              smooth={true}
              duration={500}
              className='footer-text cursor-pointer'
            >
              Статьи
            </Link>
            <Link
              to='films'
              smooth={true}
              duration={500}
              className='footer-text cursor-pointer'
            >
              Фильмы
            </Link>
          </nav>
        </div>
      </div>
      <div className='w-full h-px bg-black mt-[4.25rem] opacity-70'></div>
      <div className='flex justify-between mt-6 flex-wrap'>
        <div className='flex max-w-[31rem] w-full justify-between flex-wrap '>
          <div className='flex flex-col gap-2'>
            <h1 className='font-custom text-sm'>Банковские реквизиты</h1>
            <span className='font-custom text-xs max-w-[13.5rem] text-[#414141]'>
              ИНН 8602999031 КПП 860201001 Р/счет № 40703810300000106171 в АО
              БАНК «СНГБ» г. Сургут К/с 30101810600000000709, БИК 047144709
            </span>
          </div>
          <div className='flex flex-col gap-2 max-sm:mt-5'>
            <h1 className='font-custom text-sm'>Получатель</h1>
            <span className='font-custom text-xs max-w-[13.5rem] text-[#414141]'>
              Региональный Благотворительный фонд «Жизнь – Священный дар» 
              628400, ХМАО-Югра, г. Сургут, ул. Григория Кукуевицкого, дом 9
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-2 max-md:mt-5'>
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
      </div>
    </footer>
  );
};

export default Footer;
