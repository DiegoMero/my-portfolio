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
    desktopImage: 'images/super-mario-run-desktop.png',
    mobileImage: 'images/super-mario-run-definitive.png',
    liveLink: 'https://diegomero.github.io/Super-Mario-Run/',
    sourceLink: 'https://github.com/DiegoMero/Super-Mario-Run',
  },
  {
    name: 'Bookstore',
    description: 'A bookstore page where you can display books, add books, and remove books from your list.',
    languajes: ['HTML', 'CSS', 'React'],
    desktopImage: 'images/bookstore-desktop.png',
    mobileImage: 'images/bookstore-definitive.png',
    liveLink: 'https://astonishing-youtiao-974e95.netlify.app/',
    sourceLink: 'https://github.com/DiegoMero/bookstore',
  },
  {
    name: 'Math Magicians',
    description: 'An online calculator and a random math-quote generator, have fun with numbers!',
    languajes: ['HTML', 'CSS', 'React'],
    desktopImage: 'images/math-magicians-desktop.png',
    mobileImage: 'images/math-magicians.png',
    liveLink: 'https://jocular-praline-ec302e.netlify.app/',
    sourceLink: 'https://github.com/DiegoMero/magic-maths',
  },
  {
    name: 'Take My Money App',
    description: 'This app allows you to register and log in to manage your finances, you can invest your money in the different categories available.',
    languajes: ['HTML', 'CSS', 'Ruby on Rails'],
    desktopImage: 'images/take-my-money-desktop.png',
    mobileImage: 'images/take-my-money-definitive.png',
    liveLink: 'https://take-my-money-app.onrender.com/',
    sourceLink: 'https://github.com/DiegoMero/take-my-money-app',
  },
];

function displayProjectCard(name, description, languajes, image, live, source) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  body.appendChild(overlay);

  const projectCard = document.createElement('div');
  projectCard.className = 'popup-card';
  body.appendChild(projectCard);

  const projectHeader = document.createElement('div');
  projectHeader.className = 'project-header';
  projectCard.appendChild(projectHeader);

  const projectTitle = document.createElement('h2');
  projectTitle.textContent = name;
  projectHeader.appendChild(projectTitle);

  const iconX = document.createElement('img');
  iconX.src = './images/IconXgrey.png';
  iconX.className = 'exit';
  iconX.addEventListener('click', () => {
    body.removeChild(projectCard);
    body.removeChild(overlay);
    document.body.style.overflow = 'auto';
  });
  projectHeader.appendChild(iconX);

  const projectPic = document.createElement('img');
  projectPic.src = image;
  projectPic.className = 'project-card-pic-mobile';
  projectCard.appendChild(projectPic);

  const informationContainer = document.createElement('div');
  informationContainer.className = 'information-container';
  projectCard.appendChild(informationContainer);

  const projectDescription = document.createElement('h3');
  projectDescription.textContent = description;
  informationContainer.appendChild(projectDescription);

  const subInformationContainer = document.createElement('div');
  informationContainer.appendChild(subInformationContainer);

  const projectTools = document.createElement('ul');
  subInformationContainer.appendChild(projectTools);

  languajes.forEach((languaje) => {
    const projectTool = document.createElement('li');
    projectTools.appendChild(projectTool);
    projectTool.textContent = languaje;
  });

  const span = document.createElement('span');
  subInformationContainer.appendChild(span);

  const buttons = document.createElement('div');
  subInformationContainer.appendChild(buttons);
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

const button2 = document.getElementById('project-button2');
button2.addEventListener('click', () => {
  displayProjectCard(
    projects[1].name,
    projects[1].description,
    projects[1].languajes,
    projects[1].mobileImage,
    projects[1].liveLink,
    projects[1].sourceLink,
  );
});

const button3 = document.getElementById('project-button3');
button3.addEventListener('click', () => {
  displayProjectCard(
    projects[2].name,
    projects[2].description,
    projects[2].languajes,
    projects[2].mobileImage,
    projects[2].liveLink,
    projects[2].sourceLink,
  );
});

const button4 = document.getElementById('project-button4');
button4.addEventListener('click', () => {
  displayProjectCard(
    projects[3].name,
    projects[3].description,
    projects[3].languajes,
    projects[3].mobileImage,
    projects[3].liveLink,
    projects[3].sourceLink,
  );
});

const getResumeButton = document.getElementById('getResume');

getResumeButton.addEventListener('click', () => {
  window.location.href = 'https://docs.google.com/document/d/1BvqIKZXPrOPUfjuR9XWjTnrqB0PtwPpHi6hpA4rtlIQ/edit?usp=sharing';
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
