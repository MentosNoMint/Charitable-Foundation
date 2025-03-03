import React from 'react';
import PublicationsContent from './PublicationsContent';

const PublicationsSection = () => {
  return (
    <div className='w-full flex flex-col max-w-[74.75rem] mt-[5.75rem] max-book:px-6'>
      <div>
        <span className='font-sm font-custom bg-[#F5FFC2] px-5 py-2.5 rounded-full '>
          Публикации
        </span>
      </div>
      <h1 className='heading-size max-w-[49.75rem] mt-5 max-md:text-[2.5rem]'>
        Публикации, истории и отчеты фонда — все, что важно знать о нашей работе
      </h1>
      <div
        className='w-full h-[30.5rem] bg-light-gray mt-[5.75rem] rounded-[2rem] font-custom px-9 py-9 flex flex-wrap max-sm:h-[55rem] max-md:h-[50rem]'
        id='history'
      >
        <div className='flex flex-col'>
          <h1 className='text-3xl'>История #1</h1>
          <span className='font-custom text-lg mt-auto max-w-[45rem] max-md:mt-5 max-sm:text-base'>
            Лишь став мамой, я поняла, как много нежности и тепла таило в себе
            мое сердце! Как много слов любви и теплых объятий мне хочется дарить
            своей малышке! Как сильно хочется прижимать к сердцу свое родное
            дитя. Теперь я знаю. Что моя кроха делает меня еще более ЛЮБЯЩЕЙ,
            ЖЕНСТВЕННОЙ, МУДРОЙ! Она делает меня самым ценным человеком на
            земле. Она делает меня МАМОЙ!
          </span>
        </div>
        <div className='max-w-[20rem] ml-auto max-md:ml-0 max-book:hidden max-md:flex max-sm:mt-2'>
          <img
            src='/assets/images/history1.png'
            alt='history'
            className='h-full w-full object-cover rounded-[2rem]'
          />
        </div>
      </div>
      <div className='w-full h-[30.5rem] bg-light-gray rounded-[2rem] font-custom px-9 py-9 flex mt-6 flex-wrap max-sm:h-[60rem] max-md:h-[52rem]'>
        <div className='flex flex-col'>
          <h1 className='text-3xl'>История #2</h1>
          <span className='font-custom text-lg mt-auto max-w-[45rem] max-md:mt-5 max-sm:text-base'>
            Два года назад я тоже собиралась делать аборт. Причин было много:
            мне только 18, мужа нет, даже первый курс еще не закончила. Уже
            записалась. В последний момент передумала. Господи! Как же я сейчас
            счастлива! У меня Чудесный малыш, даже папа его тоже теперь с нами,
            хотя уговаривал сделать аборт усерднее всех. Не устаю повторять:
            «Спасибо тебе Господи. Что не дал совершить ошибку!». Действительно,
            многое из того, что кажется неразрешимым, решается само собой.
          </span>
        </div>
        <div className='max-w-[21.5rem] ml-auto rounded-[2rem] max-md:ml-0 max-book:hidden max-md:flex max-sm:mt-2'>
          <img src='/assets/images/history3.png' alt='history' className='rounded-[2rem] h-full w-full object-cover'/>
        </div>
      </div>
      <div className='w-full h-[30.5rem] bg-main-green rounded-[2rem] font-custom px-9 py-9 flex mt-6 flex-wrap max-sm:h-[60rem] max-md:h-[52rem]'>
        <div className='flex flex-col'>
          <h1 className='text-3xl'>История #3</h1>
          <span className='font-custom text-lg mt-auto max-w-[45rem] max-md:mt-5 max-sm:text-base'>
            У меня было 2 сына, когда я забеременела в третий раз…отец детей
            сказал: «Или я или ребенок! Иди на аборт!» Сегодня в 10 утра младший
            сын ушел из дома с приятелем. Где –то после 12 часов вернулся… «Мам
            – это тебе! «Я тебя очень люблю!» —и протянул мне крупную ярко
            красную розу…Раздавал рекламки. Заработал 150 рублей… Глядя на сына,
            вспомнила, как 12 лет назад я положила свою ладошку на животик и
            шепнула: «МАЛЫШ! Я ВЫБИРАЮ ТЕБЯ!!!»
          </span>
        </div>
        <div className='max-w-[21.5rem] ml-auto rounded-[2rem] max-md:ml-0 max-book:hidden max-md:flex max-sm:mt-2'>
          <img src='/assets/images/history2.png' alt='history' className='rounded-[2rem] h-full w-full object-cover'/>
        </div>
      </div>
      <PublicationsContent />
    </div>
  );
};

export default PublicationsSection;
