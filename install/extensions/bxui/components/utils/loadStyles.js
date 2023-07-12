export const loadStyles = (domain = '') => {
  if (!domain) {
    domain = window.location.host;
  }

  const root = `//${domain}/bitrix/js/ui`;
  const files = [
    'fonts/opensans/ui.font.opensans.min.css',
    'alerts/ui.alerts.min.css',
    'buttons/ui.buttons.min.css',
    'buttons/icons/ui.buttons.icons.min.css',
    'entity-selector/dist/entity-selector.bundle.min.css',
    'forms/ui.forms.min.css',
    'icons/b24/ui.icons.b24.min.css',
    'icons/base/ui.icons.base.min.css',
    'icons/disk/ui.icons.disk.min.css',
    'icons/service/ui.icons.service.min.css',
    'progressbar/ui.progressbar.min.css',
  ];
  const styles = files.reduce((Fragment, file) => {
    const href = [root, file].join('/');
    const links = document.querySelectorAll(`[href="${href}"]`);
    if (links.length) return Fragment;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    Fragment.append(link);
    return Fragment;
  }, new DocumentFragment());

  if (styles.children.length) document.head.prepend(styles);
};
