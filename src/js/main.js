const arrowDownSvg = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.65674 5.80521L10.5593 0.902607L11.3136 1.65685L5.65674 7.31371L-0.000115871 1.65685L0.754131 0.902607L5.65674 5.80521Z" fill="currentColor"/> </svg>`;
document.addEventListener("DOMContentLoaded", () => {

  // Селекты в модальном окне услуг

  const selectOpt = {
    element: "modalSelectMenu",
    current: 1,
    icon: arrowDownSvg,
    items: [],
    // currentHidden: true,
    classToAdd: {
      header: ["modal-services-select__header"],
      current: ["modal-services-select__current"],
      icon: ["modal-services-select__icon"],
      list: ["modal-services-select__list"],
      item: ["modal-services-select__item"],
      option: ["modal-services-select__option"],
    },
  }
  const targetItems = [
    { name: "Инстаграм от 35тр", secondName: 'instagram' },
    { name: "ФБ от 35тр", secondName: 'fb' },
    { name: "ВК от 25тр", secondName: 'vk' },
    { name: "Тикток от 25тр", secondName: 'tikTok' },
  ];
  const contentItems = [
    { name: "Ведение сообществ в соцсетеях", secondName: 'socials' },
    { name: "Оформление сообществ", secondName: 'community' },
    { name: "Создание контента", secondName: 'creating' },
  ];
  const contextItems = [
    { name: "Яндекс", secondName: 'yandex' },
    { name: "Google", secondName: 'Google' },
    { name: "Яндекс + Google", secondName: 'yandexAndGoogle' },
  ];

  const selectLable = document.getElementById('modalSelectMenuLabel');
  const selectElement = document.getElementById('modalSelectMenu');

  // Модальное окно
  const modal = new ModalGoody({
    isOpen: (modal) => {
      if (modal.select && modal.typeInfo) {
        selectLable.classList.add("_visible");
        selectElement.classList.add("_visible");
        switch(modal.typeInfo) {
          case 'target':
            selectOpt.items = [...targetItems];
            break;
          case 'content':
            selectOpt.items = [...contentItems];
            break;
          case 'context':
            selectOpt.items = [...contextItems];
            break;
        }
        const targetSelect = $$.choozzie.create(selectOpt);
        modal.selectMenu = targetSelect;
      }
    },
    isClose: (modal) => {
      if (modal.selectMenu) {
        modal.selectMenu.destroy();
        selectLable.classList.remove("_visible");
        selectElement.classList.remove("_visible");
      }
      const radios = modal.modalContainer.querySelectorAll('[type="radio"]');
      radios.forEach(element => element.checked = false);
    },
  });

  // SWIPERS
  const ariaButtonsSwiperMessage = {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
    paginationBulletMessage: "Перейти к слайду {{index}}",
  }

  if (document.querySelector(".clients-slider")) {
    const clientsSlider = new Swiper(".clients-slider", {
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      navigation: {
        prevEl: ".clients-slider-buttons__prev",
        nextEl: ".clients-slider-buttons__next",
      },
      a11y: ariaButtonsSwiperMessage,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
          loop: false,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 33,
          loop: false,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        1300: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 33,
          loop: true,
        },
        1400: {
          slidesPerView: 6,
          slidesPerGroup: 6,
          spaceBetween: 33,
          loop: true,
        },
      },
    });
  }
  if (document.querySelector(".responses-slider")) {
    const responsesSlider = new Swiper(".responses-slider", {
      allowTouchMove: false,
      a11y: ariaButtonsSwiperMessage,
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoHeight: false,
      navigation: {
        prevEl: ".responses-slider-buttons__prev",
        nextEl: ".responses-slider-buttons__next",
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          autoHeight: true,
        },
        768: {
          autoHeight: false,
        },
      },
    });
  }
  if (document.querySelector(".technologies-slider")) {
    const technologiesSlider = new Swiper(".technologies-slider", {
      a11y: ariaButtonsSwiperMessage,
      loop: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
      navigation: {
        prevEl: ".technologies-slider-buttons__prev",
        nextEl: ".technologies-slider-buttons__next",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 33,
        },
        1300: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 33,
        },
        1400: {
          slidesPerView: 6,
          slidesPerGroup: 6,
          spaceBetween: 33,
        },
      },
    });
  }
  if (document.querySelector(".team-slider")) {
    const teamSlider = new Swiper(".team-slider", {
      a11y: ariaButtonsSwiperMessage,
      loop: true,
      slidesPerscrollSpeediew: 1,
      spaceBetween: 0,
      navigation: {
        prevEl: ".team-slider-buttons__prev",
        nextEl: ".team-slider-buttons__next",
      },
    });
  }
  // NAV MENU
  const links = document.querySelectorAll('.header-nav__link');
  const header = document.querySelector('.header');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const toSection = document.querySelector(link.hash);
      const sectionPosY = window.pageYOffset + toSection.getBoundingClientRect().top;
      const headerHeight = header.offsetHeight;
      const scrollPosY = sectionPosY - headerHeight;
      history.pushState(null, null, link.hash);
      window.scrollTo({
        top: scrollPosY,
        behavior: "smooth"
      });
    });
  });

  // BURGER
  const burger = {
    openState: false,
    button: document.getElementById('burger'),
    background: document.getElementById('burger_background'),
    nav: document.getElementById('nav'),
    icon: document.getElementById('burger_icon'),
    links: links,
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
