import { Product } from '../../app/models/products'
import { Avatar, Button, List } from 'antd';
import ProductList from './ProductList';

interface CatalogProps {
    products: Product[];
    addProduct: () => void;
}

const Catalog = (props: CatalogProps) => {
    return (
        <div>
            <ProductList products={props.products} />
            <Button type='primary' onClick={props.addProduct}>Add Product</Button>

        </div>
    )
}

export default Catalog