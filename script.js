const burgerBtn = document.getElementById('burgerBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

burgerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'none';
})