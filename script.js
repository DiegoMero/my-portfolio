let hamburger = document.querySelector('.menu');

hamburger.addEventListener('click', displaymenu)

let body = document.querySelector('body');



function displaymenu(){

  let menu = document.createElement('div');
  menu.className = 'menu-attributes';

  let iconX = document.createElement('img');
  iconX.src='./images/Iconx.png'

  let portfolio = document.createElement('h2');
  portfolio.textContent = "Portfolio";

  let aboutme = document.createElement('h2');
  aboutme.textContent = "Aboutme";

  let contact = document.createElement('h2');
  contact.textContent = "Contact";
  
  menu.appendChild(iconX);
  menu.appendChild(portfolio);
  menu.appendChild(aboutme);
  menu.appendChild(contact);

  body.appendChild(menu);
}


console.log(hamburger)