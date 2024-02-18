import { Button } from "antd";
import { useEffect } from "react";


const BasketPage = () => {

    useEffect(() => {
        fetch('https://localhost:7157/api/Basket')
            .then((res) => res.json())
            .then((res) =>
                console.log(res)
            )
    }, []);

    const addToBasket = () => {

        fetch('https://localhost:7157/api/Basket?productId=1&quantity=2', {
            method: 'post',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
        })
            .then((res) =>
                console.log(res)
            )
    }

    return (
        <div>
            Basket Page

            Click to add in basket
            <Button onClick={addToBasket} >Add To Basket</Button>
        </div>
    )
}



export default BasketPage;
