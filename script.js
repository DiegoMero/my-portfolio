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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImg: 'images/SnapshootPortfolio.png',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImg: 'images/SnapshootPortfolio2.png',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImg: 'images/SnapshootPortfolio3.png',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImg: 'images/SnapshootPortfolio4.png',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: '#',
    linkSource: '#',
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

  const backEndDev = document.createElement('h5');
  backEndDev.className = 'back-end-dev';
  backEndDev.innerText = 'Back End Dev';

  const counter2 = document.createElement('img');
  counter2.src = 'images/Counter.png';

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
  button.className = `action-button button${i}`;

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

let buttons = document.querySelectorAll('.card button');
buttons = [...buttons];

function displaymodal(e) {
  const element = e.srcElement.className.slice(-1);
  const popupBackground = document.createElement('div');
  popupBackground.className = 'popup-background';
  body.appendChild(popupBackground);

  const primaryText = document.createElement('div');
  primaryText.className = 'popup-primary-text';
  popupBackground.appendChild(primaryText);

  const popupFrame1 = document.createElement('div');
  popupFrame1.className = 'popupFrame';
  primaryText.appendChild(popupFrame1);

  const title = document.createElement('h3');
  title.className = 'popup-title';
  title.innerText = projects[element].name;
  popupFrame1.appendChild(title);

  const xContainer = document.createElement('div');
  xContainer.className = 'xContainer';
  popupFrame1.appendChild(xContainer);

  const xIcon2 = document.createElement('img');
  xIcon2.className = 'xIcon2';
  xIcon2.addEventListener('click', () => { body.removeChild(popupBackground); });
  xIcon2.src = 'images/greyxicon.png';
  xContainer.appendChild(xIcon2);

  const popupFrame2 = document.createElement('div');
  popupFrame2.className = 'frame';
  primaryText.appendChild(popupFrame2);

  const popupCanopy = document.createElement('div');
  popupCanopy.className = 'canopy';
  popupCanopy.innerText = 'CANOPY';
  popupFrame2.appendChild(popupCanopy);

  const popupCounter = document.createElement('img');
  popupCounter.src = 'images/Counter.png';
  popupFrame2.appendChild(popupCounter);

  const popupBackEndDev = document.createElement('div');
  popupBackEndDev.className = 'back-end-dev';
  popupBackEndDev.innerText = 'Back End Dev';
  popupFrame2.appendChild(popupBackEndDev);

  const popupCounter2 = document.createElement('img');
  popupCounter2.src = 'images/Counter.png';
  popupFrame2.appendChild(popupCounter2);

  const popupYear = document.createElement('div');
  popupYear.className = 'year';
  popupYear.innerText = '2015';
  popupFrame2.appendChild(popupYear);

  const popupSnapshootPortfolio = document.createElement('img');
  popupSnapshootPortfolio.src = projects[element].featuredImg;
  popupSnapshootPortfolio.className = `image-popup${element}`;
  popupBackground.appendChild(popupSnapshootPortfolio);

  const container = document.createElement('div');
  container.className = 'popup-mini-container';
  popupBackground.appendChild(container);

  const popupDescription = document.createElement('p');
  popupDescription.className = 'popup-description';
  popupDescription.innerText = projects[element].description;
  container.appendChild(popupDescription);

  const leftBlock = document.createElement('div');
  leftBlock.className = 'popup-left-block';
  container.appendChild(leftBlock);

  const popupTag = document.createElement('div');
  popupTag.className = 'tag';
  leftBlock.appendChild(popupTag);

  for (let j = 0; j < projects[element].technologies.length; j += 1) {
    const technologiesItem = document.createElement('div');
    technologiesItem.innerText = projects[element].technologies[j];
    technologiesItem.className = `mini-container${j}`;
    popupTag.appendChild(technologiesItem);
  }

  const devider = document.createElement('img');
  devider.src = 'images/Vector4.png';
  leftBlock.appendChild(devider);

  const popupButtons = document.createElement('div');
  popupButtons.className = 'popup-buttons';
  leftBlock.appendChild(popupButtons);

  const popupSeeLiveButton = document.createElement('a');
  popupSeeLiveButton.className = 'action-button';
  popupSeeLiveButton.innerText = 'See live';
  popupSeeLiveButton.href = projects[element].linkLive;
  popupButtons.appendChild(popupSeeLiveButton);

  const seeLiveIcon = document.createElement('img');
  seeLiveIcon.src = 'images/seeLiveIcon.png';
  popupSeeLiveButton.appendChild(seeLiveIcon);

  const popupSeeSourceButton = document.createElement('a');
  popupSeeSourceButton.className = 'action-button';
  popupSeeSourceButton.innerText = 'See source';
  popupSeeSourceButton.href = projects[element].linkSource;
  popupButtons.appendChild(popupSeeSourceButton);

  const githubIcon = document.createElement('img');
  githubIcon.src = 'images/bluegithubicon.png';
  popupSeeSourceButton.appendChild(githubIcon);
}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', displaymodal);
}

function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = document.querySelector('small');
  msg.innerText = message;
  // update the class for the input
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function isUpper(str) {
  return !/^[a-z]*$/.test(str) && /[A-Z]/.test(str);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();

  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

function checkUppercase(input, invalidMsg) {
  const email = input.value.trim();
  if (isUpper(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('form');

const lowerCaseCheck = 'Email needs to be in lower case';
const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form
  hasValue(form.elements["name"], NAME_REQUIRED);
  validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
  checkUppercase(form.elements["email"], lowerCaseCheck);
  // if valid, submit the form.
  /* if (nameValid && emailValid && emailCheck) {
    alert('Demo only. No form was posted.');
  } */
});
