Vue.component('computed-obj', {
    data(){
        return{
            valor: 0
        }
    },
    computed:{
        valorFormateado: {
            get() {
              return `$ ${ this.valor }`;
            },
            set(newVal) {
                this.valor = newVal;
            }
        }
    },
    template: `
        <div>
            <h2> Componente de computed props como Obj </h2>
            <input v-model="valor" />
            <p> {{ valorFormateado }} </p>
        </div>
    `
});