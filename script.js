const menuButton = document.getElementById('menu');
const body = document.querySelector('body');

function displaymenu() {
  const menu = document.createElement('div');
  menu.className = 'menu-container';

  const menuOptions = document.createElement('div');
  menuOptions.className = 'menu-options';
  menu.appendChild(menuOptions);

  const iconX = document.createElement('img');
  iconX.src = './images/Iconx.png';
  iconX.addEventListener('click', () => {
    body.removeChild(menu);
    document.body.style.overflow = 'auto';
  });

  const portfolio = document.createElement('a');
  portfolio.href = '#works';
  portfolio.textContent = 'Portfolio';
  portfolio.addEventListener('click', () => {
    body.removeChild(menu);
    document.body.style.overflow = 'auto';
  });

  const aboutme = document.createElement('a');
  aboutme.href = '#about';
  aboutme.textContent = 'About';
  aboutme.addEventListener('click', () => {
    body.removeChild(menu);
    document.body.style.overflow = 'auto';
  });

  const contact = document.createElement('a');
  contact.href = '#contact-me';
  contact.textContent = 'Contact';
  contact.addEventListener('click', () => {
    body.removeChild(menu);
    document.body.style.overflow = 'auto';
  });

  menuOptions.appendChild(iconX);
  menuOptions.appendChild(portfolio);
  menuOptions.appendChild(aboutme);
  menuOptions.appendChild(contact);
  body.appendChild(menu);

  document.body.style.overflow = 'hidden';
}

menuButton.addEventListener('click', displaymenu);

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
