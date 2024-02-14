import {createBrowserRouter} from "react-router-dom";
import MainPage from "../Components/MainPage";
import ProductInfo from "../Components/Product/ProductInfo";
import CartPage from "../Components/Cart/CartPage";
import ProductsPage from "../Components/Product/ProductsPage";

const Router =createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            {
                path: '/',
                element: <ProductsPage />
            },
            {
                path: '/product/:id',
                element: <ProductInfo />
            },
        ]
    },
    {
        path: '/cart',
        element: <CartPage />
    }

])
export default Router;