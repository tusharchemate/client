import { Product } from '../../app/models/products'
import { Avatar, List } from 'antd';

interface CatalogProps {
    products: Product[];
    addProduct: () => void;
}

const Catalog = (props: CatalogProps) => {
    return (
        <div>
            <List>
                {props.products?.map((product) => (
                    <div style={{ display: 'flex' }}>
                        <Avatar src={product.pictureURL}></Avatar>
                        <div>{product.name}</div>
                    </div>
                ))}
            </List>
            <button onClick={props.addProduct}>Add Product</button>

        </div>
    )
}

export default Catalog