export function addProduct(state, product){
    const tempProductInCart = state.cart.find(item => item.id == product.id);
    if(!tempProductInCart){
        let tempProduct = Object.assign({}, product);
        tempProduct.qty = 1;
        state.cart.push(tempProduct);
    } else {
        tempProductInCart.qty += 1;
    }
}

export function removeProductFromCart(state, product){
    state.cart = state.cart.filter(({ id }) => id !== product.id);
}