const titulos = document.querySelectorAll('.skill-title');

titulos.forEach((titulo) => {
  const arrow = titulo.querySelector('.arrow');
  titulo.addEventListener('click', function () {
    const lista = this.nextElementSibling;

    if (arrow.classList.contains('rotate')) {
      arrow.classList.remove('rotate');
    } else {
      arrow.classList.add('rotate');
    }

    if (lista.classList.contains('hide')) {
      lista.classList.remove('hide');
    } else {
      lista.classList.add('hide');
    }
  });
});
