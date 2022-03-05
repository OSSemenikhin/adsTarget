document.addEventListener("DOMContentLoaded", () => {
  // BURGER
  const burger = {
    openState: false,
    button: document.getElementById('burger'),
    background: document.getElementById('burger_background'),
    nav: document.getElementById('nav'),
    icon: document.getElementById('burger_icon'),
    links: document.querySelectorAll('.header-nav__link'),
    linksSocials: document.querySelectorAll('.socials__link'),

    open() {
      [
        this.button,
        this.background,
        this.nav,
        this.icon,
      ].forEach(element => element.classList.add('open'));
      this.openState = true;
      document.body.classList.add('disable-scroll');
      [...this.links, ...this.linksSocials].forEach(link => {
        link.addEventListener('click', e => this.close());
      });
    },
    close() {
      [
        this.button,
        this.background,
        this.nav,
        this.icon,
      ].forEach(element => element.classList.remove('open'));
      this.openState = false;
      document.body.classList.remove('disable-scroll');
      [...this.links, ...this.linksSocials].forEach(link => {
        link.removeEventListener('click', e => this.close());
      });
    },
    addListeners() {
      this.button.addEventListener('click', e => {
        if (this.openState) this.close();
        else this.open();
      });
      this.button.addEventListener('touchstart', e => {
        this.icon.classList.add('header-burger__icon--active');
      });
      this.button.addEventListener('touchend', e => {
        this.icon.classList.add('header-burger__icon--time');
        setTimeout(() => this.icon.classList.remove('header-burger__icon--active'), 150);
      });
    }
  }
  burger.addListeners();
});
