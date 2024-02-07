import { Product } from "../../app/models/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <>
            {products?.map((item) => (
                <ProductCard product={item} />
            ))}
        </>
    )
}

export default ProductList
