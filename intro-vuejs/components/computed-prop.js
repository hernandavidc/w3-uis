Vue.component('computed-prop', {
    data(){
        return{
            nombre: "Pablo",
            apellido: "Villamizar"
        }
    },
    computed:{
        nombreCompleto(){
            return `${this.nombre} ${this.apellido}`
        }
    },
    template: `
        <div>
            <h2> Componente de computed props </h2>
            <p> {{ nombreCompleto }} </p>
        </div>
    `
});