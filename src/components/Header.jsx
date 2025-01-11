import { Link } from 'react-scroll';
import { useState } from 'react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='max-w-[74.75rem] w-full flex items-center flex-col max-book:px-6'>
      <header className='w-full flex items-center justify-between mt-7'>
        <img
          src='/assets/images/logo.svg'
          alt='logo'
          className='cursor-pointer'
        />

        <nav className='flex gap-14 max-lg:hidden'>
          <Link
            to='about'
            smooth={true}
            duration={500}
            className='header-text cursor-pointer'
          >
            Кто мы
          </Link>
          <Link
            to='hero'
            smooth={true}
            duration={500}
            className='header-text cursor-pointer'
          >
            Что мы делаем
          </Link>
          <Link
            to='publications'
            smooth={true}
            duration={500}
            className='header-text cursor-pointer'
          >
            Публикации
          </Link>
        </nav>

        <Link
          to='support'
          smooth={true}
          duration={800}
          className='header-text py-3 p-5 rounded-full bg-black text-white cursor-pointer max-lg:hidden'
        >
          Помочь фонду
        </Link>
        <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
          <img src='/assets/images/burger-icon.svg' alt='' />
        </button>

        {isOpen && (
          <div className='fixed top-0 left-0 w-full h-[290px] bg-white z-50 px-5 py-5 rounded-b-xl'>
            <div className='fixed top-[290px] left-0 w-full h-screen bg-black opacity-50 z-10'></div>
            <div className='w-full flex justify-between'>
              <img
                src='/assets/images/logo.svg'
                alt='logo'
                className='cursor-pointer'
              />
              <button onClick={() => setIsOpen(!isOpen)}>
                <img src='/assets/images/close-icon.svg' alt='close' />
              </button>
            </div>
            <nav className='flex flex-col gap-5 mt-5'>
              <Link
                to='about'
                smooth={true}
                duration={500}
                className='header-text cursor-pointer max-w-20'
              >
                Кто мы
              </Link>
              <Link
                to='hero'
                smooth={true}
                duration={500}
                className='header-text cursor-pointer max-w-30'
              >
                Что мы делаем
              </Link>
              <Link
                to='publications'
                smooth={true}
                duration={500}
                className='header-text cursor-pointer max-w-20'
              >
                Публикации
              </Link>
              <Link
                to='support'
                smooth={true}
                duration={800}
                className='header-text py-3 p-5 rounded-full bg-black text-white cursor-pointer max-w-40'
              >
                Помочь фонду
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
