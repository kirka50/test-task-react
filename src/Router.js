import {createBrowserRouter} from "react-router-dom";
import MainPage from "./MainPage";
import ProductPage from "./ProductPage";
import ProductInfo from "./ProductInfo";


const Router =createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/product/:id',
        element: <ProductPage />
    },
    {
        path: '/product/:id/:colorId',
        element: <ProductInfo />
    }
])
export default Router