import React from 'react';
import Navbar from './components/Navbar';
import Section1 from './components/Section-1/Section1';
import Section2 from './components/Section-2/Section2';
import Section3 from './components/Section-3/Section3';

const App = () => {
  return (
    <div className='bg-black h-[100%] w-[100%]'>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  );
};

export default App;