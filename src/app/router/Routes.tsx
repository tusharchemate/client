import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import BasketPage from "../../features/basket/basketPage";

export const routes = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            path: 'catalog', element: <Catalog />
        },
        {
            path: 'catalog/:id', element: <ProductDetails />,
        },

        {
            path: 'basket', element: <BasketPage />,
        }
    ]

}])