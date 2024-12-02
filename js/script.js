

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


  document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type: 'loop',      // Carrusel cíclico
      perPage: 3,        // Mostrar 3 tarjetas por página
      perMove: 1,        // Mover 1 tarjeta por vez
      breakpoints: {     // Configuración responsive
        //1024: { perPage: 3}, // Mostrar 2 tarjetas en pantallas medianas
        1243: { perPage: 2 },  // Mostrar 1 tarjeta en pantallas pequeñas
        748: { perPage: 1 }
      },
      gap: '5px',       // Espacio entre tarjetas
      pagination: false, // Deshabilitar la paginación
      //arrows: true,      // Mostrar flechas de navegación
    });

    splide.mount();
  });

  const cards = document.querySelectorAll('.card--services');

cards.forEach(card => {
  card.addEventListener('touchstart', () => {
    card.style.filter = 'grayscale(0%)';
  });

  card.addEventListener('touchend', () => {
    setTimeout(() => {
      card.style.filter = 'grayscale(100%)';
    }, 200); // Opcional, para un efecto breve después de soltar
  });
});

const btn = document.getElementById("sendEmail");

document.getElementById("formContact").addEventListener("submit", function(event) {
  event.preventDefault();

  const serviceID = "service_rh6fyh3"; //Remplazar 
  const templateID = "template_jqpykq9"; //Remplazar 

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      Swal.fire(
        'Message sent succesfully',
        'Our team will contact you shortly',
        'success'
      )
    },
    err => {
      Swal.fire(
        'Message not sent',
        'Try again later.',
        'error'
      )
    }
  );
  document.getElementById("firstName").value ="";
  document.getElementById("email").value ="";
  document.getElementById("service").value ="";
  document.getElementById("frequency").value ="";
  document.getElementById("address").value ="";
  document.getElementById("comments").value ="";
});