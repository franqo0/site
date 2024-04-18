document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;

      // Actualiza la posición del cursor
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });
});

window.addEventListener('scroll', function() {
  var franqo = document.getElementById('franqo');
  var scrollPosition = window.scrollY;

  // Ajusta este valor según el momento en el que quieras que se active el desvanecimiento
  var triggerPosition = 400;

  if (scrollPosition > triggerPosition) {
      franqo.classList.add('hidden');
  } else {
      franqo.classList.remove('hidden');
  }
});

// Función para mostrar u ocultar el menú cuando se desplaza la página
window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  var scrollPosition = window.scrollY;
  var triggerPosition = 300; // Cambia este valor según el momento en el que quieras que aparezca el navbar

  if (scrollPosition > triggerPosition) {
      nav.classList.add('visible');
  } else {
      nav.classList.remove('visible');
  }
});

