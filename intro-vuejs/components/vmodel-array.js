Vue.component('vmodel-array', {
    data(){
        return {
            extras: []
        }
    },
    template: `
        <div>
            <h2> Manejo de vmodal con array </h2>
            <input v-model="extras" type="checkbox" id="papitas" value="papitas" />
            <label for="papitas"> Papas </label>

            <input v-model="extras" type="checkbox" id="gaseosa" value="gaseosa" />
            <label for="gaseosa"> Gaseosa </label>

            <input v-model="extras" type="checkbox" id="postre" value="postre" />
            <label for="postre"> Postre </label>

            <p> Extras pedido: {{ extras }} </p>
        </div>
    `
})