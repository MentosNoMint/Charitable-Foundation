import React, { useState } from 'react';
import ModalBlock from '../ui/ModalBlock';
import { useQuery } from '@tanstack/react-query';
import { getArticles } from '../../lib/API';
const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
    select: (data) => data?.data.data,
  });
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <div className='max-w-[36.75rem] w-full bg-light-gray h-[15rem] rounded-[2rem] py-6 px-6 flex flex-col font-custom max-book:mt-5 max-book:max-w-[70rem]'>
      <ModalBlock
        open={openModal}
        onClose={handleClose}
        name={data?.[0]?.name}
        description={data?.[0]?.link}
        link={data}
      />
      <h1 className='text-2xl'>Статьи</h1>
      <div className='mt-auto flex justify-between'>
        <span className='text-lg leading-[1.5rem] max-sm:max-w-[13rem] max-sm:text-[1.1rem]'>
          Статьи с новостей, групп вк, про <br /> нашу деятельность
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

export default Articles;
