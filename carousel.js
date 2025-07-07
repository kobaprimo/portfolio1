const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-img');
const nextBtn = document.querySelector('.news-carousel-btn.right');
const prevBtn = document.querySelector('.news-carousel-btn.left');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >=slides.length) {
        currentIndex = 0;
    }
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length -1;
    }
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

setInterval (() => {
    currentIndex++;
    if (currentIndex >=slides.length) {
        currentIndex = 0;
    }
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
},5000);

window.addEventListener('DOMContentLoaded', () => {
  // cafe-img-container 要素を取得する
  const cafeContainer = document.querySelector('.cafe-img-container');

  // クラス show をつける
  cafeContainer.classList.add('show');
});
