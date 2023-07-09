import './Partners.css'
import { ReactComponent as Partner1 } from "src/assets/images/partner.svg";
import { ReactComponent as Partner2 } from "src/assets/images/partner-2.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Partners = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section className='partners' id='partners'>
            <div className='container'>
                <h2 className='partners__title'>
                    Наши партнёры
                </h2>
                <ul className='partners__list'>
                    <li data-aos="flip-left" data-aos-duration="1000"><Partner1 style={{ width: 166, height: 108 }} /></li>
                    <li data-aos="flip-left" data-aos-duration="1000"><Partner2 /></li>
                </ul>
            </div>
        </section>
    )
}


export default Partners