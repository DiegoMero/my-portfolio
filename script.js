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

const button1 = document.querySelector('.action1');
const button2 = document.querySelector('.action2');
const button3 = document.querySelector('.action3');
const button4 = document.querySelector('.action4');

const project = [
  {
    name: document.querySelector('.card1 .mini-title'),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './images/SnapshootPortfolio.png',
    technologies: document.querySelector('.card1 .frame'),
    linkLive: 'https://www.google.com',
    linkSoruce: 'https://www.github.com',
  },
  {
    name: document.querySelector('.card2 .mini-title'),
    description: '',
    image: './images/SnapshootPortfolio2.png',
    technologies: '',
    linkLive: '',
    linkSoruce: '',
  },
  {
    name: document.querySelector('.card3 .mini-title'),
    description: '',
    image: './images/SnapshootPortfolio3.png',
    technologies: '',
    linkLive: '',
    linkSoruce: '',
  },
  {
    name: document.querySelector('.card4 .mini-title'),
    description: '',
    image: './images/SnapshootPortfolio4.png',
    technologies: '',
    linkLive: '',
    linkSoruce: '',
  },
];

function displaymodal(event) {
  // console.log(event.srcElement.className);
  let element = 0;
  if (event.srcElement.className === 'action-button action1') {
    element = 0;
  }
  if (event.srcElement.className === 'action-button action2') {
    element = 1;
  }
  if (event.srcElement.className === 'action-button action3') {
    element = 2;
  }
  if (event.srcElement.className === 'action-button action4') {
    element = 3;
  }
  const modal = document.createElement('div');
  modal.className = 'modal';
  body.appendChild(modal);
  modal.appendChild(project[element].name);
  modal.appendChild(project[element].technologies);

  const paragraph = document.createElement('p');
  paragraph.innerText = project[element].description;
  modal.appendChild(paragraph);

  const modalimg = document.createElement('img');
  modalimg.src = project[element].image;
  modal.appendChild(modalimg);

  const buttonContainer = document.createElement('div');
  modal.appendChild(buttonContainer);

  const liveButton1 = document.createElement('a');
  liveButton1.className = 'action-button';
  buttonContainer.appendChild(liveButton1);
  liveButton1.href = project[element].linkLive;
  liveButton1.innerText = 'See Live';

  const seeLiveImg = document.createElement('img');
  seeLiveImg.src = './images/seelivebutton.png';
  liveButton1.appendChild(seeLiveImg);

  const seeSourceButton1 = document.createElement('a');
  seeSourceButton1.className = 'action-button';
  buttonContainer.appendChild(seeSourceButton1);
  seeSourceButton1.href = project[element].linkSoruce;
  seeSourceButton1.innerText = 'See Source';

  const githubIcon = document.createElement('img');
  githubIcon.src = './images/Github.png';
  seeSourceButton1.appendChild(githubIcon);
}

button1.addEventListener('click', displaymodal);
button2.addEventListener('click', displaymodal);
button3.addEventListener('click', displaymodal);
button4.addEventListener('click', displaymodal);