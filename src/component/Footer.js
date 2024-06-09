import React from 'react';
import Product from '../component/Product';
import App from '../App';
import {Routes,Route, Link} from 'react-router-dom';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import img1 from '../images/ficon1.webp';
import img2 from '../images/ficon2.webp';
import img3 from '../images/ficon3.webp';


function Footer(){
    
    function scrollDown(id){
        var ImgNode=document.getElementById('icon'+id);
        ImgNode.classList.add('down');
    }

    function cancelScrollDown(id){
        var ImgNode=document.getElementById('icon'+id);
        ImgNode.classList.remove('down');
    }
    
    return(<>
        <div className='footer'>
            <div className='navbar'>
                <ul>
                    <li><Link to="/">主頁</Link></li>
                    <li><Link to="/About">關於我們</Link></li>
                    <li><Link to="/Product">產品</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/Home" element={<App/>} />
                <Route path="/About" element={<><label>4555555</label></>} />
                <Route path="/Product" element={<Product/>} />
            </Routes>
            <div>
                <div className='media'>
                    <div className='media_image'>
                        <a href={'#'} onMouseEnter={()=>{scrollDown('1')}} onMouseLeave={()=>cancelScrollDown('1')}>
                            <div style={{width:'46px',height:'45px',overflow:'hidden'}} >
                                <img src={img1} alt='5555'  style={{position:'relative'}} id={'icon1'}/>   
                            </div>
                        </a>
                    </div>
                    <div className='media_image'>
                        <a href={'#'} onMouseEnter={()=>{scrollDown('2')}} onMouseLeave={()=>cancelScrollDown('2')}>
                            <div style={{width:'46px',height:'45px',overflow:'hidden'}} >
                                <img src={img2} alt='5555'  style={{position:'relative'}} id={'icon2'}/>
                            
                            </div>
                        </a>
                    </div>
                    <div className='media_image'>
                        <a href={'#'} onMouseEnter={()=>{scrollDown('3')}} onMouseLeave={()=>cancelScrollDown('3')}>
                            <div style={{width:'46px',height:'45px',overflow:'hidden'}} >
                                <img src={img3} alt='5555'  style={{position:'relative'}} id={'icon3'}/>
                            </div>
                        </a>
                    </div>
                    
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