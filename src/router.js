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

export const Router = () => {
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
        <Route path={`${PATHS.ACCESSORIES}/*`} element={<Accessories />} />
        <Route path={`${PATHS.PRODUCT_PAGE}/:id`} element={<ProductPage />} />
        <Route path={`${PATHS.FAKE_PRODUCT}`} element={<FakeProduct />} />
      </Routes>
    </BrowserRouter>
  );
};
