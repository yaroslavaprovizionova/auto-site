window.addEventListener('DOMContentLoaded', function() {

  'use strict';
  let tab = document.querySelectorAll('.cars-search__header-tab'),
    tabSVG = document.querySelectorAll('.cars-search__header-tab-icon'),
    tabHeader = document.querySelector('.cars-search__header'),
    tabContent = document.querySelectorAll('.cars-search__form-tab-content');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tab[i].classList.remove('cars-search__header-tab_active');
      tabSVG[i].classList.remove('cars-search__header-tab-icon_active');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        tab[b].classList.add('cars-search__header-tab_active');
        tabSVG[b].classList.add('cars-search__header-tab-icon_active');
      }
  }

  tabHeader.addEventListener('click', function (event) {
    let target = event.target;

    if (target && target.classList.contains('cars-search__header-tab-icon')) {
      for(let i = 0; i < tabSVG.length; i++) {
        if (target == tabSVG[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });



});