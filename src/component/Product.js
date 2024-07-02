import React ,{useState,useEffect} from 'react';
import '../css/product.css';
import '../css/popup.css';
import Button from 'react-bootstrap/Button';
import img1 from '../images/ficon1.webp';
import Footer from './Footer';
import JsonFile from '../json/product1.json';

function Product(){
    const [message,setMessage]=useState('');
    const [details,setDetails]=useState([]);
    //const [JsonFile,setJsonFile]=useState({data:[]});
    console.log(JsonFile)
    /*useEffect(()=>{
        fetch('https://angegod.github.io/Testapi/product1.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data.length);
                //console.log(Json1File);
                setJsonFile(responseJson);
            })
            .catch((error) => {
            console.error(error);
        });
    },[setJsonFile])*/

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

        if(JsonFile.data.length!==0){
            const list=JsonFile.data.map((element,i)=>{
                return(<>
                    <Button variant='primary' key={i}>
                    <a href={'#'+element.id}>
                        <span>{element.subtitle}</span>
                    </a>
                    
                    </Button>
                </>)
            })
            
            return(<>{list}</>)
        }else{
            return(<></>)
        }

        
    }
    
    function SubRow({index,category}){/*一個商品區塊 透過flex能達到自動換行 */
        
        if(JsonFile.data.length!==0){
            var content=JsonFile.data[index];
        
        
            const lists=content.product.map((element,i)=><>
            <div className='productBox' onClick={()=>clickHandle(element)} key={i}>
                <div className='productImg'>
                    <img src={'https://angegod.github.io/Testapi'+element.imagesPath} width={250} height={250} alt='555' />
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
            <div className={"row "+category+" "+(index===0?'fadeIn':'')} id={category} key={category}>
                <div className='subtitle'>
                    <label>{content.subtitle}</label>
                </div>
                <div className='content'>
                    {lists}
                </div>
            </div></>)
        }else{
            return(<></>)
        }
    
        
    }

        if(JsonFile.data.length!==0){
            return (<>
                <div className='Product_main_sections'>
                    <div className='title'>
                        <span style={{color:'red',fontSize:'30px'}}>Product</span>
                        <h2 style={{color:'red',textAlign:'center'}}>我們的產品</h2>
                    </div>
                    <div className='buttons_group'>
                        <BtnList/>
                    </div>
                    <SubRow index={0} category={"motorComponent"}/>
                    <SubRow index={1} category={"carComponent"}/>
                    <div className='popup_sections'>
                        <div className='overlay' id="overlay">
                            <div class='popup'>
                                <div className='close' onClick={closehandle}>&#10006;</div>
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
        }else{
            return(<>Oh no!網站似乎出了問題，建議可以刷新網站重試</>)
        }
   
            
    
}

export default Product;