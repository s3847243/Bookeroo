import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART } from "../actions/types";

const initialState = {
    cart: []
};

export default function (state = initialState, action) {
    console.log("in cart reducer")
    console.log(state.cart)
    console.log(typeof state.cart)
    console.log(action.payload)

    switch (action.type) {
        case ADD_TO_CART:
        return {
            ...state,
            cart: state.cart.push(action.payload)
        };

        case REMOVE_FROM_CART:
        return {
            ...state,
            // remove the index given
            cart: state.cart.filter(item => item !== action.payload)
        };

        case REMOVE_ALL_CART:
        return {
            ...state,
            cart: []
        };
  
      default:
        return state;
    }
  }
