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

function displayProjectCard() {
  const projectCard = document.createElement('div');
  projectCard.className = 'popup-card';
  body.appendChild(projectCard);

  const projectHeader = document.createElement('div');
  projectCard.appendChild(projectHeader);

  const projectTitle = document.createElement('h2');
  projectTitle.textContent = 'Super Mario Run';
  projectHeader.appendChild(projectTitle);

  const iconX = document.createElement('img');
  iconX.src = './images/IconXgrey.png';
  iconX.addEventListener('click', () => {
    body.removeChild(projectCard);
    document.body.style.overflow = 'auto';
  });
  projectHeader.appendChild(iconX);

  const projectPic = document.createElement('img');
  projectPic.src = 'images/super-mario-run-mobile.png';
  projectPic.className = 'project-card-pic-mobile';
  projectCard.appendChild(projectPic);

  const projectDescription = document.createElement('h3');
  projectDescription.textContent = 'This web page represents a run in the Mario Bros universe.';
  projectCard.appendChild(projectDescription);

  const projectTools = document.createElement('ul');
  projectCard.appendChild(projectTools);

  const projectTool1 = document.createElement('li');
  projectTools.appendChild(projectTool1);
  projectTool1.textContent = 'HTML';

  const projectTool2 = document.createElement('li');
  projectTools.appendChild(projectTool2);
  projectTool2.textContent = 'CSS';

  const projectTool3 = document.createElement('li');
  projectTools.appendChild(projectTool3);
  projectTool3.textContent = 'JavaScript';

  const span = document.createElement('span');
  projectCard.appendChild(span);

  const buttons = document.createElement('div');
  projectCard.appendChild(buttons);
  buttons.className = 'buttons-container';

  const seeProjectButton = document.createElement('button');
  buttons.appendChild(seeProjectButton);

  const seeProjectText = document.createElement('h4');
  seeProjectText.textContent = 'See live';
  seeProjectButton.appendChild(seeProjectText);

  const seeProjectIcon = document.createElement('i');
  seeProjectIcon.className = 'fa-solid fa-paper-plane';
  seeProjectButton.appendChild(seeProjectIcon);

  const seeSourceButton = document.createElement('button');
  buttons.appendChild(seeSourceButton);

  const seeSourceText = document.createElement('h4');
  seeSourceText.textContent = 'See source';
  seeSourceButton.appendChild(seeSourceText);

  const seeSourceIcon = document.createElement('i');
  seeSourceIcon.className = 'fa-brands fa-github';
  seeSourceButton.appendChild(seeSourceIcon);

  document.body.style.overflow = 'hidden';
}

const botones = document.querySelector('.project-button');
botones.addEventListener('click', displayProjectCard);

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
