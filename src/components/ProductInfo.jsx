import React from 'react';
import '../styles/ProductInfo.scss';
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductInfo = () => {
    return (
        <div>
            <img src="https://images.pexels.com/photos/5241055/pexels-photo-5241055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mouse"/>
            <div className="product-info">
                <p>$20,00</p>
                <p>Mouse</p>
                <p>With itsfuntial and practical interior, this mouse also fulfills a decorative function, adding personality a retro-vintage aesthetic to your kitchen or workplace.</p>
                <button className="product-info-primary-button product-info-add-to-cart-button">
                    <img src={addToCart} alt="add to cart"/>
                    Add to cart
                </button>


            </div>
        </div>
    );
}

export default ProductInfo;