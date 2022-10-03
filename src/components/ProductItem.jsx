import React, {useContext} from 'react'; {/*me permite traer el contexto y usarlo aqui */}
import '../styles/ProductItem.scss'
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg'

const ProductItem = ( {product} ) => {
	const { addToCart } = useContext(AppContext); {/* aca indicamos que el contexto que vamos a usar es AppContext */}

	const handleClick = item => {
		addToCart(item);
	}
    return (
        <div className="product-item">
			<img src= {product.images[0]} alt= {product.title} />
			<div className="product-item-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
    );
}

export default ProductItem;