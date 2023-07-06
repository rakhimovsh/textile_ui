import './Partners.css'
import {ReactComponent as Partner1} from "src/assets/images/partner-1.svg";
import {ReactComponent as Partner2} from "src/assets/images/partner-2.svg";
import {ReactComponent as Partner3} from "src/assets/images/partner-3.svg"
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
                    <li  data-aos="flip-left" data-aos-duration="1000"><Partner1/></li>
                    <li  data-aos="flip-left" data-aos-duration="1000"><Partner2/></li>
                    <li  data-aos="flip-left" data-aos-duration="1000"><Partner3/></li>
                    <li  data-aos="flip-left" data-aos-duration="1000"><Partner1/></li>
                    <li  data-aos="flip-left" data-aos-duration="1000"><Partner2/></li>
                    <li  data-aos="flip-left" data-aos-duration="1000"><Partner3/></li>
                    <li  data-aos="flip-left" data-aos-duration="1000"><Partner1/></li>
                    <li  data-aos="flip-left" data-aos-duration="1000"><Partner2/></li>
                </ul>
            </div>
        </section>
    )
}


export default Partners