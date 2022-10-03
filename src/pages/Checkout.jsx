import React from 'react';
import OrderItem from '../components/OrderItem'
import '../styles/Checkout.scss'

const Checkout = () => {
    return (
        <div className="checkout-my-order"> 
            <div className="checkout-my-order-container">
                <h1 className="checkout-title">My order</h1>

                <div className="checkout-my-order-content">
                    <div className="checkout-order">
                        <p>
                            <span>04.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$ 560,00</p>
                    </div>
                </div>
                <OrderItem/>
            </div>
        </div>
    );
}

export default Checkout;