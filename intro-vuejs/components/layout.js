Vue.component('layout', {
    template: `
        <div>
            <h2> Componente de Slots </h2>
            <header>
                <slot name="header"> </slot>
            </header>
            <main>
                <template v-if="true">
                    <small> Espacio en el main </small>
                </template>
                <slot>  </slot>
            </main>
            <footer>
                <slot name="footer"> </slot>
            </footer>
        </div>
    `
})