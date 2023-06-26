import './Partners.css'
import {ReactComponent as Partner1} from "src/assets/images/partner-1.svg";
import {ReactComponent as Partner2} from "src/assets/images/partner-2.svg";
import {ReactComponent as Partner3} from "src/assets/images/partner-3.svg"


const Partners = () => {
    return (
        <section className='partners' id='partners'>
            <div className='container'>
                <h2 className='partners__title'>
                    Наши партнёры
                </h2>
                <ul className='partners__list'>
                    <li><Partner1/></li>
                    <li><Partner2/></li>
                    <li><Partner3/></li>
                    <li><Partner1/></li>
                    <li><Partner2/></li>
                    <li><Partner3/></li>
                    <li><Partner1/></li>
                    <li><Partner2/></li>
                </ul>
            </div>
        </section>
    )
}


export default Partners