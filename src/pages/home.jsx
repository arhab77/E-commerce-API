import Banner from "../componennt/banner/banner";
import BrandComponent from "../componennt/brand/brand";
import CategoryComponent from "../componennt/category/category";
import FooterComponent from "../componennt/footer/footer";
import Header from "../componennt/header/header";
import NavigationBar from "../componennt/navigationBar/navbar";
import ProductComponent from "../componennt/product/product";
import PromoComponent from "../componennt/promo/promo";
import RecomendProduct from "../componennt/recomend/recomed";
import ServiceComponent from "../componennt/service/servis";

const HomePage = () => {
    return(
        <div>
            <Header/>
            <hr />
            <NavigationBar/>
            <Banner/><br />
            <RecomendProduct/> <br />
            <CategoryComponent/>
            <PromoComponent/>
            <ProductComponent/>
            <BrandComponent/>
            <ServiceComponent/>
            <FooterComponent/>
        </div>
    )
}

export default HomePage;