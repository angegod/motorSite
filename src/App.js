import React from 'react';
import mainstyles from '../src/css/mainpage.module.css';
import '../src/css/menu.css';

import Section from './component/Section';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
      <div className='app'>
        <div className={mainstyles.header}>
          
        </div>
        <Section type={'about'} reverse={false}/>
        <Section type={'product'} reverse={true}/>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
