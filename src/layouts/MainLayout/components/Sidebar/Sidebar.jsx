import Button from "src/components/Button/Button.jsx";
import {ReactComponent as Close} from "src/assets/images/close.svg";
import './Sidebar.css'


const Sidebar = ({sidebar, setSidebar}) => {
    return (
        <div className={`sidebar${sidebar ? ' open' : ''}`}>
            <div className='sidebar__header'>
                <Button onClick={() => setSidebar(false)} color='green'
                        style={{padding: "12px 28px", fontSize: "0"}}><Close/></Button>
            </div>
            <ul className='sidebar__list'>
                <li>
                    <a href='#catalog'>Каталог</a>
                </li>
                <li>
                    <a href='#about'> - О компании</a>
                </li>
                <li>
                    <a href='#'>Сотрудничество</a>
                </li>
                <li>
                    <a>Наши партнёры</a>
                </li>
                <li>
                    <a>Контакты</a>
                </li>
            </ul>
        </div>
    )
}


export default Sidebar