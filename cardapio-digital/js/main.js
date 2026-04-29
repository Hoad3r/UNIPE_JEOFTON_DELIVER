/* main.js — Filtro de categorias do cardápio */

(function () {
  'use strict';

  var filterBtns = document.querySelectorAll('.category-filter__btn');
  var sections   = document.querySelectorAll('.menu-section');
  var navToggle  = document.querySelector('.nav__toggle');
  var navLinks   = document.querySelector('.nav__links');

  /* ── Filtro por seção de categoria ── */

  function filterSections(category) {
    sections.forEach(function (section) {
      var match = category === 'all' || section.dataset.category === category;

      if (match) {
        section.style.display = '';
        /* força reflow para reiniciar a animação */
        section.classList.remove('menu-section--visible');
        void section.offsetWidth;
        section.classList.add('menu-section--visible');
      } else {
        section.style.display = 'none';
        section.classList.remove('menu-section--visible');
      }
    });

    /* scroll suave até o início do conteúdo */
    var main = document.querySelector('.page-layout__main');
    if (main) {
      setTimeout(function () {
        main.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  function setActiveBtn(activeBtn) {
    filterBtns.forEach(function (btn) {
      btn.classList.remove('category-filter__btn--active');
      btn.setAttribute('aria-pressed', 'false');
    });
    activeBtn.classList.add('category-filter__btn--active');
    activeBtn.setAttribute('aria-pressed', 'true');
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setActiveBtn(btn);
      filterSections(btn.dataset.filter);
    });
  });

  /* Animação inicial de entrada das seções */
  sections.forEach(function (section, i) {
    section.style.animationDelay = (i * 80) + 'ms';
    section.classList.add('menu-section--visible');
  });

  /* ── Menu hamburguer (mobile) ── */
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('nav__links--open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('nav__links--open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Smooth scroll para âncoras internas ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
