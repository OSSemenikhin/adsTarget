const arrowDownSvg = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.65674 5.80521L10.5593 0.902607L11.3136 1.65685L5.65674 7.31371L-0.000115871 1.65685L0.754131 0.902607L5.65674 5.80521Z" fill="currentColor"/> </svg>`;
document.addEventListener("DOMContentLoaded", () => {
  const modal = new ModalGoody({
    isOpen: (modal) => {
      console.log('opened');
    },
    isClose: (modal) => {
      console.log('closed');
    },
  });
  console.log(modal)
});
