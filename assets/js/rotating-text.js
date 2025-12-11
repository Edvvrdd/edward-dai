// assets/js/rotating-text.js
// Improved rotating-text controller with accessibility and reduced-motion support.

document.addEventListener('DOMContentLoaded', () => {
  const words = Array.from(document.querySelectorAll('.rotating-text'));
  const wrapper = document.querySelector('.rotating-text-wrapper');
  const intervalTime = 3000; // milliseconds per item

  if (!wrapper) return;

  // Accessibility: announce changes politely
  wrapper.setAttribute('role', 'status');
  wrapper.setAttribute('aria-live', 'polite');

  // If no or only one item, show the first and do nothing else
  if (words.length < 2) {
    words.forEach((el, i) => el.classList.toggle('active', i === 0));
    return;
  }

  // Respect user reduced motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    words.forEach((el, i) => el.classList.toggle('active', i === 0));
    return;
  }

  // Start with any element that already has .active, otherwise index 0
  let currentIndex = words.findIndex(w => w.classList.contains('active'));
  if (currentIndex === -1) currentIndex = 0;
  words.forEach((el, i) => el.classList.toggle('active', i === currentIndex));

  let intervalId = setInterval(next, intervalTime);

  function show(index) {
    words[currentIndex].classList.remove('active');
    words[index].classList.add('active');
    currentIndex = index;
  }

  function next() {
    const nextIndex = (currentIndex + 1) % words.length;
    show(nextIndex);
  }

  function pause() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function resume() {
    if (!intervalId) intervalId = setInterval(next, intervalTime);
  }

  // Pause rotation when user is interacting with the element (mouse hover or keyboard focus)
  wrapper.addEventListener('mouseenter', pause);
  wrapper.addEventListener('mouseleave', resume);
  wrapper.addEventListener('focusin', pause);
  wrapper.addEventListener('focusout', resume);

  // Pause while page is hidden to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pause();
    else resume();
  });

  // Cleanup on unload
  window.addEventListener('beforeunload', () => {
    pause();
  });
});
