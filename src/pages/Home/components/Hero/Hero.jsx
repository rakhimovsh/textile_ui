import './Hero.css'
import Button from "src/components/Button/Button.jsx";

import {ReactComponent as ArrowRight} from 'src/assets/images/arrow-right.svg'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container hero__container'>
                <h1 className='hero__title'>
                    Трикотажное плотно в заказ в необходимом количестве
                    <Button color='green' style={{marginLeft: 25}}>заказать <ArrowRight className='hero__arrow-icon'/></Button>
                </h1>
            </div>
            <div className='hero__bg'></div>

        </section>
    )
}

export default Hero