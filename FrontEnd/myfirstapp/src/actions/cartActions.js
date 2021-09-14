import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART } from "./types";
import store from "../store"

export const addToCart = (cartItem) => {
    let newCart = JSON.parse(localStorage.getItem("cart"));
    if (newCart instanceof Array) {
        newCart.push(cartItem);
    }
    else
    {
        newCart = [cartItem];
    }
    localStorage.setItem("cart", JSON.stringify(newCart))
};

export const removeFromCart = (index) => {

    let newCart = JSON.parse(localStorage.getItem("cart"));
    newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    
};

export const removeAllCart = () => {
    localStorage.removeItem("cart");
};

export const getCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart instanceof Array ? cart : [];
};