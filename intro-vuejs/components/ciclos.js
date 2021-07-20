Vue.component('ciclo', {
    data(){
        return {
            produDisp: [
                { id: 12, name: "Pollito con papas" },
                { id: 22, name: "Parbacoa" },
                { id: 34, name: "Milanesa de poio" },
                { id: 35, name: "Ensaladita" },
            ]
        }
    },
    template: `
        <div> 
            <h2> Ciclos y Vuejs ( v-for ) </h2>
            <ul>
                <li class="item-product" 
                    v-for="(product, indexProduct) in produDisp"
                    :key="'productDips'+indexProduct"
                    :title="product.name"
                > 
                   {{ indexProduct }} | {{ product.id }} | {{ product.name }}
                </li>
            </ul>
        </div>
    `
});