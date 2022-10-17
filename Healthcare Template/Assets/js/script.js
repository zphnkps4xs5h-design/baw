// Navbar

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hide');
});





let slides = document.querySelectorAll('.slider-container');
let index = 0;


// next function

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

// prev function

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// autoplay

setInterval(next, 5000); //slide changes every 7s

// Now active button in testimonial


const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default Value = 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () =>{
        indicators[currentTestimonial].classList.remove('t-active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('t-active');
        currentTestimonial = i;
    })
} ) 