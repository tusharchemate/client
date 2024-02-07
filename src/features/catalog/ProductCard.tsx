import { Avatar, List } from "antd";
import { Product } from "../../app/models/products";
import './ProductCard.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <List>
            <div className="productcardContainer">
                <Avatar src={product.pictureURL}></Avatar>
                <div>{product.name}</div>
            </div>

        </List>
    )
}

export default ProductCard