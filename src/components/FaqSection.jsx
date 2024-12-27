import React, { useState } from 'react';
import { faq } from '../constans';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState()

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex !== index && index)
  }

  return (
    <div className='max-w-[1196px] w-full flex items-center flex-col mt-[6.5rem]'>
      <h1 className='heading-size mb-12'>Часто задаваемые вопросы</h1>
      {faq.map((faq, index) => (
        <div className='flex flex-col w-full mt-8 cursor-pointer'
          key={index}
          onClick={() => toggleFaq(index)}
        >
          <div className='flex w-full justify-between font-custom items-center'>
            <span className='text-[2rem]'>{faq.question}</span>
            <img src='/assets/images/plus-icon.svg' alt='plus' />
          </div>
          <div className='w-full h-px bg-[#E1E1E1] mt-9'></div>
          {activeIndex === index && <span className='font-custom mt-4'>{faq.answer}</span>}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
