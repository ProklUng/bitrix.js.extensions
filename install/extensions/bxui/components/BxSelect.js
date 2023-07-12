import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { loadStyles } from './utils/loadStyles';

export const BxSelect = {
  created() {
    loadStyles();
  },
  components: {
    VueSelect,
  },
  name: 'bx-select',
}
