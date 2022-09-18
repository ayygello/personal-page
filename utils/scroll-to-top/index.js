const scrollToTop = () => {
  const arrow = document.querySelector('#arrow');

  arrow.addEventListener('click', () => {
    window.scrollTo(scrollX, 0);
  });

  window.addEventListener('scroll', () => {
    arrow.hidden = scrollY < document.documentElement.clientHeight;
  });
};

scrollToTop();
