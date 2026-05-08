/* main.js — Filtro de categorias do cardápio */

(function () {
  'use strict';

  var filterBtns = document.querySelectorAll('.category-filter__btn');
  var sections   = document.querySelectorAll('.menu-section');
  var navToggle  = document.querySelector('.navbar__toggle');
  var navLinks   = document.querySelector('.navbar__menu');

  function filterSections(category) {
    sections.forEach(function (section) {
      var match = category === 'all' || section.dataset.category === category;

      if (match) {
        section.style.display = '';
        /* void offsetWidth força reflow para reiniciar a animação CSS */
        section.classList.remove('menu-section--visible');
        void section.offsetWidth;
        section.classList.add('menu-section--visible');
      } else {
        section.style.display = 'none';
        section.classList.remove('menu-section--visible');
      }
    });

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

  sections.forEach(function (section, i) {
    section.style.animationDelay = (i * 80) + 'ms';
    section.classList.add('menu-section--visible');
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('navbar__menu--open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('navbar__menu--open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('navbar__menu--open')) {
      navLinks.classList.remove('navbar__menu--open');
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    }
  });

  var headerEl = document.querySelector('.header');
  if (headerEl) {
    window.addEventListener('scroll', function () {
      headerEl.classList.toggle('header--scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  var yearEl = document.querySelector('.footer__year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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
