import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import Button from "src/components/Button/Button.jsx";
import {ReactComponent as DotMenu} from 'src/assets/images/dot-menu.svg'
import {ReactComponent as Logo} from 'src/assets/images/logo.svg'
import {ReactComponent as LogoBlack} from 'src/assets/images/logo-black.svg'
import {ReactComponent as HamburgerMenu} from "src/assets/images/hamburger-icon.svg";
import './Header.css'
import Sidebar from "src/layouts/MainLayout/components/Sidebar/Sidebar.jsx";

const Header = ({lightTheme = false}) => {
    const [navbar, setNavbar] = useState(lightTheme)
    const [sidebar, setSidebar] = useState(false)
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const changeBackground = () => {
        if (window.scrollY >= 66 || pathname !== '/') {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    const handleClick = () => {
        navigate('/')
        setTimeout(() => {
            const element = document.getElementById('products');
            if (element) {
                element.scrollIntoView();
            }
        }, 0);
    }
    return (
        <>
            <header className={`header${navbar ? ' active' : ''}`}>
                <div className='container header__container'>
                    <Link className='header__logo' to='/'>
                        {navbar ? <LogoBlack/> : <Logo/>}
                    </Link>
                    <nav className='header__nav'>
                        <div>
                            <Button onClick={handleClick} color={navbar ? 'black' : 'white'}><DotMenu
                                className={navbar ? 'catalog-icon black-dots' : 'catalog-icon'}/> Каталог</Button>
                            <ul className={`nav-list${navbar ? ' active' : ''}`}>
                                <li><HashLink className='header__link' to='/#about'>О компании</HashLink></li>
                                <li><HashLink className='header__link' to='/#contact'> Сотрудничество</HashLink></li>
                                <li><HashLink className='header__link' to='/#partners'>Наши партнёры</HashLink></li>
                                <li><HashLink className='header__link' to='/#contact'>Контакты</HashLink></li>
                            </ul>
                        </div>
                        <div className='header__btn-wrapper'>
                            <Button color={navbar ? 'black' : 'white'}>+998 73 543-22-05</Button>
                            <Button onClick={() => setSidebar(true)} color={navbar ? 'black' : 'white'}
                                    style={{padding: "19px 25px", marginLeft: "4px"}}>
                                <HamburgerMenu className={navbar ? 'blackHamburger' : ''}/>
                            </Button>
                        </div>
                    </nav>
                </div>
            </header>
            <Sidebar setSidebar={setSidebar} sidebar={sidebar}/>
        </>

    )
}

export default Header