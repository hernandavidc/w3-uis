export async function fetchProducts({ commit }){
    const data = await fetch('fixeddata/products.json');
    const products = await data.json();
    commit('setProducts', products);
}