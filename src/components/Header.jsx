import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import Menu from '@components/Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

const Header = () => {
    const [toogle, setToogle] = useState(false);

    {/*estado de orders */}
    const [toogleOrders, setToogleOrders] = useState(false);

    {/* aca traemos el state de context * y conectamos nuestra aplicacion */}
    const { state } = useContext(AppContext)  

    const handleToogle = ()  => {
        setToogle(!toogle);
    }
    return (
        <nav>
            <img src= {menu} alt="menu" className="menu-header" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Fornitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>   
                    <li className="navbar-email" onClick={handleToogle}>camilayokoo@gmail.com</li>
                    <li className="navbar-shopping-cart" onClick={() => setToogleOrders(!toogleOrders)}>
                        <img src={shoppingCart} alt="shopping cart"/>
                        {/*hacemos una validacion si state.cart.length > 0 muestrame lo que hay y coloca el punto verde , y si no nada nulo */}
                        {state.cart.length > 0 ? <div>${state.cart.length}</div>  : null}
                    </li>
                </ul>
            </div>
            {toogle && <Menu/>}
            {toogleOrders && <MyOrder/>}
        </nav>
    );
}

export default Header;