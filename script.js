// Slider
// let slides = document.querySelectorAll(".slide");
// const slider = document.querySelector(".slider");
// slider.style.transform = "scale(.2)";
// slider.style.overflow = "hidden";

// // Cloned slides
// let firstSlide = slides[0];
// let lastSlide = slides[slides.length - 1];
// let cloneFirst = firstSlide.cloneNode(true);
// let cloneLast = lastSlide.cloneNode(true);

// // Connect cloned slides to slider
// slider.appendChild(cloneFirst);
// slider.insertBefore(cloneLast, firstSlide);

// let curSlide = 0;
// let maxSlides = slides.length;

// slides = document.querySelectorAll(".slide");
// maxSlides = slides.length;

// slides.forEach((slide, i) => (slide.style.transform = `translateX(${100 * i}%)`));

// const changeSlide = function () {
//    curSlide++;
//    if (curSlide === maxSlides) {
//       curSlide = 0;
//    }
//    slides.forEach((slide, i) => (slide.style.transform = `translateX(${100 * (i - curSlide)}%)`));
// };

// const changeSlide = function () {
//    curSlide++;
//    if (curSlide === maxSlides) {
//       slider.style.transition = "none";
//       curSlide = 0;
//       setTimeout(() => {
//          slider.style.transition = "";
//       }, 0);
//    }
//    slides.forEach((slide, i) => (slide.style.transform = `translateX(${100 * (i - curSlide)}%)`));
// };

// setInterval(() => {
//    changeSlide();
// }, 3000);
