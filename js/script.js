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


// Variables para manejar el carrusel
const wrapper = document.querySelector('.carousel-wrapper');
const cards = document.querySelectorAll('.card--services');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0; // Índice inicial de la tarjeta visible
let autoSlideInterval; // Intervalo de autoavance

// Función para actualizar la posición del carrusel
function updateCarousel() {
    // Verifica si el ancho de la ventana es menor a 768px
    const isMobileView = window.innerWidth < 768;
    const cardWidth = cards[0].offsetWidth + (isMobileView ? 20 : 60); // Margen diferente en móvil y escritorio
    wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Función para avanzar una tarjeta a la vez
function nextCard() {
    const isMobileView = window.innerWidth < 768;
    const visibleCards = isMobileView ? 1 : 3; // Mostrar solo una tarjeta en móvil

    if (currentIndex < cards.length - visibleCards) {  // Asegura que no se pase de la última tarjeta visible
        currentIndex++;
    } else {
        currentIndex = 0;  // Vuelve al inicio (ciclo infinito)
    }
    updateCarousel();
}

// Función para retroceder una tarjeta a la vez
function prevCard() {
    const isMobileView = window.innerWidth < 768;
    const visibleCards = isMobileView ? 1 : 3; // Mostrar solo una tarjeta en móvil

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - visibleCards;  // Vuelve al final si está en el inicio
    }
    updateCarousel();
}

// Función para autoavance del carrusel
function startAutoSlide() {
    autoSlideInterval = setInterval(nextCard, 6000); // Avanza cada 6 segundos
}

// Función para detener el autoavance
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Eventos para botones de avance y retroceso
nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// Iniciar autoavance cuando la página carga
startAutoSlide();

// Detener autoavance al hacer hover en el carrusel y reiniciar al salir
wrapper.addEventListener('mouseenter', stopAutoSlide);
wrapper.addEventListener('mouseleave', startAutoSlide);

// Función para detectar clics en las tarjetas y actualizar el índice
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Actualizar el carrusel al cambiar el tamaño de la ventana
window.addEventListener('resize', updateCarousel);

// Inicialización
updateCarousel();
