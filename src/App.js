import React ,{useEffect}from 'react';
import mainstyles from '../src/css/mainpage.module.css';
import '../src/css/menu.css';

import Section from './component/Section';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(()=>{
    fetch('https://api.mihomo.me/sr_info/805268077')
    .then((res)=>{
      console.log(res.json());
    })
    .then((result)=>{
      console.log(result);
    });


  },[])
  
  return (
    <>
      <div className='app'>
        <div className={mainstyles.header}>
          <div className={mainstyles.maintext}>
            <div className={mainstyles.mainLabel}>
              <label>ABC機車行</label><br/>
              <p><span>我們致力於提供最高品質的產品給顧客，讓顧客滿意是我們的宗旨之一</span></p>
              <p><span>此網站之任何創作內容均為學習用途，無商業目的</span></p>
            </div>
          </div>
        </div>
        <Section type={'about'} reverse={false}/>
        <Section type={'product'} reverse={true}/>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
