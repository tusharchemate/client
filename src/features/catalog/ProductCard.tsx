import { Avatar, Button, List } from "antd";
import { Product } from "../../app/models/products";
import './ProductCard.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <List>
            <div className="productcardContainer">
                <div className="image">
                    <Avatar style={{ background: "none" }} src={product.pictureURL}></Avatar>
                </div>
                <div className="body">
                    {product.name}
                    <div>{product.discription}</div>
                </div>

                <div className="actions">
                    <Button>Test</Button>
                    <Button>Test2</Button>
                </div>

            </div>

        </List>
    )
}

export default ProductCard