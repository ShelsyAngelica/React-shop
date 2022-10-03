import React from 'react';
import ProductItem from '@components/ProductItem'
import useGetProducts from '../hooks/useGetProducts';
import '@styles/ProductList.scss'

const API = 'https://api.escuelajs.co/api/v1/products';


const ProductList = () => {
    
    const products = useGetProducts(API)
    return (
        <section className="productList-container">
            <div className="productList">
                {/*products tiene la informacion y la vamos a iterar*/}
                {products.map(product => (
                    //product tiene la informacion de cada iteracion,
                    //traemos el productos por medio de id
                    <ProductItem product={product} key={product.id}/>
                ))}
            </div>
        </section>
    );
}

export default ProductList;