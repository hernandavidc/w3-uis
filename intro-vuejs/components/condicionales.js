Vue.component('condicionales', {
    data(){
        return {
            edad: 10
        }
    },
    template: `
        <div>
            <h2> Condicionales con Vuejs ( v-if ) </h2>
            <input v-model="edad" />
            <p v-if="edad < 18"> Menor de edad </p>
            <p class="edad1830" v-else-if="edad >= 18 && edad < 30"> 
                Mayor de edad pero menor de 30 
            </p>
            <p v-else-if="edad >= 30 && edad < 65"> 
                Mayor de 30 pero menor de 65 
            </p>
            <p v-else> 
                Estas jubilado we! 
            </p>
        </div>
    `
})