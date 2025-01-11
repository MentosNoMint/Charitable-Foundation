import React from 'react';
import Project from './Project';
import Ivent from './Ivent';
import Cooperation from './Cooperation';
import ModalBlock from '../ui/ModalBlock';
import Films from './Films';
import Articles from './Articles';
import Rubric from './Rubric';
const PublicationsContent = () => {
  return (
    <div className='w-full flex flex-col mt-[6rem] ' id='publications'>
      <Project />
      <Ivent />
      <Cooperation />
      <Rubric />
      <div className='w-full flex justify-between flex-wrap mt-[4.25rem]'>
        <Films />
        <Articles />
      </div>
    </div>
  );
};

export default PublicationsContent;
