import { Avatar, List } from "antd";
import { Product } from "../../app/models/products";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <List>
            <div style={{ display: 'flex' }}>
                <Avatar src={product.pictureURL}></Avatar>
                <div>{product.name}</div>
            </div>

        </List>
    )
}

export default ProductCard