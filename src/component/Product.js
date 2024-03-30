import React ,{useState} from 'react';
import '../css/product.css';
import '../css/popup.css';
import JsonFile from '../json/product1.json';
import Button from 'react-bootstrap/Button';
import img1 from '../images/ficon1.webp';
import Footer from './Footer';

function Product(){

    window.onscroll=function(){/*當螢幕滾動時，偵測產品行是否出現在視窗視野中 */
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

    const [message,setMessage]=useState('');
    const [details,setDetails]=useState([]);

    function clickHandle(element){
        setMessage(element.productName);
        setDetails(element.details);
        document.getElementById("overlay").style.display="block";
    }

    function closehandle(){
        document.getElementById("overlay").style.display="none";
    }

    function Details(){
        const showDetails=details.map((d)=><><span>{d}</span><br/></>)

        return(<>{showDetails}</>)
    }

    function scrollDown(id){
        var ImgNode=document.getElementById(id+'icon');
        ImgNode.classList.add('down');
    }

    function cancelScrollDown(id){
        var ImgNode=document.getElementById(id+'icon');
        ImgNode.classList.remove('down');
    }

    function BtnList(){
        const list=JsonFile.map((element,i)=>{
            

            return(<>
                <Button variant='primary' onMouseEnter={()=>{scrollDown(element.id)}} onMouseLeave={()=>cancelScrollDown(element.id)}>
                <a href={'#'+element.id}>
                    <div style={{width:'46px',height:'46px',overflow:'hidden'}} >
                        <img src={img1} alt='5555'  style={{position:'relative'}} id={element.id+'icon'}/>
                    </div>
                   {element.subtitle}
                </a>
                </Button>
            </>)
        }
            
        )
        
        return(<>{list}</>)
    }
    
    function SubRow({index,category}){/*一個商品區塊 透過flex能達到自動換行 */
        var content=JsonFile[index];
        
        const lists=content.product.map((element,i)=><>
            <div className='productBox' onClick={()=>clickHandle(element)} key={i}>
                <div className='productImg'>
                    <img src={element.imagesPath} width={250} height={250} alt='555'/>
                </div>
                <div className='productName'>
                    <span>{element.productName}</span>
                </div>
                <div className='productPrice'>
                    <span>{element.price}</span>
                </div>
            </div>
        </>)

    
        return(<>
            <div className={"row "+category+" "+(index===0?'fadeIn':'')} id={category}>
                <div className='subtitle'>
                    <label>{content.subtitle}</label>
                </div>
                <div className='content'>
                    {lists}
                </div>
            </div>
        </>)
    }


    
    return (<>
        <div className='Product_main_sections'>
            <div className='title'>
                <h2 style={{color:'red',fontWeight:800,textAlign:'center'}}>我們的產品</h2>
            </div>
            <div className='buttons_group'>
                <BtnList/>
            </div>
            <SubRow index={0} category={"motorComponent"}/>
            <SubRow index={1} category={"carComponent"}/>
            <div className='popup_sections'>
                <div className='overlay' id="overlay">
                    <div class='popup'>
                        <div class='close' onClick={closehandle}>&#10006;</div>
                        <div className='productName'>{message}</div>
                        <div className='details'>
                            <Details/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>)
}

export default Product;