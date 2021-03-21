import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#D993E1',
          black: '#1B1D2A',
          darkGrey: '#848484',
          lightGrey: '#F0F0F0',
          white: '#FAFAFA'
        },
      },
    },
  })
