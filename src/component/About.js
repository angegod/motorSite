import React from 'react';
import Footer from '../component/Footer';
import '../css/about.css';


function About(){
    window.onload=function(){
        document.getElementById('aboutSections').classList.add('shows');
    }
    
    
    return(<>
        <div className='About_main_sections' id="aboutSections">
            <div className='title'>
                <span style={{color:'red',fontSize:'30px'}}>About 關於我們</span>
            </div>
            <div className='content'>
                <span><p>深耕於高雄郊區的一間機車材料行，儘管規模並不像其他業者，但我們秉持的理念始終如一:提供高品質的產品以及優良的售後服務</p></span>
                <span><p>
                    目前提供實體店面跟網路平台兩種服務管道，有興趣購賣本店商品的顧客，也可以撥打下面電話來進一步洽詢。
                    </p></span>
                <span><p>如果有碰到一些機車零件相關問題，也歡迎來電詢問!</p></span>
            </div>
            <div className='location'>
                <div className='location_details'>
                    <div className='locate_names'>
                        <label style={{color:'brown',fontWeight:'bold'}}>高雄本店</label>
                    </div>
                    <div className='contact_details' >
                        <label>地址:高雄市XXXXXXX路XXX號<i class="fa fa-map-marker" style={{fontSize:'20px'}}></i></label><br/>
                        <label>電話:07123456789<i class="fa fa-shopping-bag" aria-hidden="true" style={{fontSize:'20px'}}></i></label><br/>
                        <label>聯絡信箱:abcdefghijk@gmail.com<i class="fa fa-envelope" aria-hidden="true" style={{fontSize:'20px'}}></i></label>
                    </div>
                </div>
                <div className='googlemap'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7365.786460088149!2d120.30277676688235!3d22.620461916675204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e049b9f1760a5%3A0x344465d114abb19!2z6auY6ZuE5biC5pS_5bqcIOWbm-e2reihjOaUv-S4reW_gw!5e0!3m2!1szh-TW!2stw!4v1711444732271!5m2!1szh-TW!2stw" width="300" height="225"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default About;
