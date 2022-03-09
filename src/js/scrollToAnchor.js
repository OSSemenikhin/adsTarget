  // Scroll to anchor
  const links = document.querySelectorAll('[href^="#"]');
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
