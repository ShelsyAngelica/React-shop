import React from 'react'
import OrderItem from '../components/OrderItem';
import '../styles/Orders.scss'

const Orders = () => {
    return (
        <div className="my-orders"> 
            <div className="orders-container">
                <h1 className="orders-title">My orders</h1>

                <div className="orders-content">
                    <OrderItem/>
                </div>
            </div>
        </div>
    );
}

export default Orders;