"use strict"

const hamburgerMenu = document.querySelector('.navbar__hamburger');
const menuBody = document.querySelector('.navbar__li');
const navbarMenu = document.querySelector('.navbar');

if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    hamburgerMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    navbarMenu.classList.toggle('_active');
  });
}

const navbarLinks = document.querySelectorAll('.navbar__link[data-link]');
if (navbarLinks.length > 0) {
  navbarLinks.forEach(navbarLink => {
    navbarLink.addEventListener("click", onNavbarLinkClick);
  });

  function onNavbarLinkClick(e) {
    const navbarLink = e.target;

    if (navbarLink.dataset.link && document.querySelector(navbarLink.dataset.link)) {
      const linkBlock = document.querySelector(navbarLink.dataset.link);
      const linkBlockValue = linkBlock.getBoundingClientRect().top + pageYOffset;

      if (hamburgerMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        hamburgerMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        navbarMenu.classList.remove('_active');
      }

      window.scrollTo({
        top: linkBlockValue
      });
      e.preventDefault();
    }
  }
}

window.addEventListener('click', e => {
  const target = e.target;

  if (!target.closest('.navbar__li') && !target.closest('.navbar__hamburger')) {
    document.body.classList.remove('_lock');
    hamburgerMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
    navbarMenu.classList.remove('_active');
  }
});