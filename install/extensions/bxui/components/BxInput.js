import { loadStyles } from './utils/loadStyles';

export const props = {
  sizes: ['lg', 'md', 'sm', 'xs'],
  colors: ['', 'success', 'warning', 'danger'],
  icons: ['', 'search', 'calendar', 'dots', 'phone', 'mail', 'clock', 'angle', 'clear', 'loader'],
  tagColors: ['default', 'primary', 'success', 'warning', 'danger'],
};

export const BxInput = {
  created() {
    loadStyles();
  },
  emits: ['update:modelValue', 'change', 'click-before', 'click-after'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return props.sizes.includes(value);
      },
    },
    color: {
      type: String,
      default: '',
      validator(value) {
        return props.colors.includes(value);
      },
    },
    width: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
      default: false,
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: '',
    },
    tagColor: {
      type: String,
      default: 'default',
      validator(value) {
        return props.tagColors.includes(value);
      },
    },
    beforeIcon: {
      type: String,
      default: '',
      validator(value) {
        return props.icons.includes(value);
      },
    },
    beforeExt: {
      type: Boolean,
      default: false,
    },
    beforeButton: {
      type: Boolean,
      default: false,
    },
    afterIcon: {
      type: String,
      default: '',
      validator(value) {
        return props.icons.includes(value);
      },
    },
    afterExt: {
      type: Boolean,
      default: false,
    },
    afterButton: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-input',
  template: '  <div\n' +
      '    class="ui-ctl ui-ctl-textbox"\n' +
      '    :class="{\n' +
      '      \'ui-ctl-lg\': size === \'lg\',\n' +
      '      \'ui-ctl-md\': size === \'md\',\n' +
      '      \'ui-ctl-sm\': size === \'sm\',\n' +
      '      \'ui-ctl-xs\': size === \'xs\',\n' +
      '      \'ui-ctl-success\': color === \'success\',\n' +
      '      \'ui-ctl-warning\': color === \'warning\',\n' +
      '      \'ui-ctl-danger\': color === \'danger\',\n' +
      '      \'ui-ctl-before-icon\': beforeIcon && !beforeExt,\n' +
      '      \'ui-ctl-ext-before-icon\': beforeIcon && beforeExt,\n' +
      '      \'ui-ctl-after-icon\': afterIcon && !afterExt,\n' +
      '      \'ui-ctl-ext-after-icon\': afterIcon && afterExt,\n' +
      '      \'ui-ctl-inline\': inline,\n' +
      '      \'ui-ctl-no-border\': noBorder,\n' +
      '      \'ui-ctl-underline\': underline,\n' +
      '      \'ui-ctl-no-padding\': noPadding,\n' +
      '      \'ui-ctl-round\': round,\n' +
      '    }"\n' +
      '    :style="{\n' +
      '      \'max-width\': this.width || \'initial\',\n' +
      '      \'width\': this.width || \'auto\',\n' +
      '    }"\n' +
      '  >\n' +
      '    <component\n' +
      '       v-if="beforeIcon"\n' +
      '       :is="beforeButton ? \'button\' : \'div\'"\n' +
      '       :class="{\n' +
      '         \'ui-ctl-before\': !beforeExt,\n' +
      '         \'ui-ctl-ext-before\': beforeExt,\n' +
      '         \'ui-ctl-icon-search\': beforeIcon === \'search\',\n' +
      '         \'ui-ctl-icon-calendar\': beforeIcon === \'calendar\',\n' +
      '         \'ui-ctl-icon-dots\': beforeIcon === \'dots\',\n' +
      '         \'ui-ctl-icon-phone\': beforeIcon === \'phone\',\n' +
      '         \'ui-ctl-icon-mail\': beforeIcon === \'mail\',\n' +
      '         \'ui-ctl-icon-clock\': beforeIcon === \'clock\',\n' +
      '         \'ui-ctl-icon-angle\': beforeIcon === \'angle\',\n' +
      '         \'ui-ctl-icon-clear\': beforeIcon === \'clear\',\n' +
      '         \'ui-ctl-icon-loader\': beforeIcon === \'loader\',\n' +
      '       }"\n' +
      '       @click="$emit(\'click-before\')"\n' +
      '    ></component>\n' +
      '    <component\n' +
      '       v-if="afterIcon"\n' +
      '       :is="afterButton ? \'button\' : \'div\'"\n' +
      '       :class="{\n' +
      '         \'ui-ctl-after\': !afterExt,\n' +
      '         \'ui-ctl-ext-after\': afterExt,\n' +
      '         \'ui-ctl-icon-search\': afterIcon === \'search\',\n' +
      '         \'ui-ctl-icon-calendar\': afterIcon === \'calendar\',\n' +
      '         \'ui-ctl-icon-dots\': afterIcon === \'dots\',\n' +
      '         \'ui-ctl-icon-phone\': afterIcon === \'phone\',\n' +
      '         \'ui-ctl-icon-mail\': afterIcon === \'mail\',\n' +
      '         \'ui-ctl-icon-clock\': afterIcon === \'clock\',\n' +
      '         \'ui-ctl-icon-angle\': afterIcon === \'angle\',\n' +
      '         \'ui-ctl-icon-clear\': afterIcon === \'clear\',\n' +
      '         \'ui-ctl-icon-loader\': afterIcon === \'loader\',\n' +
      '       }"\n' +
      '       @click="$emit(\'click-after\')"\n' +
      '    ></component>\n' +
      '    <div\n' +
      '      v-if="tag"\n' +
      '      class="ui-ctl-tag"\n' +
      '      :class="{\n' +
      '        \'ui-ctl-tag-success\': tagColor === \'success\',\n' +
      '        \'ui-ctl-tag-primary\': tagColor === \'primary\',\n' +
      '        \'ui-ctl-tag-danger\': tagColor === \'danger\',\n' +
      '        \'ui-ctl-tag-warning\': tagColor === \'warning\',\n' +
      '      }"\n' +
      '      >{{ tag }}</div>\n' +
      '    <input\n' +
      '      type="text"\n' +
      '      class="ui-ctl-element"\n' +
      '      :value="modelValue"\n' +
      '      :placeholder="placeholder"\n' +
      '      :disabled="disabled"\n' +
      '      @input="$emit(\'update:modelValue\', $event.target.value)"\n' +
      '      @change="$emit(\'change\', $event.target.value)"\n' +
      '    >\n' +
      '  </div>'
}
