import { useEffect, useState } from 'react'
import './styles.css'
import { Product } from '../models/products';


function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:7157/api/Product')
      .then((res) => res.json())
      .then((res) =>
        console.log('res', res)
      )
  }, []);

  return (
    <>
      <div>
        Restore
      </div>

    </>
  )
}

export default App
