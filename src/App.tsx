import { useEffect } from 'react'
import './App.css'

function App() {

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
