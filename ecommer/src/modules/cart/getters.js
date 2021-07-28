export function totalCost(state){
    console.log(state.cart);
    return state.cart.reduce((accumulator, currentProduct) => {
        return (currentProduct.price * currentProduct.qty) + accumulator
    }, 0);
}