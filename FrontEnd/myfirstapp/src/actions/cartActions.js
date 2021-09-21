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

export const getCartTotal = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    let total = 0;
    if (cart instanceof Array){
        cart.forEach((listing) => total = total + Number(listing.price));
    }
   
    return total;
};

export const getCartLength = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    let len = 0;
    if (cart instanceof Array){
        len = cart.length;
    }
    return len;
};