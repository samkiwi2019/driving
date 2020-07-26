import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '../../sass/app.scss'

Vue.use(Vuetify, {
    components: {},
    directives: {},
})

const theme = {
    primary: '#9C27b0',
    secondary: "#9C27b0",
    accent: '#4CAF50',
    info: '#00CAE3',
}

export default new Vuetify({
    theme: {
        themes: {
            dark: theme,
            light: theme,
        },
    },
})
