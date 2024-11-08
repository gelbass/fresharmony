// const btn = document.getElementById("sendEmail");

// document.getElementById("formContact").addEventListener("submit", function(event) {
//   event.preventDefault();

//   const serviceID = "service_0k4vjla"; //Remplazar 
//   const templateID = "template_5sj22co"; //Remplazar 

//   emailjs.sendForm(serviceID, templateID, this).then(
//     () => {
//       Swal.fire(
//         'Message sent succesfully',
//         'Our team will contact you shortly',
//         'success'
//       )
//     },
//     err => {
//       Swal.fire(
//         'Message not sent',
//         'Try again later.',
//         'error'
//       )
//     }
//   );
//   document.getElementById("name").value ="";
//   document.getElementById("lastName").value ="";
//   document.getElementById("email").value ="";
//  // document.getElementById("asunto").value ="";
//   document.getElementById("message").value ="";
// });

// Seleccionamos el navbar y la sección "ourMision"
window.onload = function() {
  const navbar = document.getElementById('menu');
  const ourMision = document.getElementById('ourMision');
  const navbarHeight = navbar.offsetHeight;
  const ourMisionOffsetTop = ourMision.offsetTop;
  
  function checkPosition() {
      if (window.scrollY + navbarHeight >= ourMisionOffsetTop) {
          navbar.classList.add('hidden');
      } else {
          navbar.classList.remove('hidden');
      }
  }
  window.addEventListener('scroll', checkPosition);
};



//Carrusel
// Variables para manejar el carrusel
const wrapper = document.querySelector('.carousel-wrapper');
const cards = document.querySelectorAll('.card--services');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0; // Índice inicial de la tarjeta visible

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 60;  // 60px para los márgenes (30px por cada lado)
    wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Función para avanzar una tarjeta a la vez
function nextCard() {
    if (currentIndex < cards.length - 3) {  // Asegura que no se pase de la última tarjeta
        currentIndex++;
        updateCarousel();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

// Eventos para botones de avance y retroceso
nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// Función para detectar clicks en las tarjetas
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Inicialización
updateCarousel();
