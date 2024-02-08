import { Avatar, Button, List } from "antd";
import { Product } from "../../app/models/products";
import './ProductCard.css';
import { Link } from "react-router-dom";

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
                    <Button type="primary">Add To Cart</Button>
                    <Button type="link"><Link to={`/catalog/${product.id}`} >View</Link> </Button>
                </div>

            </div>

        </List>
    )
}

export default ProductCard