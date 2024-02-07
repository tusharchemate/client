import { Product } from '../../app/models/products'
import { Avatar, Button, List } from 'antd';

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
            <Button type='primary' onClick={props.addProduct}>Add Product</Button>

        </div>
    )
}

export default Catalog