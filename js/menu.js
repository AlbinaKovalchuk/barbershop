(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mob-menu-list'),
    animateTitle: document.querySelector('h1.hero-title'),
  };

  console.log(refs.animateTitle);
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.animateTitle.classList.toggle('animate__fadeInDown');
  }
  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
    refs.animateTitle.classList.add('animate__fadeInDown');
  }
})();
