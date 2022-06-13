const hamburger = document.querySelector('.menu');
hamburger.addEventListener('click', displaymenu);
const body = document.querySelector('body');

function displaymenu() {
  const menu = document.createElement('div');
  menu.className = 'menu-attributes';
  const iconX = document.createElement('img');

  iconX.src = './images/Iconx.png';
  iconX.className = 'xicon';
  iconX.addEventListener('click', () => { body.removeChild(menu); });

  const portfolio = document.createElement('a');
  portfolio.href = '#works-section';
  portfolio.textContent = 'Portfolio';
  portfolio.className = 'menu-text-style';
  portfolio.addEventListener('click', () => { body.removeChild(menu); }); 

  const aboutme = document.createElement('a');
  aboutme.href = '#about-me-section';
  aboutme.textContent = 'About';
  aboutme.className = 'menu-text-style';
  aboutme.addEventListener('click', () => { body.removeChild(menu); });

  const contact = document.createElement('a');
  contact.href = '#contact-me-section';
  contact.textContent = 'Contact';
  contact.className = 'menu-text-style';
  contact.addEventListener('click', () => { body.removeChild(menu); });

  menu.appendChild(iconX);
  menu.appendChild(portfolio);
  menu.appendChild(aboutme);
  menu.appendChild(contact);
  body.appendChild(menu);
}
