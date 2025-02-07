import React, { useState } from 'react';
import ModalBlock from '../ui/ModalBlock';
import { useQuery } from '@tanstack/react-query';
import { getFilms } from '../../lib/API';
const Films = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['films'],
    queryFn: getFilms,
    select: (data) => data?.data.data,
  });

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <div className='max-w-[36.75rem] w-full bg-light-gray h-[15rem] rounded-[2rem] py-6 px-6 flex flex-col font-custom max-book:max-w-[70rem]' id='films'>
      <ModalBlock
        open={openModal}
        onClose={handleClose}
        link={data}
      />
      <h1 className='text-2xl'>Фильмы</h1>
      <div className='mt-auto flex justify-between'>
        <span className='text-lg leading-[1.5rem] max-sm:max-w-[13rem] max-sm:text-[1.1rem]'>
          Фильмы, которые связаны с <br /> нашей деятельностью
        </span>
        <button
          className='w-14 h-14 rounded-full bg-black flex justify-center items-center ml-auto cursor-pointer'
          onClick={handleOpen}
        >
          <img src='/assets/images/arrow-link.svg' alt='arrow-img' />
        </button>
      </div>
    </div>
  );
};

export default Films;
