const slides = [
  "01-capa.html",
  "02-problema.html",
  "03-solucao.html",
  "04-funcionalidades.html",
  "05-diferenciais.html",
  "06-objetivo.html",
  "07-encerramento.html"
];

const currentSlide = window.location.pathname.split("/").pop();
const currentIndex = slides.indexOf(currentSlide);

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && currentIndex < slides.length - 1) {
    window.location.href = slides[currentIndex + 1];
  }

  if (e.key === "ArrowLeft" && currentIndex > 0) {
    window.location.href = slides[currentIndex - 1];
  }

  if (e.key === "f") {
    document.documentElement.requestFullscreen();
  }
});

// Touch/Swipe navigation for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  // Swipe left (next slide)
  if (diff > swipeThreshold && currentIndex < slides.length - 1) {
    window.location.href = slides[currentIndex + 1];
  }
  
  // Swipe right (previous slide)
  if (diff < -swipeThreshold && currentIndex > 0) {
    window.location.href = slides[currentIndex - 1];
  }
}
