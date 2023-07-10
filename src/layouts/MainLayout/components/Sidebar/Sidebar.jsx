import { HashLink } from "react-router-hash-link";
import Button from "src/components/Button/Button.jsx";
import { ReactComponent as Close } from "src/assets/images/close.svg";
import './Sidebar.css'


const Sidebar = ({ sidebar, setSidebar }) => {
    const handleLinks = () => {
        setSidebar(false)
    }
    return (
        <div className={`sidebar${sidebar ? ' open' : ''}`}>
            <div className='sidebar__header'>
                <Button onClick={() => setSidebar(false)} color='green'
                    style={{ padding: "12px 28px", fontSize: "0" }}><Close /></Button>
            </div>
            <ul className='sidebar__list'>
                <li>
                    <HashLink onClick={handleLinks} to='/#products'>Каталог</HashLink>
                </li>
                <li>
                    <HashLink onClick={handleLinks} to='/#about'> - О компании</HashLink>
                </li>
                <li>
                    <HashLink onClick={handleLinks} to='/#contact'>Сотрудничество</HashLink>
                </li>
                <li>
                    <HashLink onClick={handleLinks} to='/#partners'>Наши партнёры</HashLink>
                </li>
                <li>
                    <HashLink onClick={handleLinks} to='/#contact'>Контакты</HashLink>
                </li>
            </ul>
        </div>
    )
}


export default Sidebar