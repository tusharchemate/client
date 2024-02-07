import { useEffect, useState } from 'react'
import './styles.css'
import { Product } from '../models/products';
import Catalog from '../../features/catalog/Catalog';


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

  }

  return (
    <>
      <div>
        Restore
        <Catalog addProduct={addProducts} products={products} />
      </div>

    </>
  )
}

export default App
