

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => link.classList.remove('active-link'));
    this.classList.add('active-link');
}


// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show')
// }
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})
sr.reveal('.new-element', {delay: 200})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionId = this.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// function handleClick(event) {
//   event.preventDefault();
//   const targetId = event.target.getAttribute("href").slice(1);
//   const targetPosition = document.getElementById(targetId).offsetTop;
//   window.scrollTo({
//     top: targetPosition,
//     behavior: "smooth"
//   });
// }

// // Select the navigation bar
// const nav = document.querySelector('.nav');

// // Get the offset position of the navbar
// const navTop = nav.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyNav() {
//   if (window.pageYOffset >= navTop) {
//     document.body.style.paddingTop = nav.offsetHeight + 'px';
//     document.body.classList.add('sticky');
//   } else {
//     document.body.style.paddingTop = 0;
//     document.body.classList.remove('sticky');
//   }
// }

// // Add an event listener to the window object to detect when the user scrolls
// window.addEventListener('scroll', stickyNav);

// const nav = document.querySelector('#navbar');
// let prevScrollPos = window.pageYOffset;

// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollPos > currentScrollPos) {
//     nav.classList.remove('hide');
//   } else {
//     nav.classList.add('hide');
//   }
//   prevScrollPos = currentScrollPos;
// }



