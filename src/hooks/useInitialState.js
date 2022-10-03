import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
         {/*... significa manten el estado, trae lo que tienes */}
         {/* cart:[le decimos trae lo que tienes y agregale lo que te envio] */}
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((items,index) => index !== indexValue)
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;