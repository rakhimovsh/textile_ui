import './About.css'
import Button from "src/components/Button/Button.jsx";
import { ReactComponent as ArrowRight } from "src/assets/images/arrow-right.svg";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate()

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const handleClick = () => {
        navigate('/')
        setTimeout(() => {
            const element = document.getElementById('about');
            if (element) {
                element.scrollIntoView();
            }
        }, 0);
    }
    return (
        <section className='about'>
            <div className='container about__container'>
                <div>
                    <h2 className='about__title'>
                        Почему HU ONE Collection
                    </h2>
                    <Button onClick={handleClick} color='black'>Подробнее о компании <ArrowRight className='about__arrow-icon' /></Button>
                </div>
                <div>
                    <div className='about__heading-wrapper' data-aos="fade-left">
                        <h3 className='about__heading'>
                            Надежный производитель текстиля из Китая
                        </h3>
                        <p className='about__desc'>
                            Мы являемся производителями и поставщиками текстиля из Китая, осуществляющими доставку по всему миру. Сотрудничество с нами гарантирует вам непрерывные поставки высококачественного текстиля в оговоренные сроки по фиксированной цене.
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
                                +<CountUp end={200} duration={7} />
                            </h3>
                            <p>
                                ткацких станков
                            </p>
                        </div>
                        {/* <div>
                            <h3>
                                +<CountUp end={13} duration={7} />
                            </h3>
                            <p>
                                лет на рынке
                            </p>
                        </div> */}
                        <div>
                            <h3>
                                +<CountUp end={30} duration={7} />
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