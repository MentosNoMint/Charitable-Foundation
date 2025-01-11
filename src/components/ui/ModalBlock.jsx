import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ModalBlock = ({
  open,
  onClose,
  name,
  description,
  image,
  link,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const modalRef = useRef();
  const backGroundRef = useRef();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    if (isOpen) {
      handleOpenAnimation();
    }
  }, [isOpen]);

  const handleOpenAnimation = () => {
    gsap.to(modalRef.current, {
      scale: 1.1,
      duration: 0.2,
      visibility: 'visible',
    });
    gsap.to(backGroundRef.current, {
      opacity: 0.5,
      duration: 0.5,
    });
  };

  const handleCloseAnimation = () => {
    gsap.to(modalRef.current, {
      scale: 0.8,
      duration: 0.5,
      visibility: 'hidden',
      onComplete: () => {
        onClose();
      },
    });
    gsap.to(backGroundRef.current, {
      opacity: 0,
      duration: 0.5,
    });
  };

  return (
    <>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black opacity-0 w-full h-screen z-10 ${
          !isOpen && 'pointer-events-none'
        }`}
        ref={backGroundRef}
      ></div>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[345px] w-full bg-white z-20 rounded-2xl flex flex-col px-6 py-6 scale-90 invisible ${
          !isOpen && 'pointer-events-none'
        }`}
        ref={modalRef}
      >
        <div>
          <button
            className='w-[1.6rem] h-[1.6rem] flex justify-center items-center bg-black rounded-[0.25rem] border-none mb-4'
            onClick={() => {
              handleCloseAnimation(), setIsOpen(!isOpen);
            }}
          >
            <img
              src='/assets/images/arrow-back.svg'
              alt='back'
              className='max-w-[12px]'
            />
          </button>
        </div>
        {image && (
          <div className='w-full h-[185px]'>
            <img
              src={image}
              alt='photo'
              className='rounded-2xl h-full w-full object-cover'
            />
          </div>
        )}
        {link ? (
          link?.map((post) => (
            <div>
              <h1 className='text-lg font-custom mb-1'>{post.name}</h1>
              <a
                href={post.link}
                className='font-custom text-sm text-[#6a8ebd] max-w-[268px] mt-2 cursor-pointer decoration-1'
                target='_blank'
              >
                {post.link}
              </a>
            </div>
          ))
        ) : (
          <div className='mt-6'>
            <h1 className='text-lg font-custom leading-6'>{name}</h1>
            <p className='font-custom text-sm text-[#737373] max-w-[268px] mt-2'>
              {description}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ModalBlock;
