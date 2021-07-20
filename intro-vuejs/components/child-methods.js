Vue.component('child-methods', {
    data(){
        return {
            cpmName: 'Componente hijo con metodo'
        }
    },
    methods: {
        showCmpName(){
            console.log("Resultado showCmpName: ",this.cpmName);
        }
    },
    template: `
        <div>
            <h2> Acceso a métodos del cmp hijo desde el padre </h2>

        </div>
    `
});