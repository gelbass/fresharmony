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

/* 

// Variables para manejar el carrusel
const wrapper = document.querySelector('.carousel-wrapper');
const cards = document.querySelectorAll('.card--services');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0; // Índice inicial
let autoSlideInterval; // Intervalo de autoavance

// Función para calcular el ancho de una tarjeta
function getCardWidth() {
    const width = window.innerWidth;
    if (width <= 414) return cards[0].offsetWidth + 15; // Margen pequeño para vistas móviles
    return cards[0].offsetWidth + 60; // Margen estándar para pantallas más grandes
}

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const cardWidth = getCardWidth();
    wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Función para avanzar el carrusel
function nextCard() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volver al inicio
    }
    updateCarousel();
}

// Función para retroceder el carrusel
function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 1; // Volver al final
    }
    updateCarousel();
}

// Función para autoavance
function startAutoSlide() {
    autoSlideInterval = setInterval(nextCard, 6000);
}

// Función para detener el autoavance
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Eventos
nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);
wrapper.addEventListener('mouseenter', stopAutoSlide);
wrapper.addEventListener('mouseleave', startAutoSlide);
window.addEventListener('resize', () => {
    currentIndex = 0; // Reiniciar posición para evitar cortes
    updateCarousel();
});

// Inicialización
updateCarousel();
startAutoSlide();
 */


  document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type: 'loop',      // Carrusel cíclico
      perPage: 3,        // Mostrar 3 tarjetas por página
      perMove: 1,        // Mover 1 tarjeta por vez
      breakpoints: {     // Configuración responsive
        //1024: { perPage: 3}, // Mostrar 2 tarjetas en pantallas medianas
        1243: { perPage: 2 },  // Mostrar 1 tarjeta en pantallas pequeñas
        600: { perPage: 1 }
      },
      gap: '5px',       // Espacio entre tarjetas
      pagination: false, // Deshabilitar la paginación
      //arrows: true,      // Mostrar flechas de navegación
    });

    splide.mount();
  });

