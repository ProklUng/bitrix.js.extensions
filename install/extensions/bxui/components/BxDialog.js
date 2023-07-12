
import { loadStyles } from './utils/loadStyles';

export const BxDialog = {
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/${name}.svg`, import.meta.url).href;
    },
  },
  created() {
    loadStyles();
  },
  data() {
    return {
      hoverTabs: false,
    };
  },
  props: {
    width: {
      type: String,
      default: '565px',
    },
    height: {
      type: String,
      default: '420px',
    },
    widthTab: {
      type: String,
      default: '160px',
    },
    visibleFooter: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-dialog',
  template: '  <div class="ui-selector-dialog" :style="{ width, height }">\n' +
      '    <div class="ui-selector-search">\n' +
      '      <div class="ui-tag-selector-outer-container">\n' +
      '        <div class="ui-tag-selector-container" style="max-height: 99px;">\n' +
      '          <div class="ui-tag-selector-items">\n' +
      '            <div class="ui-tag-selector-item ui-tag-selector-tag ui-tag-selector-tag--has-avatar">\n' +
      '              <a\n' +
      '                class="ui-tag-selector-tag-content"\n' +
      '                href="/company/personal/user/648/"\n' +
      '                target="_blank"\n' +
      '              >\n' +
      '              <div\n' +
      '                class="ui-tag-selector-tag-avatar"\n' +
      '                style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/406111/7acf4cadf975128573a8b1c2766af5d8/main/083/083bb1c93b3f0ea32baf3942a5ac6831/T02A7V6EGBA-U02AWPPB8KW-8358c0c61795-512.png&quot;);"\n' +
      '              ></div>\n' +
      '              <div\n' +
      '                class="ui-tag-selector-tag-title"\n' +
      '                style="color: rgb(16, 102, 187);"\n' +
      '              >Валентин Золотов</div>\n' +
      '            </a>\n' +
      '              <div class="ui-tag-selector-tag-remove"></div>\n' +
      '            </div>\n' +
      '            <input\n' +
      '              type="text"\n' +
      '              class="ui-tag-selector-item ui-tag-selector-text-box"\n' +
      '              autocomplete="off"\n' +
      '              placeholder="поиск"\n' +
      '              value=""\n' +
      '              style="width: 105px;"\n' +
      '            >\n' +
      '            <span class="ui-tag-selector-item ui-tag-selector-add-button ui-tag-selector-item-hidden">\n' +
      '              <span class="ui-tag-selector-add-button-caption">Добавить</span>\n' +
      '            </span>\n' +
      '          </div>\n' +
      '          <div class="ui-tag-selector-create-button ui-tag-selector-item-hidden">\n' +
      '            <span class="ui-tag-selector-create-button-caption">Создать</span>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui-selector-tabs">\n' +
      '      <div class="ui-selector-tab-contents">\n' +
      '        <div class="ui-selector-tab-content ui-selector-tab-content-active">\n' +
      '          <div class="ui-selector-items">\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/416471/7acf4cadf975128573a8b1c2766af5d8/main/da1/da1e1f2bf2d74d91cc7b12a5edc89269/avatar.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Марина Варгасова</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/253/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/373031/7acf4cadf975128573a8b1c2766af5d8/main/ad1/ad1fe123e4bc44190056ee6dcb77e0b1/ava.jpg&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Станислав Овсейчук</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/3843/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/404635/7acf4cadf975128573a8b1c2766af5d8/main/920/920d7e7302f88aa5393e192529f07c51/avatar.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Светлана Жилина</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/3967/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/402275/7acf4cadf975128573a8b1c2766af5d8/main/7bd/7bdf973e57e78bcbfeebb5a179bd3e79/WhatsApp Image 2021-08-16 at 09.25.49.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Ольга Старостина</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/4473/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/20075/7acf4cadf975128573a8b1c2766af5d8/main/ac8/ac8f45aac02e7eb29c0a3928407c061d/avatar.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Андрей Васильев</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/3/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box ui-selector-item-box-selected">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/406111/7acf4cadf975128573a8b1c2766af5d8/main/083/083bb1c93b3f0ea32baf3942a5ac6831/T02A7V6EGBA-U02AWPPB8KW-8358c0c61795-512.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Валентин Золотов</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/648/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'default-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">soldatkinilya1996@gmail.com</div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(35, 162, 202); background-color: rgb(220, 246, 254);">Приглашен</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/3863/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/37928/7acf4cadf975128573a8b1c2766af5d8/main/14e/14e90cc843ca8c337aeab2a225908022/DudkaVI_2.jpg&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Виталий Дудка</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/1/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/358095/7acf4cadf975128573a8b1c2766af5d8/main/a7e/a7e6c7a4589aff3351bcfabd3dab7290/2017-08-12 19-54-24_1503480392.JPG&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Александр Следков</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/1749/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/180608/7acf4cadf975128573a8b1c2766af5d8/main/548/54878a1b47614cc5ef24846bca30367f/1899970_863942187004388_2590537968458063550_n.jpg&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Елизавета Берсенева</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/197/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/305443/7acf4cadf975128573a8b1c2766af5d8/main/ef2/ef2c2997ef4ba2eaf3e22dcfe96a7025/yY7VX7I1v7I.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Марина Богданова</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/630/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/394095/7acf4cadf975128573a8b1c2766af5d8/main/af3/af351e7192f7110f4ff47851da3f8f54/avatar.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Ксения Богатова</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/732/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/390287/7acf4cadf975128573a8b1c2766af5d8/main/6a2/6a259c424711d01425b6f4ccdf304e83/2021.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Андрей Быков</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/17/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/215930/7acf4cadf975128573a8b1c2766af5d8/main/aaa/aaa11468c0fe38c823c31ff55323ecde/geometria.jpg&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Валентин Хонин</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/39/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Антон\n' +
      '                      Воронин\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/69/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/1553/7acf4cadf975128573a8b1c2766af5d8/main/ecb/ecbed7722959a4a69760b1bda667e8f9/218ed8c25bf179dbe74404f80b525f0f.jpg&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Робот Роботов</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/147/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Матвей\n' +
      '                      Ребров\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/249/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Сотрудник\n' +
      '                      Интерсвязь\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/512/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Дмитрий\n' +
      '                      Баталов\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/518/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Andrey\n' +
      '                      Tarakanon\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/520/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Евгения\n' +
      '                      Уразаева\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/526/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Ирина\n' +
      '                      Журавлева\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/528/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Sergey\n' +
      '                      Malinin\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/530/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Роман\n' +
      '                      Игоревич\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/534/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Алексей\n' +
      '                      Мельник\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/536/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Геворг\n' +
      '                      Минасян\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/540/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Станислав\n' +
      '                      Фролов\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/542/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Юрий\n' +
      '                      Феоктистов\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/544/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Дима\n' +
      '                      Коуров\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/546/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Рустам\n' +
      '                      Гумеров\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/552/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Андрей\n' +
      '                      Арканов\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/564/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Константин\n' +
      '                      Быченко\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/592/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Антон\n' +
      '                      Колонтай\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/602/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/99544/7acf4cadf975128573a8b1c2766af5d8/main/741/741a281662b8049313a69b261e4fd48d/IMG_2727ee.jpg&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Мария Русакова</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/694/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">Ксения\n' +
      '                      Серова\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/1080/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">\n' +
      '                      good1data@gmail.com\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/2305/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '\n' +
      '                     :style="`background-image: url(${getImageUrl(\'extranet-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title" style="color: rgb(202, 134, 0);">\n' +
      '                      marketing@fermer-usm.ru\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-badges"><span class="ui-selector-item-badge"\n' +
      '                                                               style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153);">Экстранет</span>\n' +
      '                    </div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/2307/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'default-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Татьяна Гейбух</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/2778/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/280018/7acf4cadf975128573a8b1c2766af5d8/main/836/836af0dfdbcad50354c68b431a2114a2/Foto0033.jpg&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Владимир Балакин</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/2870/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/319503/7acf4cadf975128573a8b1c2766af5d8/main/90f/90fa559e33cca72c26875096e07584ab/1hK3NG6Iz5E.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Александр Чеботарев</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/3601/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/330179/7acf4cadf975128573a8b1c2766af5d8/main/4be/4be3a681163b878f36fc3260dc126a31/ren-sg2.jpg&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Реналь Сунагатуллин</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/3861/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/373257/7acf4cadf975128573a8b1c2766af5d8/main/37c/37ce10551c70fc0474341a6d8d2fc17f/avatar.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Инна Петрачкова</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/4059/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'default-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Пользователь Тестовый</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/4463/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/413043/7acf4cadf975128573a8b1c2766af5d8/main/fff/fffd33b42eac5a6f6916e9f743d70a9c/avatar.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Анна Габитова</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/4669/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/413431/7acf4cadf975128573a8b1c2766af5d8/main/f74/f749a6a5f85bc369fdcfaacd984a0498/avatar.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Трухачев Вадим</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/4693/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/421135/7acf4cadf975128573a8b1c2766af5d8/main/66e/66e919e6ef25a41ccc6e524ed46acb9b/dcbIVt_ZA2I.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Алексей Овчинников</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/4857/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     :style="`background-image: url(${getImageUrl(\'default-user\')});`"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Константин Дядюра</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/4953/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/426573/7acf4cadf975128573a8b1c2766af5d8/main/554/55418b786fb0d05ee9511c413e74ef35/image-25-08-22-12-50-1.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Анна Бессонова</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/4959/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/427023/7acf4cadf975128573a8b1c2766af5d8/main/351/3516565f0e42e748682a3a8d96253c7f/photo_2022-07-25_17-47-14.png&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Артём Челноков</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/4963/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '            <div class="ui-selector-item-box">\n' +
      '              <div class="ui-selector-item">\n' +
      '                <div class="ui-selector-item-avatar"\n' +
      '                     style="background-image: url(&quot;https://cdn-ru.bitrix24.ru/teamr/resize_cache/427175/7acf4cadf975128573a8b1c2766af5d8/main/f8e/f8e3a072586a7512190c4cff5d46c79f/98362b141c035e93e5d128568cc41940.jpg&quot;);"></div>\n' +
      '                <div class="ui-selector-item-titles">\n' +
      '                  <div class="ui-selector-item-supertitle"></div>\n' +
      '                  <div class="ui-selector-item-title-box">\n' +
      '                    <div class="ui-selector-item-title">Алексей Акимов</div>\n' +
      '                    <div class="ui-selector-item-badges"></div>\n' +
      '                    <div class="ui-selector-item-caption"></div>\n' +
      '                  </div>\n' +
      '                  <div class="ui-selector-item-subtitle"></div>\n' +
      '                </div>\n' +
      '                <div class="ui-selector-item-indicator"></div>\n' +
      '                <a class="ui-selector-item-link" href="/company/personal/user/4965/" target="_blank"\n' +
      '                   title=""><span class="ui-selector-item-link-text">о сотруднике</span></a></div>\n' +
      '              <div class="ui-selector-item-children"></div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div\n' +
      '        class="ui-selector-tab-labels"\n' +
      '        :class="[hoverTabs ? \'ui-selector-tab-labels--active\' : null]"\n' +
      '        @mouseover="hoverTabs = true"\n' +
      '        @mouseleave="hoverTabs = false"\n' +
      '        :style="{ \'max-width\': hoverTabs ? widthTab : null }"\n' +
      '      >\n' +
      '        <div class="ui-selector-tab-label ui-selector-tab-label-active"> <!--ui-selector-tab-label-hidden ui-selector-tab-label-hover-->\n' +
      '          <div class="ui-selector-tab-icon"></div>\n' +
      '          <div class="ui-selector-tab-title">Пользователи</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui-selector-footer-container">\n' +
      '      <div\n' +
      '        class="ui-selector-footer"\n' +
      '        :class="{ \'ui-selector-footer--show\': visibleFooter }"\n' +
      '      >\n' +
      '        <slot name="footer">\n' +
      '          <div class="ui-selector-footer-default">\n' +
      '            <span class="ui-selector-footer-link ui-selector-footer-link-add">Пригласить сотрудника</span>\n' +
      '            <span class="ui-selector-footer-conjunction">или</span>\n' +
      '            <span class="ui-selector-footer-link">пригласить гостя</span>\n' +
      '            <span\n' +
      '              data-hint="Вы можете добавить не только сотрудника, но и партнера или клиента по электронной почте."\n' +
      '              data-hint-init="y"\n' +
      '              class="ui-hint"\n' +
      '            >\n' +
      '              <span class="ui-hint-icon"></span>\n' +
      '            </span>\n' +
      '          </div>\n' +
      '        </slot>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>'
}
