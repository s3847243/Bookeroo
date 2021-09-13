import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART } from "./types";


export const addToCart = (cartItem) => dispatch => {
    dispatch({
    type: ADD_TO_CART,
    payload: cartItem
    });
};

export const removeFromCart = (index) => dispatch => {
    dispatch({
    type: REMOVE_FROM_CART,
    payload: index
    });
    
};

export const removeAllCart = () => dispatch => {
    dispatch({
    type: REMOVE_ALL_CART
    });
};