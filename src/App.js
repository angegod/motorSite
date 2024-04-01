import React ,{useEffect}from 'react';
import mainstyles from '../src/css/mainpage.module.css';
import '../src/css/menu.css';

import Section from './component/Section';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  
  useEffect(() => {
      const getPosts = async () => {
      const resp = await fetch('https://angegod.github.io/Testapi/product.json');
      const postsResp = await resp.json();
      console.log(postsResp.data[0]);
    };
     getPosts();
    }, []);

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
