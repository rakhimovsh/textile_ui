import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Products from "./components/Products/Products.jsx";
import HorizontalText from "./components/HorizontalText/HorizontalText.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import Video from "./components/Video/Video.jsx";
import Partners from "./components/Partners/Partners.jsx";
import Contact from "src/pages/Home/components/Contact/Contact.jsx";


const Home = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Products/>
            <HorizontalText/>
            <Catalog/>
            <Video/>
            <Partners/>
            <Contact/>
        </>
    )
}


export default Home