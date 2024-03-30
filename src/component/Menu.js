import React,{useEffect} from 'react';
import Product from '../component/Product';
import About from '../component/About';

import {Routes,Route, Link,useLocation,createHashRouter,RouterProvider} from 'react-router-dom';
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
                <li><Link  to="/Home">主頁</Link></li>
                <li><Link  to="/About">關於我們</Link></li>
                <li><Link  to="/Product">產品</Link></li>
            </ul>
        </div>
        
        <Routes>
            <Route exact path="/Home" element={<App/>} />
            <Route exact path="/About" element={<About/>} />
            <Route exact path="/Product" element={<Product/>} />
        </Routes>
        
    </>)
}

export default Menu;