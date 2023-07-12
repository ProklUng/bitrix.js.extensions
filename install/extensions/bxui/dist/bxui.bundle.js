/* eslint-disable */
this.BX = this.BX || {};
(function (exports,ui_vue) {
  'use strict';

  var loadStyles = function loadStyles() {
    var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    if (!domain) {
      domain = window.location.host;
    }
    var root = "//".concat(domain, "/bitrix/js/ui");
    var files = ['fonts/opensans/ui.font.opensans.min.css', 'alerts/ui.alerts.min.css', 'buttons/ui.buttons.min.css', 'buttons/icons/ui.buttons.icons.min.css', 'entity-selector/dist/entity-selector.bundle.min.css', 'forms/ui.forms.min.css', 'icons/b24/ui.icons.b24.min.css', 'icons/base/ui.icons.base.min.css', 'icons/disk/ui.icons.disk.min.css', 'icons/service/ui.icons.service.min.css', 'progressbar/ui.progressbar.min.css'];
    var styles = files.reduce(function (Fragment, file) {
      var href = [root, file].join('/');
      var links = document.querySelectorAll("[href=\"".concat(href, "\"]"));
      if (links.length) return Fragment;
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      Fragment.append(link);
      return Fragment;
    }, new DocumentFragment());
    if (styles.children.length) document.head.prepend(styles);
  };

  var props = {
    sizes: ['md', 'xs'],
    colors: ['default', 'primary', 'success', 'warning', 'danger'],
    icons: ['', 'warning', 'danger', 'info']
  };
  var BxAlert = {
    computed: {
      classList: function classList() {
        var _ref;
        return _ref = {}, babelHelpers.defineProperty(_ref, "ui-alert-".concat(this.size), props.sizes.includes(this.size)), babelHelpers.defineProperty(_ref, "ui-alert-".concat(this.color), props.colors.includes(this.color)), babelHelpers.defineProperty(_ref, "ui-alert-icon-".concat(this.icon), this.icon && props.icons.includes(this.icon)), babelHelpers.defineProperty(_ref, 'ui-alert-text-center', this.center), babelHelpers.defineProperty(_ref, 'ui-alert-inline', this.inline), _ref;
      }
    },
    created: function created() {
      loadStyles();
    },
    emits: ['close'],
    props: {
      title: {
        type: String,
        "default": 'Внимание!',
        validator: function validator(value) {
          return typeof value === 'string';
        }
      },
      size: {
        type: String,
        "default": 'md',
        validator: function validator(value) {
          return props.sizes.includes(value);
        }
      },
      color: {
        type: String,
        "default": 'default',
        validator: function validator(value) {
          return props.colors.includes(value);
        }
      },
      icon: {
        type: String,
        "default": '',
        validator: function validator(value) {
          return props.icons.includes(value);
        }
      },
      center: {
        type: Boolean,
        "default": false
      },
      inline: {
        type: Boolean,
        "default": false
      }
    },
    name: 'bx-alert',
    template: ' <div class="ui-alert" :class="classList">\n' + '    <span class="ui-alert-message">\n' + '      <strong v-if="title"> {{ title }} </strong>\n' + '      <slot></slot>\n' + '    </span>\n' + '    <span class="ui-alert-close-btn" @click="$emit(\'close\')"></span>\n' + '  </div>'
  };

  var props$1 = {
    types: ['button', 'submit', 'reset'],
    colors: ['default', 'success', 'success-light', 'danger', 'danger-dark', 'danger-light', 'primary', 'primary-dark', 'secondary', 'link', 'light', 'light-border'],
    sizes: ['xs', 'sm', 'md', 'lg'],
    icons: ['', 'add', 'stop', 'start', 'pause', 'setting', 'task', 'info', 'search', 'follow', 'unfollow', 'print', 'add-folder', 'list', 'business', 'business-confirm', 'business-warning', 'camera', 'phone-up', 'phone-down', 'back', 'edit', 'share', 'remove', 'download', 'cloud', 'page', 'chat', 'phone-call', 'lock', 'done', 'disk', 'mail', 'alert', 'angle-up', 'angle-down', 'dots', 'forward', 'fail', 'success', 'plan', 'eye-opened', 'eye-closed', 'tariff', 'battery', 'no-battery', 'half-battery', 'low-battery', 'crit-battery', 'demo'],
    loaders: ['', 'clock', 'wait']
  };
  var BxButton = {
    computed: {
      classList: function classList() {
        var _ref;
        return _ref = {}, babelHelpers.defineProperty(_ref, "ui-btn-".concat(this.color), props$1.colors.includes(this.color)), babelHelpers.defineProperty(_ref, "ui-btn-".concat(this.size), props$1.sizes.includes(this.size)), babelHelpers.defineProperty(_ref, "ui-btn-icon-".concat(this.icon), this.icon && props$1.icons.includes(this.icon)), babelHelpers.defineProperty(_ref, "ui-btn-".concat(this.loader), this.loader && props$1.loaders.includes(this.loader)), babelHelpers.defineProperty(_ref, 'ui-btn-disabled', this.disabled), babelHelpers.defineProperty(_ref, 'ui-btn-dropdown', this.dropdown), babelHelpers.defineProperty(_ref, 'ui-btn-round', this.round), babelHelpers.defineProperty(_ref, 'ui-btn-no-caps', this.noCaps), _ref;
      }
    },
    created: function created() {
      loadStyles();
    },
    emits: ['click', 'toggle-menu'],
    props: {
      type: {
        type: String,
        "default": 'button',
        validator: function validator(value) {
          return props$1.types.includes(value);
        }
      },
      color: {
        type: String,
        "default": 'default',
        validator: function validator(value) {
          return props$1.colors.includes(value);
        }
      },
      size: {
        type: String,
        "default": 'md',
        validator: function validator(value) {
          return props$1.sizes.includes(value);
        }
      },
      icon: {
        type: String,
        "default": '',
        validator: function validator(value) {
          return props$1.icons.includes(value);
        }
      },
      loader: {
        type: String,
        "default": '',
        validator: function validator(value) {
          return props$1.loaders.includes(value);
        }
      },
      count: {
        type: Number,
        "default": 0,
        validator: function validator(value) {
          return Number.isFinite(value);
        }
      },
      counter: {
        type: Boolean,
        "default": false
      },
      disabled: {
        type: Boolean,
        "default": false
      },
      dropdown: {
        type: Boolean,
        "default": false
      },
      round: {
        type: Boolean,
        "default": false
      },
      noCaps: {
        type: Boolean,
        "default": false
      },
      menu: {
        type: Boolean,
        "default": false
      }
    },
    name: 'bx-button',
    template: '  <div v-if="menu" class="ui-btn-split" :class="classList">\n' + '    <button\n' + '      class="ui-btn-main"\n' + '      :type="type"\n' + '      :disabled="disabled"\n' + '      @click="$emit(\'click\')"\n' + '    >\n' + '      <slot></slot>\n' + '      <i v-if="counter" class="ui-btn-counter">{{ count }}</i>\n' + '    </button>\n' + '    <button\n' + '      class="ui-btn-menu"\n' + '      type="button"\n' + '      :disabled="disabled"\n' + '      @click="$emit(\'toggle-menu\')"\n' + '    ></button>\n' + '  </div>\n' + '  <button\n' + '    v-else\n' + '    class="ui-btn"\n' + '    :class="classList"\n' + '    :type="type"\n' + '    :disabled="disabled"\n' + '    @click="$emit(\'click\')"\n' + '  >\n' + '    <slot></slot>\n' + '    <i v-if="counter" class="ui-btn-counter">{{ count }}</i>\n' + '  </button>'
  };

  var BxCheckBox = {
    methods: {
      updateInput: function updateInput(event) {
        var isChecked = event.target.checked;
        var newValue = babelHelpers.toConsumableArray(this.modelValue);
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit('update:modelValue', newValue);
      }
    },
    computed: {
      isChecked: function isChecked() {
        return this.modelValue.includes(this.value);
      }
    },
    created: function created() {
      loadStyles();
    },
    emits: ['update:modelValue'],
    props: {
      modelValue: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      value: {
        type: [Boolean, String, Array, Object],
        "default": ''
      },
      width: {
        type: String,
        "default": '320px'
      },
      disabled: {
        type: Boolean,
        "default": false
      }
    },
    name: 'bx-checkbox',
    template: '  <label class="ui-ctl ui-ctl-checkbox" :style="{ \'width\': width }">\n' + '    <input\n' + '      class="ui-ctl-element"\n' + '      type="checkbox"\n' + '      :checked="isChecked"\n' + '      :value="value"\n' + '      :disabled="disabled"\n' + '      @change="updateInput"\n' + '    >\n' + '    <div class="ui-ctl-label-text">\n' + '      <slot></slot>\n' + '    </div>\n' + '  </label>'
  };

  var BxDialog = {
    methods: {
      getImageUrl: function getImageUrl(name) {
        return new URL("../assets/".concat(name, ".svg"), (typeof document !== 'undefined' ? document.currentScript && document.currentScript.src || document.baseURI : new (typeof URL !== 'undefined' ? URL : require('ur'+'l').URL)('file:' + __filename).href)).href;
      }
    },
    created: function created() {
      loadStyles();
    },
    data: function data() {
      return {
        hoverTabs: false
      };
    },
    props: {
      width: {
        type: String,
        "default": '565px'
      },
      height: {
        type: String,
        "default": '420px'
      },
      widthTab: {
        type: String,
        "default": '160px'
      },
      visibleFooter: {
        type: Boolean,
        "default": false
      }
    },
    name: 'bx-dialog',
    template: '  <div class="ui-selector-dialog" :style="{ width, height }">\n' + '    <div class="ui-selector-search">\n' + '      <div class="ui-tag-selector-outer-container">\n' + '        <div class="ui-tag-selector-container" style="max-height: 99px;">\n' + '          <div class="ui-tag-selector-items">\n' + '            <div class="ui-tag-selector-item ui-tag-selector-tag ui-tag-selector-tag--has-avatar">\n' + '              <a\n' + '                class="ui-tag-selector-tag-content"\n' + '                href="/company/personal/user/648/"\n' + '                target="_blank"\n' + '              >\n' + '              <div\n' + '                class="ui-tag-selector-tag-avatar"\n' + '                style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/406111/7acf4cadf975128573a8b1c2766af5d8/main/083/083bb1c93b3f0ea32baf3942a5ac6831/T02A7V6EGBA-U02AWPPB8KW-8358c0c61795-512.png&quot;);"\n' + '              ></div>\n' + '              <div\n' + '                class="ui-tag-selector-tag-title"\n' + '                style="color: rgb(16, 102, 187);"\n' + '              >Валентин Золотов</div>\n' + '            </a>\n' + '              <div class="ui-tag-selector-tag-remove"></div>\n' + '            </div>\n' + '            <input\n' + '              type="text"\n' + '              class="ui-tag-selector-item ui-tag-selector-text-box"\n' + '              autocomplete="off"\n' + '              placeholder="поиск"\n' + '              value=""\n' + '              style="width: 105px;"\n' + '            >\n' + '            <span class="ui-tag-selector-item ui-tag-selector-add-button ui-tag-selector-item-hidden">\n' + '              <span class="ui-tag-selector-add-button-caption">Добавить</span>\n' + '            </span>\n' + '          </div>\n' + '          <div class="ui-tag-selector-create-button ui-tag-selector-item-hidden">\n' + '            <span class="ui-tag-selector-create-button-caption">Создать</span>\n' + '          </div>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '    <div class="ui-selector-tabs">\n' + '      <div class="ui-selector-tab-contents">\n' + '        <div class="ui-selector-tab-content ui-selector-tab-content-active">\n' + '          <div class="ui-selector-items">\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/416471/7acf4cadf975128573a8b1c2766af5d8/main/da1/da1e1f2bf2d74d91cc7b12a5edc89269/avatar.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Марина Варгасова</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/253/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/373031/7acf4cadf975128573a8b1c2766af5d8/main/ad1/ad1fe123e4bc44190056ee6dcb77e0b1/ava.jpg&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Станислав Овсейчук</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/3843/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/404635/7acf4cadf975128573a8b1c2766af5d8/main/920/920d7e7302f88aa5393e192529f07c51/avatar.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Светлана Жилина</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/3967/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/402275/7acf4cadf975128573a8b1c2766af5d8/main/7bd/7bdf973e57e78bcbfeebb5a179bd3e79/WhatsApp Image 2021-08-16 at 09.25.49.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Ольга Старостина</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/4473/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/20075/7acf4cadf975128573a8b1c2766af5d8/main/ac8/ac8f45aac02e7eb29c0a3928407c061d/avatar.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Андрей Васильев</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/3/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box ui-selector-item-box-selected">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/406111/7acf4cadf975128573a8b1c2766af5d8/main/083/083bb1c93b3f0ea32baf3942a5ac6831/T02A7V6EGBA-U02AWPPB8KW-8358c0c61795-512.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Валентин Золотов</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/648/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'default-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">soldatkinilya1996@gmail.com</div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(35, 162, 202); background-color: rgb(220, 246, 254);">Приглашен</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/3863/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/37928/7acf4cadf975128573a8b1c2766af5d8/main/14e/14e90cc843ca8c337aeab2a225908022/DudkaVI_2.jpg&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Виталий Дудка</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/1/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/358095/7acf4cadf975128573a8b1c2766af5d8/main/a7e/a7e6c7a4589aff3351bcfabd3dab7290/2017-08-12 19-54-24_1503480392.JPG&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Александр Следков</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/1749/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/180608/7acf4cadf975128573a8b1c2766af5d8/main/548/54878a1b47614cc5ef24846bca30367f/1899970_863942187004388_2590537968458063550_n.jpg&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Елизавета Берсенева</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/197/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/305443/7acf4cadf975128573a8b1c2766af5d8/main/ef2/ef2c2997ef4ba2eaf3e22dcfe96a7025/yY7VX7I1v7I.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Марина Богданова</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/630/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/394095/7acf4cadf975128573a8b1c2766af5d8/main/af3/af351e7192f7110f4ff47851da3f8f54/avatar.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Ксения Богатова</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/732/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/390287/7acf4cadf975128573a8b1c2766af5d8/main/6a2/6a259c424711d01425b6f4ccdf304e83/2021.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Андрей Быков</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/17/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/215930/7acf4cadf975128573a8b1c2766af5d8/main/aaa/aaa11468c0fe38c823c31ff55323ecde/geometria.jpg&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Валентин Хонин</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/39/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Антон\n' + '                      Воронин\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/69/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/1553/7acf4cadf975128573a8b1c2766af5d8/main/ecb/ecbed7722959a4a69760b1bda667e8f9/218ed8c25bf179dbe74404f80b525f0f.jpg&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Робот Роботов</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/147/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Матвей\n' + '                      Ребров\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/249/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Сотрудник\n' + '                      Интерсвязь\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/512/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Дмитрий\n' + '                      Баталов\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/518/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Andrey\n' + '                      Tarakanon\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/520/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Евгения\n' + '                      Уразаева\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/526/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Ирина\n' + '                      Журавлева\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/528/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Sergey\n' + '                      Malinin\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/530/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Роман\n' + '                      Игоревич\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/534/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Алексей\n' + '                      Мельник\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/536/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Геворг\n' + '                      Минасян\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/540/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Станислав\n' + '                      Фролов\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/542/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Юрий\n' + '                      Феоктистов\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/544/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Дима\n' + '                      Коуров\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/546/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Рустам\n' + '                      Гумеров\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/552/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Андрей\n' + '                      Арканов\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/564/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Константин\n' + '                      Быченко\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/592/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Антон\n' + '                      Колонтай\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/602/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/99544/7acf4cadf975128573a8b1c2766af5d8/main/741/741a281662b8049313a69b261e4fd48d/IMG_2727ee.jpg&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Мария Русакова</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/694/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Ксения\n' + '                      Серова\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/1080/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">\n' + '                      good1data@gmail.com\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/2305/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '\n' + '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">\n' + '                      marketing@fermer-usm.ru\n' + '                    </div>\n' + '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' + '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' + '                    </div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/2307/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'default-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Татьяна Гейбух</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/2778/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/280018/7acf4cadf975128573a8b1c2766af5d8/main/836/836af0dfdbcad50354c68b431a2114a2/Foto0033.jpg&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Владимир Балакин</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/2870/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/319503/7acf4cadf975128573a8b1c2766af5d8/main/90f/90fa559e33cca72c26875096e07584ab/1hK3NG6Iz5E.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Александр Чеботарев</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/3601/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/330179/7acf4cadf975128573a8b1c2766af5d8/main/4be/4be3a681163b878f36fc3260dc126a31/ren-sg2.jpg&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Реналь Сунагатуллин</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/3861/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/373257/7acf4cadf975128573a8b1c2766af5d8/main/37c/37ce10551c70fc0474341a6d8d2fc17f/avatar.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Инна Петрачкова</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/4059/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'default-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Пользователь Тестовый</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/4463/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/413043/7acf4cadf975128573a8b1c2766af5d8/main/fff/fffd33b42eac5a6f6916e9f743d70a9c/avatar.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Анна Габитова</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/4669/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/413431/7acf4cadf975128573a8b1c2766af5d8/main/f74/f749a6a5f85bc369fdcfaacd984a0498/avatar.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Трухачев Вадим</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/4693/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/421135/7acf4cadf975128573a8b1c2766af5d8/main/66e/66e919e6ef25a41ccc6e524ed46acb9b/dcbIVt_ZA2I.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Алексей Овчинников</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/4857/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     :style="`background-image: url(${getImageUrl(\'default-user\')});`"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Константин Дядюра</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/4953/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/426573/7acf4cadf975128573a8b1c2766af5d8/main/554/55418b786fb0d05ee9511c413e74ef35/image-25-08-22-12-50-1.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Анна Бессонова</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/4959/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/427023/7acf4cadf975128573a8b1c2766af5d8/main/351/3516565f0e42e748682a3a8d96253c7f/photo_2022-07-25_17-47-14.png&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Артём Челноков</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/4963/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '            <div class="ui-selector-item-box">\n' + '              <div class="ui-selector-item">\n' + '                <div class="ui-selector-item-avatar"\n' + '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/427175/7acf4cadf975128573a8b1c2766af5d8/main/f8e/f8e3a072586a7512190c4cff5d46c79f/98362b141c035e93e5d128568cc41940.jpg&quot;);"></div>\n' + '                <div class="ui-selector-item-titles">\n' + '                  <div class="ui-selector-item-supertitle"></div>\n' + '                  <div class="ui-selector-item-title-box">\n' + '                    <div class="ui-selector-item-title">Алексей Акимов</div>\n' + '                    <div class="ui-selector-item-badges"></div>\n' + '                    <div class="ui-selector-item-caption"></div>\n' + '                  </div>\n' + '                  <div class="ui-selector-item-subtitle"></div>\n' + '                </div>\n' + '                <div class="ui-selector-item-indicator"></div>\n' + '                <a class="ui-selector-item-link" href="/company/personal/user/4965/" target="_blank"\n' + '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' + '              <div class="ui-selector-item-children"></div>\n' + '            </div>\n' + '          </div>\n' + '        </div>\n' + '      </div>\n' + '      <div\n' + '        class="ui-selector-tab-labels"\n' + '        :class="[hoverTabs ? \'ui-selector-tab-labels--active\' : null]"\n' + '        @mouseover="hoverTabs = true"\n' + '        @mouseleave="hoverTabs = false"\n' + '        :style="{ \'max-width\': hoverTabs ? widthTab : null }"\n' + '      >\n' + '        <div class="ui-selector-tab-label ui-selector-tab-label-active"> <!--ui-selector-tab-label-hidden ui-selector-tab-label-hover-->\n' + '          <div class="ui-selector-tab-icon"></div>\n' + '          <div class="ui-selector-tab-title">Пользователи</div>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '    <div class="ui-selector-footer-container">\n' + '      <div\n' + '        class="ui-selector-footer"\n' + '        :class="{ \'ui-selector-footer--show\': visibleFooter }"\n' + '      >\n' + '        <slot name="footer">\n' + '          <div class="ui-selector-footer-default">\n' + '            <span class="ui-selector-footer-link ui-selector-footer-link-add">Пригласить сотрудника</span>\n' + '            <span class="ui-selector-footer-conjunction">или</span>\n' + '            <span class="ui-selector-footer-link">пригласить гостя</span>\n' + '            <span\n' + '              data-hint="Вы можете добавить не только сотрудника, но и партнера или клиента по электронной почте."\n' + '              data-hint-init="y"\n' + '              class="ui-hint"\n' + '            >\n' + '              <span class="ui-hint-icon"></span>\n' + '            </span>\n' + '          </div>\n' + '        </slot>\n' + '      </div>\n' + '    </div>\n' + '  </div>'
  };

  var BxEntitySelector = {
    methods: {
      onClick: function onClick(e, key, item, eventName) {
        if (this.clickable) {
          e.preventDefault();
          this.$emit(eventName, key, item);
        }
      }
    },
    data: function data() {
      return {
        hoverDelete: []
      };
    },
    emits: ['add', 'click', 'auxclick', 'delete'],
    props: {
      list: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      displayField: {
        type: String,
        "default": 'name'
      },
      displayFieldLink: {
        type: String,
        "default": ''
      },
      textAdd: {
        type: String,
        "default": 'Добавить'
      },
      textMore: {
        type: String,
        "default": 'Добавить ещё'
      },
      textChange: {
        type: String,
        "default": 'Сменить'
      },
      clickable: {
        type: Boolean,
        "default": false
      },
      multiple: {
        type: Boolean,
        "default": false
      },
      inline: {
        type: Boolean,
        "default": false
      }
    },
    name: 'bx-entity-selector',
    template: '  <div class="bx-entity-selector" :class="{ inline }">\n' + '    <div class="bx-entity-selector__button">\n' + '      <span class="bx-entity-selector__items">\n' + '        <span\n' + '          v-for="(item, key) in list"\n' + '          :key="key"\n' + '          class="bx-entity-selector__item"\n' + '          :class="{ \'hover-delete\': hoverDelete[key] }"\n' + '        >\n' + '          <a\n' + '            v-if="clickable"\n' + '            :href="item[displayFieldLink]"\n' + '            target="_blank"\n' + '            class="bx-entity-selector__text"\n' + '            @click="onClick($event, key, item, \'click\')"\n' + '            @auxclick="onClick($event, key, item, \'auxclick\')"\n' + '          >\n' + '            {{ item[displayField] }}\n' + '          </a>\n' + '          <span\n' + '            v-else\n' + '            class="bx-entity-selector__text"\n' + '          >\n' + '            {{ item[displayField] }}\n' + '          </span>\n' + '          <button\n' + '            class="bx-entity-selector__delete"\n' + '            @mouseenter="hoverDelete[key] = true"\n' + '            @mouseleave="hoverDelete[key] = false"\n' + '            @click="$emit(\'delete\', key, item)"\n' + '          ></button>\n' + '        </span>\n' + '      </span>\n' + '      <span class="bx-entity-selector__controls">\n' + '        <button class="bx-entity-selector__add" @click="$emit(\'add\')">\n' + '          {{ !list.length ? textAdd : multiple ? textMore : textChange }}\n' + '        </button>\n' + '      </span>\n' + '    </div>\n' + '  </div>'
  };

  var props$2 = {
    icons: ['file-empty', 'file-txt', 'file-doc', 'file-xls', 'file-php', 'file-pdf', 'file-ppt', 'file-rar', 'file-zip', 'file-set', 'file-img', 'file-mov', 'file-folder', 'file-folder-shared', 'file-folder-shared-2', 'common-user', 'common-user-group', 'common-company', 'common-phone', 'common-notification', 'common-bitrix24', 'common-cloud', 'common-folder', 'common-info', 'service-alice', 'service-light-alice', 'service-fb-instagram', 'service-light-fb-instagram', 'service-instagram-fb', 'service-light-instagram-fb', 'service-instagram', 'service-light-instagram', 'service-twilio', 'service-light-twilio', 'service-callback', 'service-light-callback', 'service-livechat', 'service-light-livechat', 'service-liveid', 'service-light-liveid', 'service-ya', 'service-light-ya', 'service-ya-dialogs', 'service-light-ya-dialogs', 'service-ya-direct', 'service-light-ya-direct', 'service-1c', 'service-light-1c', 'service-google', 'service-light-google', 'service-google-ads', 'service-light-google-ads', 'service-twitter', 'service-light-twitter', 'service-email', 'service-light-email', 'service-messenger', 'service-light-messenger', 'service-estore', 'service-light-estore', 'service-imessage', 'service-light-imessage', 'service-webform', 'service-light-webform', 'service-sms', 'service-light-sms', 'service-call', 'service-light-call', 'service-call-up', 'service-light-call-up', 'service-infocall', 'service-light-infocall', 'service-site-b24', 'service-light-site-b24', 'service-site', 'service-light-site', 'service-calltracking', 'service-light-calltracking', 'service-telegram', 'service-light-telegram', 'service-bitrix24', 'service-light-bitrix24', 'service-groupme', 'service-light-groupme', 'service-crm', 'service-light-crm', 'service-lead', 'service-light-lead', 'service-deal', 'service-light-deal', 'service-campaign', 'service-light-campaign', 'service-chatbot', 'service-light-chatbot', 'service-common', 'service-light-common', 'service-g-assistant', 'service-light-g-assistant', 'service-microsoft', 'service-light-microsoft', 'service-office365', 'service-light-office365', 'service-skype', 'service-light-skype', 'service-webchat', 'service-light-webchat', 'service-directline', 'service-light-directline', 'service-envelope', 'service-light-envelope', 'service-fb-messenger', 'service-light-fb-messenger', 'service-fb-adds', 'service-light-fb-adds', 'service-outlook', 'service-light-outlook', 'service-vk', 'service-light-vk', 'service-vk-adds', 'service-light-vk-adds', 'service-vk-order', 'service-light-vk-order', 'service-fb', 'service-light-fb', 'service-fb-comments', 'service-light-fb-comments', 'service-slack', 'service-light-slack', 'service-viber', 'service-light-viber', 'service-kik', 'service-light-kik', 'service-apple', 'service-light-apple', 'service-universal', 'service-light-universal', 'service-organic', 'service-light-organic', 'service-telephonybot', 'service-light-telephonybot', 'service-whatsapp', 'service-light-whatsapp', 'service-wechat', 'service-light-wechat', 'service-avito', 'service-light-avito', 'service-mailru', 'service-light-mailru', 'service-sberbank', 'service-light-sberbank', 'service-green-sberbank', 'service-ok', 'service-light-ok', 'service-ya-toloka', 'service-rest-contact-center', 'service-light-rest-contact-center', 'service-audio-infocall', 'service-light-audio-infocall', 'service-olx', 'service-light-olx', 'service-zoom', 'service-light-zoom', 'service-blue-zoom', 'service-livechat-24', 'service-widget', 'service-light-widget', 'service-wheel', 'service-light-wheel', 'service-play', 'service-light-play', 'service-other', 'service-light-other', 'service-cart', 'service-light-cart', 'service-add', 'service-light-add', 'service-arrows', 'service-light-arrows', 'service-call-in', 'service-light-call-in', 'service-call-out', 'service-light-call-out']
  };
  var BxIcon = {
    computed: {
      classList: function classList() {
        return babelHelpers.defineProperty({}, "ui-icon-".concat(this.icon), props$2.icons.includes(this.icon));
      }
    },
    created: function created() {
      loadStyles();
    },
    props: {
      icon: {
        type: String,
        "default": 'file-empty',
        validator: function validator(value) {
          return props$2.icons.includes(value);
        }
      }
    },
    name: 'bx-icon',
    template: '  <div class="ui-icon" :class="classList">\n' + '    <i></i>\n' + '  </div>'
  };

  var props$3 = {
    sizes: ['lg', 'md', 'sm', 'xs'],
    colors: ['', 'success', 'warning', 'danger'],
    icons: ['', 'search', 'calendar', 'dots', 'phone', 'mail', 'clock', 'angle', 'clear', 'loader'],
    tagColors: ['default', 'primary', 'success', 'warning', 'danger']
  };
  var BxInput = {
    created: function created() {
      loadStyles();
    },
    emits: ['update:modelValue', 'change', 'click-before', 'click-after'],
    props: {
      modelValue: {
        type: String,
        "default": ''
      },
      placeholder: {
        type: String,
        "default": ''
      },
      disabled: {
        type: Boolean,
        "default": false
      },
      size: {
        type: String,
        "default": 'md',
        validator: function validator(value) {
          return props$3.sizes.includes(value);
        }
      },
      color: {
        type: String,
        "default": '',
        validator: function validator(value) {
          return props$3.colors.includes(value);
        }
      },
      width: {
        type: String,
        "default": ''
      },
      inline: {
        type: Boolean,
        "default": false
      },
      noBorder: {
        type: Boolean,
        "default": false
      },
      underline: {
        type: Boolean,
        "default": false
      },
      noPadding: {
        type: Boolean,
        "default": false
      },
      round: {
        type: Boolean,
        "default": false
      },
      tag: {
        type: String,
        "default": ''
      },
      tagColor: {
        type: String,
        "default": 'default',
        validator: function validator(value) {
          return props$3.tagColors.includes(value);
        }
      },
      beforeIcon: {
        type: String,
        "default": '',
        validator: function validator(value) {
          return props$3.icons.includes(value);
        }
      },
      beforeExt: {
        type: Boolean,
        "default": false
      },
      beforeButton: {
        type: Boolean,
        "default": false
      },
      afterIcon: {
        type: String,
        "default": '',
        validator: function validator(value) {
          return props$3.icons.includes(value);
        }
      },
      afterExt: {
        type: Boolean,
        "default": false
      },
      afterButton: {
        type: Boolean,
        "default": false
      }
    },
    name: 'bx-input',
    template: '  <div\n' + '    class="ui-ctl ui-ctl-textbox"\n' + '    :class="{\n' + '      \'ui-ctl-lg\': size === \'lg\',\n' + '      \'ui-ctl-md\': size === \'md\',\n' + '      \'ui-ctl-sm\': size === \'sm\',\n' + '      \'ui-ctl-xs\': size === \'xs\',\n' + '      \'ui-ctl-success\': color === \'success\',\n' + '      \'ui-ctl-warning\': color === \'warning\',\n' + '      \'ui-ctl-danger\': color === \'danger\',\n' + '      \'ui-ctl-before-icon\': beforeIcon && !beforeExt,\n' + '      \'ui-ctl-ext-before-icon\': beforeIcon && beforeExt,\n' + '      \'ui-ctl-after-icon\': afterIcon && !afterExt,\n' + '      \'ui-ctl-ext-after-icon\': afterIcon && afterExt,\n' + '      \'ui-ctl-inline\': inline,\n' + '      \'ui-ctl-no-border\': noBorder,\n' + '      \'ui-ctl-underline\': underline,\n' + '      \'ui-ctl-no-padding\': noPadding,\n' + '      \'ui-ctl-round\': round,\n' + '    }"\n' + '    :style="{\n' + '      \'max-width\': this.width || \'initial\',\n' + '      \'width\': this.width || \'auto\',\n' + '    }"\n' + '  >\n' + '    <component\n' + '       v-if="beforeIcon"\n' + '       :is="beforeButton ? \'button\' : \'div\'"\n' + '       :class="{\n' + '         \'ui-ctl-before\': !beforeExt,\n' + '         \'ui-ctl-ext-before\': beforeExt,\n' + '         \'ui-ctl-icon-search\': beforeIcon === \'search\',\n' + '         \'ui-ctl-icon-calendar\': beforeIcon === \'calendar\',\n' + '         \'ui-ctl-icon-dots\': beforeIcon === \'dots\',\n' + '         \'ui-ctl-icon-phone\': beforeIcon === \'phone\',\n' + '         \'ui-ctl-icon-mail\': beforeIcon === \'mail\',\n' + '         \'ui-ctl-icon-clock\': beforeIcon === \'clock\',\n' + '         \'ui-ctl-icon-angle\': beforeIcon === \'angle\',\n' + '         \'ui-ctl-icon-clear\': beforeIcon === \'clear\',\n' + '         \'ui-ctl-icon-loader\': beforeIcon === \'loader\',\n' + '       }"\n' + '       @click="$emit(\'click-before\')"\n' + '    ></component>\n' + '    <component\n' + '       v-if="afterIcon"\n' + '       :is="afterButton ? \'button\' : \'div\'"\n' + '       :class="{\n' + '         \'ui-ctl-after\': !afterExt,\n' + '         \'ui-ctl-ext-after\': afterExt,\n' + '         \'ui-ctl-icon-search\': afterIcon === \'search\',\n' + '         \'ui-ctl-icon-calendar\': afterIcon === \'calendar\',\n' + '         \'ui-ctl-icon-dots\': afterIcon === \'dots\',\n' + '         \'ui-ctl-icon-phone\': afterIcon === \'phone\',\n' + '         \'ui-ctl-icon-mail\': afterIcon === \'mail\',\n' + '         \'ui-ctl-icon-clock\': afterIcon === \'clock\',\n' + '         \'ui-ctl-icon-angle\': afterIcon === \'angle\',\n' + '         \'ui-ctl-icon-clear\': afterIcon === \'clear\',\n' + '         \'ui-ctl-icon-loader\': afterIcon === \'loader\',\n' + '       }"\n' + '       @click="$emit(\'click-after\')"\n' + '    ></component>\n' + '    <div\n' + '      v-if="tag"\n' + '      class="ui-ctl-tag"\n' + '      :class="{\n' + '        \'ui-ctl-tag-success\': tagColor === \'success\',\n' + '        \'ui-ctl-tag-primary\': tagColor === \'primary\',\n' + '        \'ui-ctl-tag-danger\': tagColor === \'danger\',\n' + '        \'ui-ctl-tag-warning\': tagColor === \'warning\',\n' + '      }"\n' + '      >{{ tag }}</div>\n' + '    <input\n' + '      type="text"\n' + '      class="ui-ctl-element"\n' + '      :value="modelValue"\n' + '      :placeholder="placeholder"\n' + '      :disabled="disabled"\n' + '      @input="$emit(\'update:modelValue\', $event.target.value)"\n' + '      @change="$emit(\'change\', $event.target.value)"\n' + '    >\n' + '  </div>'
  };

  function formatSizeUnits(countBytes) {
    var dictionary = {
      GB: 1073741824,
      MB: 1048576,
      KB: 1024
    };
    var formatBytes = function formatBytes(key) {
      var count = (countBytes / dictionary[key]).toFixed(2);
      return [count, key].join(' ');
    };
    var bytes = 0;
    if (countBytes >= dictionary.GB) bytes = formatBytes('GB');else if (countBytes >= dictionary.MB) bytes = formatBytes('MB');else if (countBytes >= dictionary.KB) bytes = formatBytes('KB');else bytes = [countBytes, 'B'].join(' ');
    return bytes;
  }

  var props$4 = {
    types: ['drop', 'button', 'link']
  };
  var BxInputFile = {
    methods: {
      getName: function getName(file) {
        return "".concat(file.name, " (").concat(formatSizeUnits(file.size), ")");
      },
      onChange: function onChange(e) {
        var _this$files;
        (_this$files = this.files).push.apply(_this$files, babelHelpers.toConsumableArray(e.target.files));
        this.$emit('change', babelHelpers.toConsumableArray(this.files));
      },
      onDelete: function onDelete(index) {
        var _this$files$splice = this.files.splice(index, 1),
          _this$files$splice2 = babelHelpers.slicedToArray(_this$files$splice, 1),
          file = _this$files$splice2[0];
        this.$emit('delete', babelHelpers.toConsumableArray(this.files), file);
      }
    },
    computed: {
      title: function title() {
        if (this.disabled) return '';
        if (this.files.length) return this.files.map(function (file) {
          return file.name;
        }).join('\n');
        if (this.multiple) return 'Файлы не выбраны.';
        return 'Файл не выбран.';
      }
    },
    created: function created() {
      loadStyles();
    },
    data: function data() {
      return {
        files: [],
        defaultPlaceholder: 'Загрузить файл или картинку'
      };
    },
    emits: ['change', 'delete'],
    props: {
      placeholder: {
        type: String,
        "default": '',
        validator: function validator(value) {
          return typeof value === 'string';
        }
      },
      type: {
        type: String,
        "default": 'drop',
        validator: function validator(value) {
          return props$4.types.includes(value);
        }
      },
      multiple: {
        type: Boolean,
        "default": false
      },
      disabled: {
        type: Boolean,
        "default": false
      }
    },
    name: 'bx-input-file',
    template: '  <div class="drag-n-drop">\n' + '    <label\n' + '      v-if="type === \'button\'"\n' + '      class="ui-ctl ui-ctl-file-btn"\n' + '      :class="{ \'bx-input-file-disabled\': disabled }"\n' + '      :title="title"\n' + '    >\n' + '      <input\n' + '        class="ui-ctl-element"\n' + '        type="file"\n' + '        :multiple="multiple"\n' + '        :disabled="disabled"\n' + '        @change="onChange"\n' + '      >\n' + '      <div class="ui-ctl-label-text">\n' + '        {{ placeholder || defaultPlaceholder }}\n' + '      </div>\n' + '    </label>\n' + '    <label\n' + '      v-else-if="type === \'link\'"\n' + '      class="ui-ctl ui-ctl-file-link"\n' + '      :class="{ \'bx-input-file-disabled\': disabled }"\n' + '      :title="title"\n' + '    >\n' + '      <input\n' + '        class="ui-ctl-element"\n' + '        type="file"\n' + '        :multiple="multiple"\n' + '        :disabled="disabled"\n' + '        @change="onChange"\n' + '      >\n' + '      <div class="ui-ctl-label-text">\n' + '        {{ placeholder || defaultPlaceholder }}\n' + '      </div>\n' + '    </label>\n' + '    <label\n' + '      v-else-if="type === \'drop\'"\n' + '      class="ui-ctl ui-ctl-file-drop"\n' + '      :class="{ \'bx-input-file-disabled\': disabled }"\n' + '      :title="title"\n' + '    >\n' + '      <div class="ui-ctl-label-text">\n' + '        <span>{{ placeholder || defaultPlaceholder }}</span>\n' + '        <small>Перетащить с помощью drag\'n\'drop</small>\n' + '      </div>\n' + '      <input\n' + '        class="ui-ctl-element"\n' + '        type="file"\n' + '        :multiple="multiple"\n' + '        :disabled="disabled"\n' + '        @change="onChange"\n' + '      >\n' + '    </label>\n' + '    <ul v-if="files.length" class="drag-n-drop__list">\n' + '      <li v-for="(file, key) in files" :key="key" class="drag-n-drop__file">\n' + '        <span class="drag-n-drop__name">{{ getName(file) }}</span>\n' + '        <span class="drag-n-drop__delete" @click="onDelete(key)"></span>\n' + '      </li>\n' + '    </ul>\n' + '  </div>'
  };

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var isMobile_1 = createCommonjsModule(function (module) {

  module.exports = isMobile;
  module.exports.isMobile = isMobile;
  module.exports["default"] = isMobile;
  var mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
  var notMobileRE = /CrOS/;
  var tabletRE = /android|ipad|playbook|silk/i;
  function isMobile(opts) {
    if (!opts) opts = {};
    var ua = opts.ua;
    if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent;
    if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
      ua = ua.headers['user-agent'];
    }
    if (typeof ua !== 'string') return false;
    var result = mobileRE.test(ua) && !notMobileRE.test(ua) || !!opts.tablet && tabletRE.test(ua);
    if (!result && opts.tablet && opts.featureDetect && navigator && navigator.maxTouchPoints > 1 && ua.indexOf('Macintosh') !== -1 && ua.indexOf('Safari') !== -1) {
      result = true;
    }
    return result;
  }
  });
  var isMobile_2 = isMobile_1.isMobile;

  var BxLink = {
    methods: {
      onClick: function onClick(e) {
        e.preventDefault();
        this.openLink(this.href);
      },
      onMiddleClick: function onMiddleClick(e) {
        e.preventDefault();
        this.openLink(this.href, true);
      },
      openLink: function openLink(url) {
        var _this = this;
        var inNewTab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var openLinkInNewTab = function openLinkInNewTab(href) {
          var anchor = document.createElement('a');
          anchor.href = [_this.getDomain(true), href].join('');
          anchor.target = '_blank';
          anchor.click();
        };
        if (inNewTab) openLinkInNewTab(url);else if (isMobile_1()) openLinkInNewTab(url);else this.openPath(url)["catch"](function () {
          return openLinkInNewTab(url);
        });
      }
    },
    props: {
      href: {
        type: String,
        required: true,
        validator: function validator(value) {
          return typeof value === 'string';
        }
      }
    },
    name: 'bx-link',
    template: '  <a :href="href" target="_blank" @click="onClick" @auxclick="onMiddleClick">\n' + '    <slot></slot>\n' + '  </a>'
  };

  var props$5 = {
    sizes: ['md', 'lg'],
    colors: ['primary', 'success', 'warning', 'danger']
  };
  var BxProgressBar = {
    computed: {
      width: function width() {
        return "".concat(this.progress, "%");
      },
      classList: function classList() {
        var _ref;
        return _ref = {}, babelHelpers.defineProperty(_ref, "ui-progressbar-".concat(this.size), props$5.sizes.includes(this.size)), babelHelpers.defineProperty(_ref, "ui-progressbar-".concat(this.color), props$5.colors.includes(this.color)), babelHelpers.defineProperty(_ref, 'ui-progressbar-bg', this.bg), babelHelpers.defineProperty(_ref, 'ui-progressbar-column', this.column), _ref;
      }
    },
    created: function created() {
      loadStyles();
    },
    props: {
      progress: {
        type: Number,
        "default": 0,
        validator: function validator(value) {
          return Number.isFinite(value);
        }
      },
      size: {
        type: String,
        "default": 'md',
        validator: function validator(value) {
          return props$5.sizes.includes(value);
        }
      },
      color: {
        type: String,
        "default": 'primary',
        validator: function validator(value) {
          return props$5.colors.includes(value);
        }
      },
      textBefore: {
        type: String,
        "default": ''
      },
      textAfter: {
        type: String,
        "default": ''
      },
      bg: {
        type: Boolean,
        "default": false
      },
      column: {
        type: Boolean,
        "default": false
      }
    },
    name: 'bx-progressbar',
    template: '  <div class="ui-progressbar" :class="classList">\n' + '    <div v-if="textBefore" class="ui-progressbar-text-before">{{ textBefore }}</div>\n' + '    <div class="ui-progressbar-track">\n' + '      <div class="ui-progressbar-bar" :style="{ width }"></div>\n' + '    </div>\n' + '    <div v-if="textAfter" class="ui-progressbar-text-after">{{ textAfter }}</div>\n' + '  </div>'
  };

  var BxRadio = {
    computed: {
      isChecked: function isChecked() {
        return this.modelValue === this.value;
      }
    },
    created: function created() {
      loadStyles();
    },
    emits: ['update:modelValue'],
    props: {
      modelValue: {
        type: [Boolean, String, Array, Object],
        "default": ''
      },
      value: {
        type: [Boolean, String, Array, Object],
        "default": ''
      },
      width: {
        type: String,
        "default": '320px'
      },
      disabled: {
        type: Boolean,
        "default": false
      }
    },
    name: 'bx-radio',
    template: '  <label class="ui-ctl ui-ctl-radio" :style="{ \'width\': width }">\n' + '    <input\n' + '      class="ui-ctl-element"\n' + '      type="radio"\n' + '      :checked="isChecked"\n' + '      :value="value"\n' + '      :disabled="disabled"\n' + '      @change="$emit(\'update:modelValue\', $event.target.value)"\n' + '    >\n' + '    <div class="ui-ctl-label-text">\n' + '      <slot></slot>\n' + '    </div>\n' + '  </label>'
  };

  var BxTagSelector = {
    methods: {
      getImageUrl: function getImageUrl(name) {
        return new URL("../assets/".concat(name, ".svg"), (typeof document !== 'undefined' ? document.currentScript && document.currentScript.src || document.baseURI : new (typeof URL !== 'undefined' ? URL : require('ur'+'l').URL)('file:' + __filename).href)).href;
      }
    },
    created: function created() {
      loadStyles();
    },
    name: 'bx-tag-selector',
    template: '  <div class="ui-tag-selector-outer-container">\n' + '    <div class="ui-tag-selector-container">\n' + '      <div class="ui-tag-selector-items">\n' + '        <div class="ui-tag-selector-item ui-tag-selector-tag ui-tag-selector-tag--has-avatar"\n' + '             style="background-color: rgb(188, 237, 252);"><a class="ui-tag-selector-tag-content"\n' + '                                                              href="/company/personal/user/150/"\n' + '                                                              target="_blank">\n' + '          <div class="ui-tag-selector-tag-avatar"\n' + '               :style="`background-image: url(${getImageUrl(\'default-tag-user\')});`"></div>\n' + '          <div class="ui-tag-selector-tag-title" style="color: rgb(16, 102, 187);">Создаватель\n' + '            Админ\n' + '          </div>\n' + '        </a>\n' + '          <div class="ui-tag-selector-tag-remove"></div>\n' + '        </div>\n' + '        <input type="text"\n' + '               class="ui-tag-selector-item ui-tag-selector-text-box ui-tag-selector-item-hidden"\n' + '               autocomplete="off" placeholder="" value=""><span\n' + '        class="ui-tag-selector-item ui-tag-selector-add-button"><span\n' + '        class="ui-tag-selector-add-button-caption">Добавить</span></span></div>\n' + '      <div class="ui-tag-selector-create-button ui-tag-selector-item-hidden"><span\n' + '        class="ui-tag-selector-create-button-caption">Создать</span></div>\n' + '    </div>\n' + '  </div>'
  };

  var props$6 = {
    resizes: ['', 'no', 'y', 'x']
  };
  var BxTextarea = {
    created: function created() {
      loadStyles();
    },
    emits: ['update:modelValue'],
    props: {
      modelValue: {
        type: String,
        "default": ''
      },
      placeholder: {
        type: String,
        "default": ''
      },
      resize: {
        type: String,
        "default": '',
        validator: function validator(value) {
          return props$6.resizes.includes(value);
        }
      },
      disabled: {
        type: Boolean,
        "default": false
      }
    },
    name: 'bx-textarea',
    template: '  <div\n' + '    class="ui-ctl ui-ctl-textarea"\n' + '    :class="{\n' + '      \'ui-ctl-no-resize\': resize === \'no\',\n' + '      \'ui-ctl-resize-y\': resize === \'y\',\n' + '      \'ui-ctl-resize-x\': resize === \'x\',\n' + '    }"\n' + '  >\n' + '    <textarea\n' + '      class="ui-ctl-element"\n' + '      :value="modelValue"\n' + '      :placeholder="placeholder"\n' + '      :disabled="disabled"\n' + '      @input="$emit(\'update:modelValue\', $event.target.value)"\n' + '    ></textarea>\n' + '  </div>'
  };

  var vueCollection = {
    bxalert: BxAlert,
    bxbutton: BxButton,
    bxcheckbox: BxCheckBox,
    bxdialog: BxDialog,
    bxentityselector: BxEntitySelector,
    bxicon: BxIcon,
    bxinput: BxInput,
    // bxinputdate: BxInputDate,
    bxinputfile: BxInputFile,
    bxlink: BxLink,
    bxprogressbar: BxProgressBar,
    bxradio: BxRadio,
    // bxselect: BxSelect,
    bxtagselector: BxTagSelector,
    bxtextarea: BxTextarea
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _vm = /*#__PURE__*/new WeakMap();
  var Bxui = /*#__PURE__*/function () {
    function Bxui(id) {
      babelHelpers.classCallCheck(this, Bxui);
      _classPrivateFieldInitSpec(this, _vm, {
        writable: true,
        value: void 0
      });
      this.selector = id;
      this.init();
    }
    babelHelpers.createClass(Bxui, [{
      key: "init",
      value: function init() {
        var context = this;
        babelHelpers.classPrivateFieldSet(this, _vm, ui_vue.BitrixVue.createApp({
          data: function data() {
            return {};
          },
          mounted: function mounted() {},
          components: vueCollection,
          beforeCreate: function beforeCreate() {
            this.$bitrix.Application.set(context);
          }
        }).mount(this.selector));
      }
    }]);
    return Bxui;
  }();

  exports.Bxui = Bxui;

}((this.BX.Protocol = this.BX.Protocol || {}),BX));
