window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hamburger-button').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-toggled');
  });
});
