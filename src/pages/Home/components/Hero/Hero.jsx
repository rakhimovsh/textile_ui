import './Hero.css'
import Button from "src/components/Button/Button.jsx";
import slideImage from '../../../../components/data';


import { ReactComponent as ArrowRight } from 'src/assets/images/arrow-right.svg'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Hero = () => {
    const [currentState, setCurrentState] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() =>{
            if(currentState ==1){
                setCurrentState(0)
            }else{
                setCurrentState(currentState+1)
            }
        },9000)
        return ()=> clearTimeout(timer)   
        
    }, [currentState]);

    const bgStyle = {
        backgroundImage: `url(${slideImage[currentState].url})`,
        transition: '1s'
    }

    const navigate = useNavigate()
    return (
        <section className='hero'>
            <div className='container hero__container' >
                <h1 className='hero__title'>
                    Финки для мужчин из хлопка и синтетики
                    <Button onClick={() => navigate('products')} color='green'>Подробнее <ArrowRight className='hero__arrow-icon' /></Button>
                </h1>
                <div className='carusel_btns'>
                    {slideImage.map((imageSlide, currentState)=>{
                      return <button className='btn1' key={currentState} onClick={()=>{setCurrentState(currentState)}}>{imageSlide.id}</button>
                    })
                    }
                </div>
            </div>
            <div   className='hero__bg' style={bgStyle}></div>
        </section>
    )
}

export default Hero