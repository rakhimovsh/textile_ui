import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
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
    const location = useLocation()
    const changeBackground = () => {
        if (window.scrollY >= 66 || location.pathname !== '/') {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })
    return (
        <>
            <header className={`header${navbar ? ' active' : ''}`}>
                <div className='container header__container'>
                    <Link className='header__logo' to='/'>
                        {navbar ? <LogoBlack/> : <Logo/>}
                    </Link>
                    <nav className='header__nav'>
                        <div>
                            <Button color={navbar ? 'black' : 'white'}><DotMenu
                                className={navbar ? 'catalog-icon black-dots' : 'catalog-icon'}/> Каталог</Button>
                            <ul className={`nav-list${navbar ? ' active' : ''}`}>
                                <li><a className='header__link' href='#about'>О компании</a></li>
                                <li><a className='header__link' href='/categories'> Сотрудничество</a></li>
                                <li><a className='header__link' href='/categories'>Наши партнёры</a></li>
                                <li><a className='header__link' href='/categories'>Контакты</a></li>
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