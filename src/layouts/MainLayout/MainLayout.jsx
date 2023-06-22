import {Outlet} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import styles from './styles.module.css'


const MainLayout = () => {
    const location = useLocation()
    return <>
        <Header/>
        <main className={location.pathname !== "/" ? styles.padding: ''}>
            <Outlet/>
        </main>
        <Footer/>
    </>
}


export default MainLayout