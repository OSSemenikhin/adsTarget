const arrowDownSvg = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.65674 5.80521L10.5593 0.902607L11.3136 1.65685L5.65674 7.31371L-0.000115871 1.65685L0.754131 0.902607L5.65674 5.80521Z" fill="currentColor"/> </svg>`;
document.addEventListener("DOMContentLoaded", () => {
  // selectS
  if (document.getElementById("region__select")) {
    const selectRegionOpt = {
      element: "region__select",
      current: 1,
      icon: arrowDownSvg,
      items: [
        { name: "Москва" },
        { name: "Казань" },
        { name: "Уфа" },
        { name: "Пермь" },
      ],
      classToAdd: {
        header: ["header-region-select__header"],
        current: ["header-region-select__current"],
        icon: ["header-region-select__icon"],
        list: ["header-region-select__list"],
        item: ["header-region-select__item"],
        option: ["header-categories__option"],
      },
    };
    const selectRegion = $$.choozzie.create(selectRegionOpt);
  }

  if (document.getElementById("categories__select")) {
    const selectCategoryOpt = {
      element: "categories__select",
      placeholder: "Категория",
      icon: arrowDownSvg,
      items: [
        { name: "Диваны" },
        { name: "Кресла" },
        { name: "Пуфы" },
        { name: "Кровати" },
        { name: "Тумбы" },
        { name: "Комоды" },
        { name: "Стулья" },
        { name: "Столы" },
        { name: "Аксессуары" },
        { name: "Стулья" },
        { name: "Столы" },
      ],
      classToAdd: {
        header: ["header-categories__header"],
        current: ["header-categories__current"],
        icon: ["header-categories__icon"],
        list: ["header-categories__list"],
        item: ["header-categories__item"],
        option: ["header-categories__option"],
      },
    };
    const selectCategory = $$.choozzie.create(selectCategoryOpt);
  }

  // SWIPERS
  const ariaButtonsSwiperMessage = {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
    paginationBulletMessage: "Перейти к слайду {{index}}",
  };

  if (document.querySelector(".hero-slider")) {
    const heroSlider = new Swiper(".hero-slider", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      a11y: ariaButtonsSwiperMessage,
    });
  }

  if (document.querySelector(".special-slider")) {
    const specialOffersSlider = new Swiper(".special-slider", {
      navigation: {
        prevEl: ".special-slider-buttons__prev",
        nextEl: ".special-slider-buttons__next",
      },
      a11y: ariaButtonsSwiperMessage,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 33,
        },
        1300: {
          slidesPerView: "auto",
          spaceBetween: 33,
        },
      },
    });
  }
  if (document.querySelector(".useful-slider")) {
    const usefulSlider = new Swiper(".useful-slider", {
      navigation: {
        prevEl: ".useful-slider-buttons__prev",
        nextEl: ".useful-slider-buttons__next",
      },
      a11y: ariaButtonsSwiperMessage,
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
        1300: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  // BURGER
  const menuOpenButton = document.getElementById("burger");
  const menuCloseButton = document.getElementById("burger__close");
  const menuNav = document.getElementById("nav-menu__mobile");

  const burger = {
    buttonOpen: menuOpenButton,
    buttonClose: menuCloseButton,
    elements: [menuNav, menuOpenButton, menuCloseButton],
    open() {
      this.elements.forEach((el) => el.classList.add("open"));
    },
    close() {
      this.elements.forEach((el) => el.classList.add("temporaryClose"));
      const closeMenu = () => {
        this.elements.forEach((el) => el.classList.remove("open"));
        this.elements.forEach((el) => el.classList.remove("temporaryClose"));
      };
      setTimeout(closeMenu, 300);
    },
  };

  // TOOLTIP
  const tooltipFeedbackButton = document.getElementById(
    "feedback_tooltip_button"
  );
  const tooltipFeedbackText = document.getElementById("feedback_tooltip_text");

  // EVENTLISTENER CLICK

  document.addEventListener("click", (e) => {
    // BURGER
    if (e.target == burger.buttonOpen) {
      burger.open();
    } else if (e.target == burger.buttonClose) {
      burger.close();
    } else if (
      e.target != burger.buttonOpen &&
      e.target != burger.buttonClose &&
      menuNav.classList.contains("open")
    ) {
      burger.close();
    }

    // TOOLTIP FEEDBACK
    if (tooltipFeedbackButton) {
      if (e.target == tooltipFeedbackButton) {
        tooltipFeedbackText.classList.toggle("open");
      } else {
        if (tooltipFeedbackText.classList.contains("open")) {
          tooltipFeedbackText.classList.remove("open");
        }
      }
    }

    // if (e.target == tooltipFeedbackButton)
    //   tooltipFeedbackText.classList.toggle("open");
    // else if (
    //   e.target != tooltipFeedbackButton &&
    //   tooltipFeedbackText.classList.contains("open")
    // )
    //   tooltipFeedbackText.classList.remove("open");
  });
});
