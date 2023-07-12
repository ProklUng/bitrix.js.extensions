import { loadStyles } from './utils/loadStyles';

export const props = {
  icons: [
    'file-empty', 'file-txt', 'file-doc', 'file-xls', 'file-php', 'file-pdf', 'file-ppt',
    'file-rar', 'file-zip', 'file-set', 'file-img', 'file-mov', 'file-folder', 'file-folder-shared',
    'file-folder-shared-2', 'common-user', 'common-user-group', 'common-company', 'common-phone',
    'common-notification', 'common-bitrix24', 'common-cloud', 'common-folder', 'common-info',
    'service-alice', 'service-light-alice', 'service-fb-instagram', 'service-light-fb-instagram',
    'service-instagram-fb', 'service-light-instagram-fb', 'service-instagram',
    'service-light-instagram', 'service-twilio', 'service-light-twilio', 'service-callback',
    'service-light-callback', 'service-livechat', 'service-light-livechat', 'service-liveid',
    'service-light-liveid', 'service-ya', 'service-light-ya', 'service-ya-dialogs',
    'service-light-ya-dialogs', 'service-ya-direct', 'service-light-ya-direct', 'service-1c',
    'service-light-1c', 'service-google', 'service-light-google', 'service-google-ads',
    'service-light-google-ads', 'service-twitter', 'service-light-twitter', 'service-email',
    'service-light-email', 'service-messenger', 'service-light-messenger', 'service-estore',
    'service-light-estore', 'service-imessage', 'service-light-imessage', 'service-webform',
    'service-light-webform', 'service-sms', 'service-light-sms', 'service-call',
    'service-light-call', 'service-call-up', 'service-light-call-up', 'service-infocall',
    'service-light-infocall', 'service-site-b24', 'service-light-site-b24', 'service-site',
    'service-light-site', 'service-calltracking', 'service-light-calltracking', 'service-telegram',
    'service-light-telegram', 'service-bitrix24', 'service-light-bitrix24', 'service-groupme',
    'service-light-groupme', 'service-crm', 'service-light-crm', 'service-lead',
    'service-light-lead', 'service-deal', 'service-light-deal', 'service-campaign',
    'service-light-campaign', 'service-chatbot', 'service-light-chatbot', 'service-common',
    'service-light-common', 'service-g-assistant', 'service-light-g-assistant', 'service-microsoft',
    'service-light-microsoft', 'service-office365', 'service-light-office365', 'service-skype',
    'service-light-skype', 'service-webchat', 'service-light-webchat', 'service-directline',
    'service-light-directline', 'service-envelope', 'service-light-envelope',
    'service-fb-messenger', 'service-light-fb-messenger', 'service-fb-adds',
    'service-light-fb-adds', 'service-outlook', 'service-light-outlook', 'service-vk',
    'service-light-vk', 'service-vk-adds', 'service-light-vk-adds', 'service-vk-order',
    'service-light-vk-order', 'service-fb', 'service-light-fb', 'service-fb-comments',
    'service-light-fb-comments', 'service-slack', 'service-light-slack', 'service-viber',
    'service-light-viber', 'service-kik', 'service-light-kik', 'service-apple',
    'service-light-apple', 'service-universal', 'service-light-universal', 'service-organic',
    'service-light-organic', 'service-telephonybot', 'service-light-telephonybot',
    'service-whatsapp', 'service-light-whatsapp', 'service-wechat', 'service-light-wechat',
    'service-avito', 'service-light-avito', 'service-mailru', 'service-light-mailru',
    'service-sberbank', 'service-light-sberbank', 'service-green-sberbank', 'service-ok',
    'service-light-ok', 'service-ya-toloka', 'service-rest-contact-center',
    'service-light-rest-contact-center', 'service-audio-infocall', 'service-light-audio-infocall',
    'service-olx', 'service-light-olx', 'service-zoom', 'service-light-zoom', 'service-blue-zoom',
    'service-livechat-24', 'service-widget', 'service-light-widget', 'service-wheel',
    'service-light-wheel', 'service-play', 'service-light-play', 'service-other',
    'service-light-other', 'service-cart', 'service-light-cart', 'service-add', 'service-light-add',
    'service-arrows', 'service-light-arrows', 'service-call-in', 'service-light-call-in',
    'service-call-out', 'service-light-call-out',
  ],
};

export const BxIcon = {
  computed: {
    classList() {
      return {
        [`ui-icon-${this.icon}`]: props.icons.includes(this.icon),
      };
    },
  },
  created() {
    loadStyles();
  },
  props: {
    icon: {
      type: String,
      default: 'file-empty',
      validator(value) {
        return props.icons.includes(value);
      },
    },
  },
  name: 'bx-icon',
  template: '  <div class="ui-icon" :class="classList">\n' +
      '    <i></i>\n' +
      '  </div>'
}
