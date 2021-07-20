Vue.component('child-data', {
    data(){
        return{
            text: 'Data del comp hijo'
        }
    },
    template: `
        <div>
            <h2> Acceso a datos del comp hijo desde el comp padre</h2>
        </div>
    `
})