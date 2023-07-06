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
                    <p>Magic Materials — производитель текстиля и фурнитуры из Китая с доставкой по всей РФ и странам
                        СНГ. Сотрудничество с нами обеспечит вам бесперебойные поставки текстиля в указанный срок по
                        фиксированной цене.</p>
                    <span>более</span>
                    <h2> &gt;<CountUp end={500} duration={4}/> станков</h2>
                </div>
                <div className='video__src' data-aos="zoom-in">
                    <img src={MockVideo} alt='video'/>
                </div>
            </div>
        </section>
    )
}

export default Video