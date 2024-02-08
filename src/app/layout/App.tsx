import './styles.css'
import Header from './Header';
import { Outlet } from 'react-router-dom';


const App = () => {

  return (
    <>
      <Header />
      <div className='Container'>
        <Outlet />
      </div>
    </>
  )
}

export default App;
