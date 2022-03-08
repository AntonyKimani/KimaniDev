const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.parent-header');

navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('show__menu');
    navMenu.style.backgroundColor  = ('#fff');
});
