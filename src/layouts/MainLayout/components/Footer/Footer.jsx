import {Link} from "react-router-dom";
import './Footer.css'
import {ReactComponent as Telegram} from 'src/assets/images/telegram-icon.svg'
import {ReactComponent as Instagram} from 'src/assets/images/instagramm-icon.svg'
import {ReactComponent as Facebook} from 'src/assets/images/facebook-icon.svg'
import {ReactComponent as Whatsapp} from 'src/assets/images/whatsapp-icon.svg'
import {ReactComponent as Logo} from 'src/assets/images/logo.svg'
import {HashLink} from "react-router-hash-link";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='footer__contact container'>
                    <div>
                        <span className='footer__contact-desc'>Для вопросов о сотрудничестве и заказе</span>
                        <p>user@gmail.com</p>
                    </div>
                    <div>
                        <span className='footer__contact-desc'>Написать нам в мессенджерах или позвонить</span>
                        <p>+998 90 003 65 62</p>
                    </div>
                    <div className='footer__network'>
                        <a href='#'><span className='icon'><Telegram/></span></a>
                        <a href='#'><span className='icon'><Instagram/></span></a>
                        <a href='#'><span className='icon'><Facebook/></span></a>
                        <a href='#'><span className='icon'><Whatsapp/></span></a>
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <div className='container footer__bottom-container'>
                    <Link className='footer__logo' to='/' >
                        <Logo/>
                    </Link>
                    <div className='footer__nav'>
                        <ul className='footer__nav-list'>
                            <li><HashLink to='/#about'>О компании</HashLink></li>
                            <li><HashLink to='/#contact'>Сотрудничество</HashLink></li>
                            <li><HashLink to='/#partners'>Наши партнёры</HashLink></li>
                            <li><HashLink to='/#contact'>Контакты</HashLink></li>
                        </ul>
                        <div className='footer__info'>
                            <div className='footer__summary'>
                                <p className="shadow">Copyright ©2023</p>
                                <p className="shadow">All rights received</p>
                            </div>
                            <p style={{color: "white"}}><span className="shadow">Created by :</span> S-orca </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer