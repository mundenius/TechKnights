// Funciones para insertar los archivos navbar y footer
$(document).ready(function () {
	$('#navbar').load('fijos/navbar.html');
});

$(document).ready(function () {
	$('#footerfile').load('/footer.html');
});


// Obtener los elementos de "Portafolio" y "Contacto"
const portafolioItem = document.querySelector('.nav-item.portafolio');
const contactoItem = document.querySelector('.nav-item.contacto');

// Obtener el elemento del menú de "Servicios" y el dropdown
const serviciosItem = document.querySelector('.nav-item.servicios');
const serviciosDropdown = serviciosItem.querySelector('.dropdown-menu');

// Agregar un evento al menú de "Servicios" para detectar su estado
serviciosItem.addEventListener('click', function() {
  // Verificar si el dropdown de "Servicios" está activo
  const isActive = serviciosDropdown.classList.contains('show');

  // Agregar o eliminar una clase a "Portafolio" y "Contacto" según el estado del dropdown
  if (isActive) {
    portafolioItem.classList.add('shift-down-p');
    contactoItem.classList.add('shift-down-c');
  } else {
    portafolioItem.classList.remove('shift-down-p');
    contactoItem.classList.remove('shift-down-c');
  }
});