import VueDatepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { loadStyles } from './utils/loadStyles';

export const props = {
  after: ['after', 'ext-after'],
};

export const BxInputDate = {
  created() {
    loadStyles();
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    after: {
      type: String,
      default: 'after',
      validator(value) {
        return props.after.includes(value);
      },
    },
    width: {
      type: String,
      default: '320px',
    },
  },
  components: {
    VueDatepicker,
  },
  name: 'bx-input-date',
  template: '  <vue-datepicker' +
      '    :modelValue="modelValue"\n' +
      '    modelType="format"\n' +
      '    format="dd.MM.yyyy"\n' +
      '    locale="ru"\n' +
      '    :enableTimePicker="false"\n' +
      '    :clearable="false"\n' +
      '    autoApply\n' +
      '    textInput\n' +
      '    v-bind="$attrs"\n' +
      '    @update:modelValue="$emit(\'update:modelValue\', $event)"\n' +
      '  >\n' +
      '    <template #dp-input="{ value, onInput, onEnter, onTab }">\n' +
      '      <div\n' +
      '        class="ui-ctl"\n' +
      '        :class="{\n' +
      '          \'ui-ctl-after-icon\': after === \'after\',\n' +
      '          \'ui-ctl-ext-after-icon\': after === \'ext-after\',\n' +
      '        }"\n' +
      '        :style="{ width }"\n' +
      '      >\n' +
      '        <button\n' +
      '          class="ui-ctl-icon-calendar"\n' +
      '          :class="{\n' +
      '            \'ui-ctl-after\': after === \'after\',\n' +
      '            \'ui-ctl-ext-after\': after === \'ext-after\',\n' +
      '          }"\n' +
      '        ></button>\n' +
      '        <input\n' +
      '          class="ui-ctl-element"\n' +
      '          type="text"\n' +
      '          :value="value"\n' +
      '          :placeholder="$attrs.placeholder"\n' +
      '          @input="onInput"\n' +
      '          @keydown.enter="onEnter"\n' +
      '          @keydown.tab="onTab"\n' +
      '        >\n' +
      '      </div>\n' +
      '    </template>\n' +
      '  </vue-datepicker>'
}
