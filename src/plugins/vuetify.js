import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                gvyellow: '#ffe81F',
                gvgray: '#aaa',
                gvred: '#9e4f60',
            }
        },
        options: {
            customProperties: true,
        }
    }
});
