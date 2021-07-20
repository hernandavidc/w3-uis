Vue.component('watcher', {
    data(){
        return { 
            user: null,
            oldUser: null
        }
    },
    mounted(){
        this.getDataUser();
    },
    methods:{
        async getDataUser(){
            const data = await fetch('https://randomuser.me/api/');
            const json = await data.json();
            console.log(json);
        }
    },
    template: `
        <div>
            <h2> Titulo watcher </h2>
        </div>
    `
})