import { Product } from "../../app/models/products";
import ProductCard from "./ProductCard";
import './ProductCard.css';

interface ProductListProps {
    products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="ProductListContainer">
            {products?.map((item) => (
                <ProductCard product={item} />
            ))}
        </div>

    )
}

export default ProductList
