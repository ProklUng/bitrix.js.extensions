import { loadStyles } from './utils/loadStyles';

export const BxTagSelector = {
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/${name}.svg`, import.meta.url).href;
    },
  },
  created() {
    loadStyles();
  },
  name: 'bx-tag-selector',
  template: '  <div class="ui-tag-selector-outer-container">\n' +
      '    <div class="ui-tag-selector-container">\n' +
      '      <div class="ui-tag-selector-items">\n' +
      '        <div class="ui-tag-selector-item ui-tag-selector-tag ui-tag-selector-tag--has-avatar"\n' +
      '             style="background-color: rgb(188, 237, 252);"><a class="ui-tag-selector-tag-content"\n' +
      '                                                              href="/company/personal/user/150/"\n' +
      '                                                              target="_blank">\n' +
      '          <div class="ui-tag-selector-tag-avatar"\n' +
      '               :style="`background-image: url(${getImageUrl(\'default-tag-user\')});`"></div>\n' +
      '          <div class="ui-tag-selector-tag-title" style="color: rgb(16, 102, 187);">Создаватель\n' +
      '            Админ\n' +
      '          </div>\n' +
      '        </a>\n' +
      '          <div class="ui-tag-selector-tag-remove"></div>\n' +
      '        </div>\n' +
      '        <input type="text"\n' +
      '               class="ui-tag-selector-item ui-tag-selector-text-box ui-tag-selector-item-hidden"\n' +
      '               autocomplete="off" placeholder="" value=""><span\n' +
      '        class="ui-tag-selector-item ui-tag-selector-add-button"><span\n' +
      '        class="ui-tag-selector-add-button-caption">Добавить</span></span></div>\n' +
      '      <div class="ui-tag-selector-create-button ui-tag-selector-item-hidden"><span\n' +
      '        class="ui-tag-selector-create-button-caption">Создать</span></div>\n' +
      '    </div>\n' +
      '  </div>'
}
