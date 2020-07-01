
  //$('.icon').click(function() {
    //$('.icon').toggleClass('active');
    //$('.mobilLinks').toggleClass('site-nav--open', 500);
  //})



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
