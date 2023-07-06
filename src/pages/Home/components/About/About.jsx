import './About.css'
import Button from "src/components/Button/Button.jsx";
import {ReactComponent as ArrowRight} from "src/assets/images/arrow-right.svg";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const About = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section className='about'>
            <div className='container about__container'>
                <div>
                    <h2 className='about__title'>
                        Почему Magic Materials
                    </h2>
                    <Button color='black'>Подробнее о компании <ArrowRight className='about__arrow-icon'/></Button>
                </div>
                <div>
                    <div className='about__heading-wrapper' data-aos="fade-left">
                        <h3 className='about__heading'>
                            Надёжный поставщик
                        </h3>
                        <p className='about__desc'>
                            Мы производим ткань по современным технологиям и на актуальных станках. Обеспечим любой объёми сложность заказа ткани.
                        </p>
                    </div>
                    <div className='about__heading-wrapper' data-aos="fade-left">
                        <h3 className='about__heading'>
                            Контроль качества
                        </h3>
                        <p className='about__desc'>
                            Проводим контроль производства опытными технологами на всех этапах изготовления, чтобы получить продукт стабильно высокого качества
                        </p>
                    </div>
                    <div className='about__product-info'>
                       <div>
                           <h3>
                               +<CountUp  end={467} duration={7}/>
                           </h3>
                           <p>
                               ткацких станков
                           </p>
                       </div>
                        <div>
                            <h3>
                                +<CountUp end={13} duration={7}/>
                            </h3>
                            <p>
                                лет на рынке
                            </p>
                        </div>
                        <div>
                            <h3>
                                +<CountUp end={89} duration={7}/>
                            </h3>
                            <p>
                                тонн сырья в сутки
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About