import React from 'react';
import Product from '../component/Product';
import App from '../App';
import {Routes,Route, Link} from 'react-router-dom';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer(){
    

    
    return(<>
        <div className='footer'>
            <div className='navbar'>
                <ul>
                    <li><Link to="/Home">主頁</Link></li>
                    <li><Link to="/About">關於我們</Link></li>
                    <li><Link to="/Product">產品</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/Home" element={<App/>} />
                <Route path="/About" element={<><label>4555555</label></>} />
                <Route path="/Product" element={<Product/>} />
            </Routes>
            <div className='space'>

            </div>
            <div>
                <div className='media'>
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-youtube"></a>
                    <a href="#" className="fa fa-instagram"></a>
                </div>
                <div className='information'>
                    <label>地址:高雄市XXXXXXX路XXX號</label><br/>
                    <label>電話:07123456789</label>
                </div>
            </div>
            

        </div>
    </>)
}

export default Footer;