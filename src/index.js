//import "./styles.css";
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems[1].style.display = "none";
const slickDots = document.querySelectorAll('.slick-dots button');

slickDots[0].addEventListener("click", e => {
    console.log("car1 clicked")
    carouselItems[1].style.display = "none";
    carouselItems[0].style.display = "flex";
});


slickDots[1].addEventListener("click", e => {
    console.log('car2 clicked')
    carouselItems[0].style.display = "none";
    carouselItems[1].style.display = "flex";
});
