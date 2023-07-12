import { loadStyles } from './utils/loadStyles';

export const BxCheckBox = {
  methods: {
    updateInput(event) {
      const isChecked = event.target.checked;
      const newValue = [...this.modelValue];

      if (isChecked) {
        newValue.push(this.value);
      } else {
        newValue.splice(newValue.indexOf(this.value), 1);
      }

      this.$emit('update:modelValue', newValue);
    },
  },
  computed: {
    isChecked() {
      return this.modelValue.includes(this.value);
    },
  },
  created() {
    loadStyles();
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Array,
      default: () => [],
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
  name: 'bx-checkbox',
  template: '  <label class="ui-ctl ui-ctl-checkbox" :style="{ \'width\': width }">\n' +
      '    <input\n' +
      '      class="ui-ctl-element"\n' +
      '      type="checkbox"\n' +
      '      :checked="isChecked"\n' +
      '      :value="value"\n' +
      '      :disabled="disabled"\n' +
      '      @change="updateInput"\n' +
      '    >\n' +
      '    <div class="ui-ctl-label-text">\n' +
      '      <slot></slot>\n' +
      '    </div>\n' +
      '  </label>'
}
