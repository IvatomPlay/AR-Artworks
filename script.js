
const burgerBtn = document.getElementById('burgerBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

burgerBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// document.addEventListener("DOMContentLoaded", () => {
//   const carouselContent = document.querySelector(".carousel-content");

//   fetch('./localhost.json')
//   .then(response => response.json())
//   .then(images => {
//     images.forEach(image => {
//       const imageCard = document.createElement("div");
//       imageCard.className = "image-card";
//       imageCard.innerHTML = `
//         <img src="${image.img}" width = 100%>
//       `; 
//       carouselContent.appendChild(imageCard);
//     });
//   })
//   .catch(error => {
//     console.error("Ошибка загрузки данных:", error);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const carouselContent = document.querySelector(".carousel-content");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let images = [];
  let currentIndex = 0;

  fetch('localhost.json')
    .then(response => response.json())
    .then(data => {
      images = data;
      showImage(currentIndex);
    })
    .catch(error => {
      console.error("Ошибка загрузки данных:", error);
    });

  function showImage(index) {
    if (!images.length) return;
    const image = images[index];

    carouselContent.innerHTML = `
      <img src="${image.img}" alt="Картинка ${index + 1}" width = 100%>
    `;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
});