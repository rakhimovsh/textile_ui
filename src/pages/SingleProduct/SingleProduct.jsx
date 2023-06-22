import ProductInfo from "src/pages/SingleProduct/components/ProductInfo/ProductInfo.jsx";
import Breadcrumb from "src/pages/SingleProduct/components/Breadcrumb/Breadcrumb.jsx";
import RecommendedProducts from "src/pages/SingleProduct/components/RecommendedProducts/RecommendedProducts.jsx";


const SingleProduct = () => {

    return (
        <>
            <Breadcrumb/>
            <ProductInfo/>
            <RecommendedProducts/>
        </>
    )
}

export default SingleProduct