Vue.component('watcher', {
    data(){
        return { 
            user: null,
            oldUser: null
        }
    },
    mounted(){
        // this.getDataUser();
    },
    methods:{
        async getDataUser(){
            try{
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();
                const user = json.results[0];
                this.user = `${ user.name.title } ${ user.name.first } ${ user.name.last }`
                console.log(user);
            } catch(err) {
                console.error(err);
            }
        }
    },
    watch: {
        user(newVal, oldVal){
            this.user = newVal;
            this.oldUser = oldVal;
        }
    },
    template: `
        <div>
            <h2> Titulo watcher </h2>
            <p @click="getDataUser"> Click para actualizar User </p>
            <p> User actual: {{ user }} </p>
            <p> Old user: {{ oldUser }} </p>
        </div>
    `
})