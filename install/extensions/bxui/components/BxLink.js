import isMobile from 'is-mobile';

export const BxLink = {
  methods: {
    onClick(e) {
      e.preventDefault();
      this.openLink(this.href);
    },
    onMiddleClick(e) {
      e.preventDefault();
      this.openLink(this.href, true);
    },
    openLink(url, inNewTab = false) {
      const openLinkInNewTab = (href) => {
        const anchor = document.createElement('a');
        anchor.href = [this.getDomain(true), href].join('');
        anchor.target = '_blank';
        anchor.click();
      };

      if (inNewTab) openLinkInNewTab(url);
      else if (isMobile()) openLinkInNewTab(url);
      else this.openPath(url).catch(() => openLinkInNewTab(url));
    }
  },
  props: {
    href: {
      type: String,
      required: true,
      validator(value) {
        return typeof value === 'string';
      },
    },
  },
  name: 'bx-link',
  template: '  <a :href="href" target="_blank" @click="onClick" @auxclick="onMiddleClick">\n' +
      '    <slot></slot>\n' +
      '  </a>'
}
