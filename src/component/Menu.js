import React from 'react';
import Product from '../component/Product';
import About from '../component/About';

import {Routes,Route, Link} from 'react-router-dom';
import App from '../App';




function Menu(){
    
    window.onscroll=function(){
        var B = document.body;
        var DHeight = document.documentElement; //IE with doctype
        
    
        DHeight = (DHeight.clientHeight)? DHeight: B;
    
        if (DHeight.scrollTop !== 0){
            document.getElementById('menu').classList.add('whites');
        }else{
            document.getElementById('menu').classList.remove('whites');
        }
        
        /*當螢幕滾動時，偵測產品行是否出現在視窗視野中 */
        
        var productRows=document.querySelectorAll(".row");
        
        productRows.forEach((row,index)=>{
            var rect = row.getBoundingClientRect();
            var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

            if(rect.bottom < 200 || rect.top - viewHeight >=-200){
                row.classList.remove("fadeIn");
            }else{
                row.classList.add("fadeIn");
            }

            
        })

    }


    return(<>
        <div className='menu' id="menu" style={{position:'fixed',zIndex:9999}}>
            <ul>
                <li><Link to="/Home">主頁</Link></li>
                <li><Link to="/About">關於我們</Link></li>
                <li><Link to="/Product">產品</Link></li>
            </ul>
        </div>
        
        <Routes>
            <Route path="*" element={<App/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Product" element={<Product/>} />
        </Routes>
        
    </>)
}

export default Menu;