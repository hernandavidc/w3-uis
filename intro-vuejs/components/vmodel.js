Vue.component('vmodel', {
    data(){
        return{
            name: "Hernan"
        }
    },
    template: `
        <div>
            <h2> Bindeo de data </h2>
            <input v-model="name" />
            <p> Hola, buenos días {{ name }} </p>
        </div>
    `
})