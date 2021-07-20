Vue.component('emit', {
    data(){
        return {
            marcaRopa: 'Arturo Calle'
        }
    },
    template: `
        <div>
            <h2> Emitir eventos del comp padre </h2>
            <p @click="$emit('show_marca_ropa', marcaRopa)"> 
                Click para emitir evento de la
                instancia root de Vue
            </p>
        </div>
    `
})