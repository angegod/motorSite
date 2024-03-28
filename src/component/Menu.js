import React,{useEffect} from 'react';
import Product from '../component/Product';
import About from '../component/About';

import {Routes,Route, Link,useLocation} from 'react-router-dom';
import App from '../App';




function Menu(){
    const location=useLocation();

    useEffect(() => {
        // execute on location change
        
        console.log('Location changed!', location.pathname);
    }, [location]);

    window.onscroll=function(){
        var B = document.body;
        var DHeight = document.documentElement; //IE with doctype
        
    
        DHeight = (DHeight.clientHeight)? DHeight: B;
    
        if (DHeight.scrollTop !== 0){
            document.getElementById('menu').classList.add('whites');
        }else{
            document.getElementById('menu').classList.remove('whites');
        }        
    }


    return(<>
        <div className='menu' id="menu" style={{position:'fixed',zIndex:9999}}>
            <ul>
                <li><Link reloadDocument to="/motorSite/Home">主頁</Link></li>
                <li><Link reloadDocument to="/motorSite/About">關於我們</Link></li>
                <li><Link reloadDocument to="/motorSite/Product">產品</Link></li>
            </ul>
        </div>
        
        <Routes>
            <Route exact path="/motorSite/Home" element={<App/>} />
            <Route exact path="/motorSite/About" element={<About/>} />
            <Route exact path="/motorSite/Product" element={<Product/>} />
        </Routes>
        
    </>)
}

export default Menu;