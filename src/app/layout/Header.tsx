import { ShoppingCartOutlined } from '@ant-design/icons';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className='headerContainer'>
                Restore
                <div className='shop'>
                    <Link to='/basket'>
                        <ShoppingCartOutlined />
                    </Link>

                </div>
            </div>

        </div >
    )
}

export default Header
