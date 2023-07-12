import { formatSizeUnits } from './utils/formatSizeUnits';
import { loadStyles } from './utils/loadStyles';

export const props = {
  types: ['drop', 'button', 'link'],
};

export const BxInputFile = {
  methods: {
    getName(file) {
      return `${file.name} (${formatSizeUnits(file.size)})`;
    },

    onChange(e) {
      this.files.push(...e.target.files);
      this.$emit('change', [...this.files]);
    },

    onDelete(index) {
      const [file] = this.files.splice(index, 1);
      this.$emit('delete', [...this.files], file);
    },
  },
  computed: {
    title() {
      if (this.disabled) return '';
      if (this.files.length) return this.files.map((file) => file.name).join('\n');
      if (this.multiple) return 'Файлы не выбраны.';
      return 'Файл не выбран.';
    },
  },
  created() {
    loadStyles();
  },
  data() {
    return {
      files: [],
      defaultPlaceholder: 'Загрузить файл или картинку',
    };
  },
  emits: ['change', 'delete'],
  props: {
    placeholder: {
      type: String,
      default: '',
      validator(value) {
        return typeof value === 'string';
      },
    },
    type: {
      type: String,
      default: 'drop',
      validator(value) {
        return props.types.includes(value);
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-input-file',
  template: '  <div class="drag-n-drop">\n' +
      '    <label\n' +
      '      v-if="type === \'button\'"\n' +
      '      class="ui-ctl ui-ctl-file-btn"\n' +
      '      :class="{ \'bx-input-file-disabled\': disabled }"\n' +
      '      :title="title"\n' +
      '    >\n' +
      '      <input\n' +
      '        class="ui-ctl-element"\n' +
      '        type="file"\n' +
      '        :multiple="multiple"\n' +
      '        :disabled="disabled"\n' +
      '        @change="onChange"\n' +
      '      >\n' +
      '      <div class="ui-ctl-label-text">\n' +
      '        {{ placeholder || defaultPlaceholder }}\n' +
      '      </div>\n' +
      '    </label>\n' +
      '    <label\n' +
      '      v-else-if="type === \'link\'"\n' +
      '      class="ui-ctl ui-ctl-file-link"\n' +
      '      :class="{ \'bx-input-file-disabled\': disabled }"\n' +
      '      :title="title"\n' +
      '    >\n' +
      '      <input\n' +
      '        class="ui-ctl-element"\n' +
      '        type="file"\n' +
      '        :multiple="multiple"\n' +
      '        :disabled="disabled"\n' +
      '        @change="onChange"\n' +
      '      >\n' +
      '      <div class="ui-ctl-label-text">\n' +
      '        {{ placeholder || defaultPlaceholder }}\n' +
      '      </div>\n' +
      '    </label>\n' +
      '    <label\n' +
      '      v-else-if="type === \'drop\'"\n' +
      '      class="ui-ctl ui-ctl-file-drop"\n' +
      '      :class="{ \'bx-input-file-disabled\': disabled }"\n' +
      '      :title="title"\n' +
      '    >\n' +
      '      <div class="ui-ctl-label-text">\n' +
      '        <span>{{ placeholder || defaultPlaceholder }}</span>\n' +
      '        <small>Перетащить с помощью drag\'n\'drop</small>\n' +
      '      </div>\n' +
      '      <input\n' +
      '        class="ui-ctl-element"\n' +
      '        type="file"\n' +
      '        :multiple="multiple"\n' +
      '        :disabled="disabled"\n' +
      '        @change="onChange"\n' +
      '      >\n' +
      '    </label>\n' +
      '    <ul v-if="files.length" class="drag-n-drop__list">\n' +
      '      <li v-for="(file, key) in files" :key="key" class="drag-n-drop__file">\n' +
      '        <span class="drag-n-drop__name">{{ getName(file) }}</span>\n' +
      '        <span class="drag-n-drop__delete" @click="onDelete(key)"></span>\n' +
      '      </li>\n' +
      '    </ul>\n' +
      '  </div>'
}
