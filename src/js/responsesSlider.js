document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".responses-slider")) {
    const responsesSlider = new Swiper(".responses-slider", {
      allowTouchMove: false,
      a11y: {
        prevSlideMessage: "Предыдущий слайд",
        nextSlideMessage: "Следующий слайд",
        paginationBulletMessage: "Перейти к слайду {{index}}",
      },
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
});
