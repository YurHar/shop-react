import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATHS } from "./helpers/constant";
import { HomePage } from "./pages/home-page";
import { About } from "./pages/about";
import { TShirt } from "./pages/products/clothing";
import { Accessories } from "./pages/products/accessories";
import { ShopBox } from "./pages/shop-box";
import { Login } from "./pages/login";
import { ProductPage } from "./pages/productPage/ProductPage";
import { FakeProduct } from "./pages/productPage/fakeProduct";
import {ProductTable} from "./pages/table/ProductTable";
import {Faq} from "./pages/faq/index"
import { ContactsUs } from "./pages/contact";

export const Router = () => {
<<<<<<< HEAD
    return (
        <BrowserRouter>
            <App />
            <Routes>
                <Route path={PATHS.ROOT} element={<HomePage/>}/>
                <Route path={PATHS.HOME} element={<HomePage/>}/>
                <Route path={PATHS.CLOTHING} element={<Clothing/>}/>
                <Route path={PATHS.ACCESSORIZE} element={<Accessorize/>}/>
                <Route path={PATHS.ABOUT} element={<About/>}/>
                <Route path={PATHS.SHOP_BOX} element={<ShopBox/>}/>
                <Route path={PATHS.LOGIN} element={<Login/>}/>
                <Route path={PATHS.PRODUCT_TABLE} element={<ProductTable/>}/>
                <Route path={PATHS.FAQ} element={<Faq/>}/>
                <Route path={PATHS.CONTACTS} element={<ContactsUs/>}/>
                <Route path={`${PATHS.T_SHIRT}/*`} element={<TShirt/>}/>
                <Route path={`${PATHS.HOODIE}/*`} element={<Hoodie/>}/>
            </Routes>

        </BrowserRouter>
    );
}
=======
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route path={PATHS.ROOT} element={<HomePage />} />
        <Route path={PATHS.HOME} element={<HomePage />} />
        <Route path={PATHS.ABOUT} element={<About />} />
        <Route path={PATHS.SHOP_BOX} element={<ShopBox />} />
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={`${PATHS.CLOTHING}/*`} element={<TShirt />} />
        <Route path={PATHS.ProductTable} element={<ProductTable/>}/>
        <Route path={PATHS.Faq} element={<Faq/>}/>
        <Route path={PATHS.Contacts} element={<ContactsUs/>}/>
        <Route path={`${PATHS.ACCESSORIES}/*`} element={<Accessories />} />
        <Route path={`${PATHS.PRODUCT_PAGE}/:id`} element={<ProductPage />} />
        <Route path={`${PATHS.FAKE_PRODUCT}`} element={<FakeProduct />} />
      </Routes>
    </BrowserRouter>
  );
};
>>>>>>> development
