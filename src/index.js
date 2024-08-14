//import "./styles.css";
const about = document.querySelector('#about');
const carousel = document.querySelector('carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems[1].style.display = "none";
console.log(carouselItems)
const slickDots = document.querySelector('.slick-dots button');
console.log(slickDots);
slickDots.addEventListener("click", e => {
    carouselItems[0].style.display = "none";
    carouselItems[1].style.display = "flex";
    carousel.appendChild(carouselItems[1]);
})
console.log('Hello webpack!')