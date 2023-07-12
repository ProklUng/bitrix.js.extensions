import { loadStyles } from './utils/loadStyles';

export const BxEntitySelector = {
  methods: {
    onClick(e, key, item, eventName) {
      if (this.clickable) {
        e.preventDefault();
        this.$emit(eventName, key, item);
      }
    },
  },
  data() {
    return {
      hoverDelete: [],
    };
  },
  emits: ['add', 'click', 'auxclick', 'delete'],
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    displayField: {
      type: String,
      default: 'name',
    },
    displayFieldLink: {
      type: String,
      default: '',
    },
    textAdd: {
      type: String,
      default: 'Добавить',
    },
    textMore: {
      type: String,
      default: 'Добавить ещё',
    },
    textChange: {
      type: String,
      default: 'Сменить',
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-entity-selector',
  template: '  <div class="bx-entity-selector" :class="{ inline }">\n' +
      '    <div class="bx-entity-selector__button">\n' +
      '      <span class="bx-entity-selector__items">\n' +
      '        <span\n' +
      '          v-for="(item, key) in list"\n' +
      '          :key="key"\n' +
      '          class="bx-entity-selector__item"\n' +
      '          :class="{ \'hover-delete\': hoverDelete[key] }"\n' +
      '        >\n' +
      '          <a\n' +
      '            v-if="clickable"\n' +
      '            :href="item[displayFieldLink]"\n' +
      '            target="_blank"\n' +
      '            class="bx-entity-selector__text"\n' +
      '            @click="onClick($event, key, item, \'click\')"\n' +
      '            @auxclick="onClick($event, key, item, \'auxclick\')"\n' +
      '          >\n' +
      '            {{ item[displayField] }}\n' +
      '          </a>\n' +
      '          <span\n' +
      '            v-else\n' +
      '            class="bx-entity-selector__text"\n' +
      '          >\n' +
      '            {{ item[displayField] }}\n' +
      '          </span>\n' +
      '          <button\n' +
      '            class="bx-entity-selector__delete"\n' +
      '            @mouseenter="hoverDelete[key] = true"\n' +
      '            @mouseleave="hoverDelete[key] = false"\n' +
      '            @click="$emit(\'delete\', key, item)"\n' +
      '          ></button>\n' +
      '        </span>\n' +
      '      </span>\n' +
      '      <span class="bx-entity-selector__controls">\n' +
      '        <button class="bx-entity-selector__add" @click="$emit(\'add\')">\n' +
      '          {{ !list.length ? textAdd : multiple ? textMore : textChange }}\n' +
      '        </button>\n' +
      '      </span>\n' +
      '    </div>\n' +
      '  </div>'
}
