const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    // slide.classList.remove('active', 'animate');
    slide.classList.add('hidden');
    if (idx === i) {
      // slide.classList.add('active');
      slide.classList.remove('hidden');
      setTimeout(() => slide.classList.add('animate'), 50);
    }
  });
}

function animateButton(btn) {
  btn.classList.add('active');
  setTimeout(() => btn.classList.remove('active'), 200);
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index-1 + slides.length) % slides.length;
  showSlide(index);
}

document.addEventListener('keydown', (e) => {
  console.log(e.code);
  if(['ArrowUp', 'PageUp'].includes(e.code)) prevSlide();
  if(['ArrowDown', 'PageDown'].includes(e.code)) nextSlide();
});