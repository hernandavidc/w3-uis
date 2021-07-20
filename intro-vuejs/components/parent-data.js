Vue.component('parent-data', {
    template: `
        <div>
            <h2> Acceso a la data del comp padre desde el hijo</h2>
            <p> {{ $parent.appName }} </p>
        </div>
    `
});