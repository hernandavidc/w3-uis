Vue.component('methods', {
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
    methods: {
        saludar(){
            alert("Hola " + this.nombreCompleto)
        }
    },
    template: `
        <div>
            <h2> Ejemplo de methods </h2>
            <p @click="saludar"> Saludame </p>
        </div>
    `
})