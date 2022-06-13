let hamburger = document.querySelector('.menu');

hamburger.addEventListener('click', displaymenu);

let body = document.querySelector('body');



function displaymenu(){

  let menu = document.createElement('div');
  menu.className = 'menu-attributes';

  let iconX = document.createElement('img');
  iconX.src='./images/Iconx.png';
  iconX.addEventListener('click', ()=>{body.removeChild(menu)});

  let portfolio = document.createElement('a');
  portfolio.href= '#works-section';
  portfolio.textContent = "Portfolio";
  portfolio.addEventListener('click', ()=>{body.removeChild(menu)});

  let aboutme = document.createElement('a');
  aboutme.href= '#about-me-section';
  aboutme.textContent = "About";
  aboutme.addEventListener('click', ()=>{body.removeChild(menu)});

  let contact = document.createElement('a');
  contact.href= '#contact-me-section';
  contact.textContent = "Contact";
  contact.addEventListener('click', ()=>{body.removeChild(menu)});
  
  menu.appendChild(iconX);
  menu.appendChild(portfolio);
  menu.appendChild(aboutme);
  menu.appendChild(contact);

  body.appendChild(menu);
}

console.log(hamburger)