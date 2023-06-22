import './Breadcrumb.css'
import {ReactComponent as HomeIcon} from "src/assets/images/home-icon.svg";
import {Link} from "react-router-dom";


const Breadcrumb = () =>{
    return (
        <section className='container'>
            <div className='breadcrumb'>
                <Link to='/'><HomeIcon/>Главная  </Link> | <Link to='products'>Материалы</Link> | Ткани для платьев и рубашек
            </div>
        </section>
    )
}


export default Breadcrumb