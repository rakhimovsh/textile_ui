import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import Products from "src/pages/Products/Products.jsx";
import SingleProduct from "src/pages/SingleProduct/SingleProduct.jsx";


const Router = () =>{
    return (
        <Routes>
            <Route path='/*' element={<MainLayout/>}>
                <Route index element={<Home/>} />
                <Route path='products' element={<Products/>}/>
                <Route path='product/:productId' element={<SingleProduct/>}/>
            </Route>
        </Routes>
    )
}


export default Router