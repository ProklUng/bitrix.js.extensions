import { loadStyles } from './utils/loadStyles';

export const props = {
  sizes: ['md', 'xs'],
  colors: ['default', 'primary', 'success', 'warning', 'danger'],
  icons: ['', 'warning', 'danger', 'info'],
};

export const BxAlert = ({
  computed: {
    classList() {
      return {
        [`ui-alert-${this.size}`]: props.sizes.includes(this.size),
        [`ui-alert-${this.color}`]: props.colors.includes(this.color),
        [`ui-alert-icon-${this.icon}`]: this.icon && props.icons.includes(this.icon),
        'ui-alert-text-center': this.center,
        'ui-alert-inline': this.inline,
      };
    },
  },
  created() {
    loadStyles();
  },
  emits: ['close'],
  props: {
    title: {
      type: String,
      default: 'Внимание!',
      validator(value) {
        return typeof value === 'string';
      },
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
      default: 'default',
      validator(value) {
        return props.colors.includes(value);
      },
    },
    icon: {
      type: String,
      default: '',
      validator(value) {
        return props.icons.includes(value);
      },
    },
    center: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-alert',
  template: ' <div class="ui-alert" :class="classList">\n' +
      '    <span class="ui-alert-message">\n' +
      '      <strong v-if="title"> {{ title }} </strong>\n' +
      '      <slot></slot>\n' +
      '    </span>\n' +
      '    <span class="ui-alert-close-btn" @click="$emit(\'close\')"></span>\n' +
      '  </div>'
});

