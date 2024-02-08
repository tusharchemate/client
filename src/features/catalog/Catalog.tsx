import { Product } from '../../app/models/products'
import { Button } from 'antd';
import ProductList from './ProductList';
import '../../app/layout/styles.css'
import { useState, useEffect } from 'react';

// interface CatalogProps {
//     products: Product[];
//     addProduct: () => void;
// }

const Catalog = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://localhost:7157/api/Product')
            .then((res) => res.json())
            .then((res) =>
                setProducts(res)
            )
    }, []);

    const addProducts = () => {

        setProducts((prevState) => [...prevState, {
            name: 'Tushar',
            id: new Date().getTime(),
            discription: 'Test',
            price: 10,
            type: 'Demo',
            brand: 'Apple',
            pictureURL: 'Tes',
            quantityInStock: 2
        }]);

    }
    return (
        <div>
            <ProductList products={products} />
            <Button type='primary' onClick={addProducts}>Add Product</Button>
        </div>
    )
}

export default Catalog