const Header = () => {
  return (
    <div className='max-w-[1196px] w-full flex items-center flex-col'>
      <header className='w-full flex items-center justify-between mt-7'>
        <img
          src='/assets/images/logo.svg'
          alt='logo'
          className='cursor-pointer'
        />
        <nav className='flex gap-14'>
          <a href='#' className='header-text'>
            Кто мы
          </a>
          <a href='#' className='header-text'>
            Что мы делаем
          </a>
          <a href='#' className='header-text'>
            Публикации
          </a>
        </nav>
        <button className='header-text py-3 p-5 rounded-full bg-black text-white'>
          Помочь фонду
        </button>
      </header>
    </div>
  );
};

export default Header;
