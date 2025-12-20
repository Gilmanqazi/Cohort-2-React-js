import React from 'react';
import Navbar from "./components/Section-1/Navbar.jsx"
import Section1 from './components/Section-1/Section1.jsx';
import Section2 from "./components/Section2/Section2.jsx"

const App = () => {
  return (
    <div  className='bg-black h-[120vh]'>
      <Navbar/>
      <Section1/>
      <Section2/>
    </div>
  );
};

export default App;