import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Product } from "../../app/models/products";
import '../../app/layout/styles.css'

const ProductDetails = (props: any) => {

    const { id } = useParams();

    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        fetch(`https://localhost:7157/api/Product/${id}`)
            .then((res) => res.json())
            .then((res) =>
                setProduct(res)
            )
    }, [id]);


    const productDetails = [
        {
            name: 'Discription',
            value: product?.discription
        },
        {
            name: 'Price',
            value: product?.price
        },
        {
            name: 'Type',
            value: product?.type
        },

        {
            name: 'Quantity In Stock',
            value: product?.quantityInStock
        },
    ]

    return (
        <div className="ProductDetails">
            <div className="imageContainer">
                {/* {product?.pictureURL} */}

            </div>
            <div className="infoContainer">
                <div className="brand">
                    {product?.brand}
                </div>

                <div className="content">
                    {productDetails?.map((item) => (
                        <><div className="title">{item.name}</div><div>{item.value}</div></>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default ProductDetails
