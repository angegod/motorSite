import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/section.css';

function Section({type,reverse}){
    console.log(reverse);

    if(reverse){
        return(<>
            <div className={'sections reverse '+type}>
                
                <div className='left'>

                </div>
                <div className='right'>
                    <div className='text'>
                        <p><span>我們期許成為最好的品牌，來保持我們的高競爭力。</span></p>
                    </div>
                    <div className='button'>
                        <Button variant='btn'>查看更多</Button>
                    </div>
                </div>
            </div>
        </>)

    }else{
        return(<>
            <div className={'sections '+type}>
                <div className='left'>
                </div>
                <div className='right'>
                    <div className='text'>
                        <p><span>我們致力於提供最好品質的產品，來讓消費者體驗性能更好的機車</span></p>
                    </div>
                    <div className='button'>
                        <Button variant='btn'>查看更多</Button>
                    </div>
                </div>
            </div>
        </>)
    }

    
}

export default Section;
