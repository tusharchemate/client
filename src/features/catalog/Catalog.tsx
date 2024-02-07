import { Product } from '../../app/models/products'
import { Button } from 'antd';
import ProductList from './ProductList';
import '../../app/layout/styles.css'

interface CatalogProps {
    products: Product[];
    addProduct: () => void;
}

const Catalog = (props: CatalogProps) => {
    return (
        <div className='Catalog'>
            <ProductList products={props.products} />
            <Button type='primary' onClick={props.addProduct}>Add Product</Button>
        </div>
    )
}

export default Catalog