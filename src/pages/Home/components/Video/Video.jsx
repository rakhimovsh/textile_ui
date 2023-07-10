import AOS from "aos";
import { useEffect } from "react";
import CountUp from "react-countup";
import './Video.css'
import MockVideo from 'src/assets/images/mock-video.jpg'


const Video = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section className='video' id='about'>
            <div className='container video__container'>
                <div className='video__desc'>
                    <p><b style={{ fontSize: 18 }}>HU ONE</b> collection
                        является ведущими производителями тканей, использующими современные технологии и передовые станки. Наша компания гордится своей способностью выполнить заказы любого объема и сложности, обеспечивая высокое качество продукции.

                        Контроль качества - наш приоритет
                        <span className="hide">
                            Мы придаем огромное значение контролю качества на всех этапах производства. Наши опытные технологи бережно следят за каждым шагом процесса изготовления тканей. Это позволяет нам гарантировать стабильно высокое качество продукции и удовлетворение потребностей наших клиентов.
                        </span>
                        <br />
                        Выбирайте Huone collection - выбирайте надежность и качество.</p>
                    <span className="more">более</span>
                    <h2> &gt;<CountUp end={200} duration={4} /> станков</h2>
                </div>
                <div className='video__src' data-aos="zoom-in">
                    <img src={MockVideo} alt='video' />
                </div>
            </div>
        </section>
    )
}

export default Video