import { useEffect, useState } from 'react'
import './styles.css'
import { Product } from '../models/products';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';


function App() {

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
    <>
      <Header />
      <Catalog addProduct={addProducts} products={products} />

    </>
  )
}

export default App
