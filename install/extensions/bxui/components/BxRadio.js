import { loadStyles } from './utils/loadStyles';

export const BxRadio = {
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
  },
  created() {
    loadStyles();
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [Boolean, String, Array, Object],
      default: '',
    },
    value: {
      type: [Boolean, String, Array, Object],
      default: '',
    },
    width: {
      type: String,
      default: '320px',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-radio',
  template: '  <label class="ui-ctl ui-ctl-radio" :style="{ \'width\': width }">\n' +
      '    <input\n' +
      '      class="ui-ctl-element"\n' +
      '      type="radio"\n' +
      '      :checked="isChecked"\n' +
      '      :value="value"\n' +
      '      :disabled="disabled"\n' +
      '      @change="$emit(\'update:modelValue\', $event.target.value)"\n' +
      '    >\n' +
      '    <div class="ui-ctl-label-text">\n' +
      '      <slot></slot>\n' +
      '    </div>\n' +
      '  </label>'
}

