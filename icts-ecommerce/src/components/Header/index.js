import './header.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/icts.png';

export default function Header() {
    return (
        <div className="containerHeader">
            <div className="menus">
                <div className="icon">
                    <img src={logo} width="60" height="60" />
                </div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <p>Produtos</p>
                </Link>
                <Link to="/carrinho" style={{ textDecoration: 'none' }}>
                    <p>Carrinho</p>
                </Link>
            </div>
            <div className="carrinho">
                <span>Carrinho 0</span>
            </div>

        </div>
    );
}