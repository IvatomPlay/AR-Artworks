const burgerBtn = document.getElementById('burgerBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

burgerBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})