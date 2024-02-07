import React from 'react'
import { Product } from '../../app/models/products'

interface CatalogProps {
    products: Product[];
    addProduct: () => void;
}

const Catalog = (props: CatalogProps) => {
    return (
        <div>
            <ul>
                {props.products?.map((product) => (
                    <li>{product.name}</li>
                ))}
            </ul>
            <button onClick={props.addProduct}>Add Product</button>

        </div>
    )
}

export default Catalog