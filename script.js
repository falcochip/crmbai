// Simple carousel logic
document.addEventListener('DOMContentLoaded', () => {
  const arrows = document.querySelectorAll('.carousel .arrow');
  let currentSlide = 0;

  const slides = [
    { title: 'Slide Title 1', details: 'Slide details for slide 1...' },
    { title: 'Slide Title 2', details: 'Slide details for slide 2...' },
    { title: 'Slide Title 3', details: 'Slide details for slide 3...' }
  ];

  const titleEl = document.querySelector('.carousel .content h3');
  const detailEl = document.querySelector('.carousel .content p');

  function showSlide(index) {
    const slide = slides[index];
    titleEl.textContent = slide.title;
    detailEl.textContent = slide.details;
  }

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.textContent.trim() === '←') {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      } else {
        currentSlide = (currentSlide + 1) % slides.length;
      }
      showSlide(currentSlide);
    });
  });

  // initialize
  showSlide(currentSlide);
});
