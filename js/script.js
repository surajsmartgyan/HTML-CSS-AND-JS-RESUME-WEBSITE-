//toggle icon navbar 
let menuIcon=document.querySelector('#menu-icons');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>
{ 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll=()=>{
    //sticky header 
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    //remove toggle 

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
