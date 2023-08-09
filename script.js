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

const projects = [
  {
    name: 'Super Mario Run',
    description: 'This web page represents a run in the Mario Bros universe.',
    languajes: ['HTML', 'CSS', 'JavaScript'],
    desktopImage: 'images/super-mario-run.png',
    mobileImage: 'images/super-mario-run-mobile.png',
    liveLink: 'https://diegomero.github.io/Super-Mario-Run/',
    sourceLink: 'https://github.com/DiegoMero/Super-Mario-Run',
  },
  {
    name: 'blablabla',
    description: 'bleblebleble',
    languajes: ['React', 'Ruby'],
    desktopImage: 'images/super-mario-run.png',
    mobileImage: 'images/super-mario-run-mobile.png',
    liveLink: 'https://diegomero.github.io/Super-Mario-Run/',
    sourceLink: 'https://github.com/DiegoMero/Super-Mario-Run',
  },
];

function displayProjectCard(name, description, languajes, image, live, source) {
  const projectCard = document.createElement('div');
  projectCard.className = 'popup-card';
  body.appendChild(projectCard);

  const projectHeader = document.createElement('div');
  projectCard.appendChild(projectHeader);

  const projectTitle = document.createElement('h2');
  projectTitle.textContent = name;
  projectHeader.appendChild(projectTitle);

  const iconX = document.createElement('img');
  iconX.src = './images/IconXgrey.png';
  iconX.addEventListener('click', () => {
    body.removeChild(projectCard);
    document.body.style.overflow = 'auto';
  });
  projectHeader.appendChild(iconX);

  const projectPic = document.createElement('img');
  projectPic.src = image;
  projectPic.className = 'project-card-pic-mobile';
  projectCard.appendChild(projectPic);

  const projectDescription = document.createElement('h3');
  projectDescription.textContent = description;
  projectCard.appendChild(projectDescription);

  const projectTools = document.createElement('ul');
  projectCard.appendChild(projectTools);

  languajes.forEach((languaje) => {
    const projectTool = document.createElement('li');
    projectTools.appendChild(projectTool);
    projectTool.textContent = languaje;
  });

  const span = document.createElement('span');
  projectCard.appendChild(span);

  const buttons = document.createElement('div');
  projectCard.appendChild(buttons);
  buttons.className = 'buttons-container';

  const seeProjectButton = document.createElement('button');
  seeProjectButton.addEventListener('click', () => {
    window.location.href = live;
  });
  buttons.appendChild(seeProjectButton);

  const seeProjectText = document.createElement('h4');
  seeProjectText.textContent = 'See live';
  seeProjectButton.appendChild(seeProjectText);

  const seeProjectIcon = document.createElement('i');
  seeProjectIcon.className = 'fa-solid fa-paper-plane';
  seeProjectButton.appendChild(seeProjectIcon);

  const seeSourceButton = document.createElement('button');
  seeSourceButton.addEventListener('click', () => {
    window.location.href = source;
  });
  buttons.appendChild(seeSourceButton);

  const seeSourceText = document.createElement('h4');
  seeSourceText.textContent = 'See source';
  seeSourceButton.appendChild(seeSourceText);

  const seeSourceIcon = document.createElement('i');
  seeSourceIcon.className = 'fa-brands fa-github';
  seeSourceButton.appendChild(seeSourceIcon);

  document.body.style.overflow = 'hidden';
}

const button1 = document.getElementById('project-button1');
button1.addEventListener('click', () => {
  displayProjectCard(
    projects[0].name,
    projects[0].description,
    projects[0].languajes,
    projects[0].mobileImage,
    projects[0].liveLink,
    projects[0].sourceLink,
  );
});

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
