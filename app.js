const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  // const btn=document.querySelectorAll(".burger");
  const viss = document.querySelector('.viss');


  //Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    viss.classList.toggle('blur-active');


    //animate navLinks
    navLinks.forEach((link, index) => {

      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/15+0.2}s`;


      }
    });


    //Burger animācija
    burger.classList.toggle('toggle');

    //blur efekts


  })
}


navSlide();