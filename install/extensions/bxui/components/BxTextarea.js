import { loadStyles } from './utils/loadStyles';

export const props = {
  resizes: ['', 'no', 'y', 'x'],
};

export const BxTextarea = {
  created() {
    loadStyles();
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    resize: {
      type: String,
      default: '',
      validator(value) {
        return props.resizes.includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-textarea',
  template: '  <div\n' +
      '    class="ui-ctl ui-ctl-textarea"\n' +
      '    :class="{\n' +
      '      \'ui-ctl-no-resize\': resize === \'no\',\n' +
      '      \'ui-ctl-resize-y\': resize === \'y\',\n' +
      '      \'ui-ctl-resize-x\': resize === \'x\',\n' +
      '    }"\n' +
      '  >\n' +
      '    <textarea\n' +
      '      class="ui-ctl-element"\n' +
      '      :value="modelValue"\n' +
      '      :placeholder="placeholder"\n' +
      '      :disabled="disabled"\n' +
      '      @input="$emit(\'update:modelValue\', $event.target.value)"\n' +
      '    ></textarea>\n' +
      '  </div>'
}
