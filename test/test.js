
(function($) { "use strict";

    //Navigation

    var app = function () {

        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav_list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };
        init();
    }();
})(jQuery);
const nav = () => {
  const icon = document.querySelector('.icon');
  const nav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav li');

  icon.addEventListener('click', () => {
  icon.classList.toggle('active');
  nav.classList.toggle('nav-active');
  })
}

nav();
