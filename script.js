const hamburger = document.querySelector('.menu');
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

hamburger.addEventListener('click', displaymenu);

const projects = [
  {
    name: 'Tonic',
    description: 'Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: 'images/SnapshootPortfolio.png',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: 'images/SnapshootPortfolio2.png',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: 'images/SnapshootPortfolio3.png',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: 'images/SnapshootPortfolio4.png',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
];

const cardsContainer = document.querySelector('.works');
for (let i = 0; i < projects.length; i += 1) {
  const card = document.createElement('div');
  card.className = `card card${i}`;

  const snapshootPortfolio = document.createElement('div');
  snapshootPortfolio.className = `snapshot-portfolio${i}`;

  const block = document.createElement('div');
  block.className = `block${i}`;

  const projectTitle = document.createElement('div');
  projectTitle.className = 'project-title';

  const miniTitle = document.createElement('h2');
  miniTitle.className = 'mini-title';
  miniTitle.innerText = projects[i].name;

  const frame = document.createElement('div');
  frame.className = 'frame';

  const canopy = document.createElement('h5');
  canopy.className = 'canopy';
  canopy.innerText = 'CANOPY';

  const counter = document.createElement('img');
  counter.src = 'images/Counter.png';
  counter.className = 'counter';

  const backEndDev = document.createElement('h5');
  backEndDev.className = 'back-end-dev';
  backEndDev.innerText = 'Back End Dev';

  const counter2 = document.createElement('img');
  counter2.src = 'images/Counter.png';
  counter2.className = 'counter';

  const year = document.createElement('h5');
  year.className = 'year';
  year.innerText = '2015';

  const description = document.createElement('p');
  description.className = 'description';
  description.innerText = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';

  const lenguajes = document.createElement('ul');
  lenguajes.className = 'lenguajes';

  const tag = document.createElement('li');
  tag.className = 'tag';

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const technologiesItem = document.createElement('div');
    technologiesItem.innerText = projects[i].technologies[j];
    technologiesItem.className = `mini-container${j}`;
    tag.appendChild(technologiesItem);
  }

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'project-button-container';

  const button = document.createElement('button');
  button.innerText = 'See Project';
  button.className = 'action-button';

  cardsContainer.appendChild(card);
  card.appendChild(snapshootPortfolio);
  card.appendChild(block);
  block.appendChild(projectTitle);
  projectTitle.appendChild(miniTitle);
  projectTitle.appendChild(frame);
  frame.appendChild(canopy);
  frame.appendChild(counter);
  frame.appendChild(backEndDev);
  frame.appendChild(counter2);
  frame.appendChild(year);
  block.appendChild(description);
  block.appendChild(lenguajes);
  lenguajes.appendChild(tag);
  block.appendChild(buttonContainer);
  buttonContainer.appendChild(button);
}
