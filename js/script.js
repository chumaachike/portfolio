const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const branding = document.querySelector('.nav-branding');
const xxx = document.querySelector('.opa');
const workSection = document.getElementById('portfolio');
const modal = document.createElement('div');
const modalHeader = document.createElement('div');
const modalBody = document.createElement('div');
const modalTitle = document.createElement('h2');
const closeBtn = document.createElement('button');
const overlay = document.createElement('div');
const modalDes = document.createElement('p');
const ulModal = document.createElement('ul');
const sourceBtn = document.createElement('button');
const imgTag = document.createElement('img');
const liveBtn = document.createElement('button');
const modalFooter = document.createElement('div');
const liveLink = document.createElement('a');
const sourceLink = document.createElement('a');
const meduimLink = document.createElement('a');
const projects = [
  {
    cardName: 'card-1',
    name: 'Space Travelers Hub',
    description:
      'This is a booking application that allows people to reserve rockets and book missions to space. The application fetches data from an API then displays it to the user. For futher information read through the ReadMe on the source link',
    technologies: ['JavaScript', 'React', 'Redux'],
    featuredImage: '../images/ImgPlaceholder.png',
    liveVersion: 'https://effervescent-choux-235521.netlify.app/',
    sourceVersion: 'https://github.com/chumaachike/reactproject.git',
  },
  {
    cardName: 'card-2',
    name: 'Financial Times Data',
    description:
      'Financial data app that analyses the portfolio of all the companies in the NASDAQ and DOW Jones exchange. The application fetches data from an API then displays it to the user. For futher information read through the ReadMe on the source link',
    technologies: ['JavaScript', 'React', 'Redux'],
    featuredImage: '../images/ImgPlaceholder.png',
    liveVersion: 'https://regal-peony-e39c9e.netlify.app/',
    sourceVersion: 'https://github.com/chumaachike/reactproject.git',
  },
  {
    cardName: 'card-3',
    name: 'Calculator App',
    description:
      'It features all the basic functions you would expect, such as addition, subtraction, multiplication, and division, as well as more advanced functions like trigonometric and logarithmic calculations. The user interface is intuitive and easy to use, with clear buttons and display.',
    technologies: ['html', 'CSS', 'React', 'JavaScript'],
    featuredImage: '../images/ImgPlaceholder.png',
    liveVersion: 'https://tourmaline-praline-a8b15b.netlify.app/',
    sourceVersion: 'https://github.com/chumaachike/math-magicians.git',
  },
  {
    cardName: 'card-4',
    name: 'To do List application',
    description:
      'A simple to do list web application. This application manages the activities a person is meant to perform!',
    technologies: ['html', 'CSS', 'JavaScript'],
    featuredImage: '../images/ImgPlaceholder.png',
    liveVersion: '',
    sourceVersion: 'https://github.com/chumaachike/portfolio/',
  },
  {
    cardName: 'card-7',
    name: 'Multi-Post Stories',
    description:
      'In my blog, I document my journey as a full stack developer. I talk about the challenges I have faced and the lessons I have learned along the way. I also share tips and resources that have helped me improve my skills and become a better developer. Through my blog, I hope to inspire others who are also interested in pursuing a career in full stack development. I believe that by sharing my experiences, I can help others navigate their own path towards a fulfilling and successful career in tech.',
    technologies: ['css', 'html', 'bootstrap', 'Ruby', 'JavaScript', 'React'],
    featuredImage: '../images/ImgPlaceholder.png',
    liveVersion: 'https://chumaachike.github.io/portfolio/',
    sourceVersion: 'https://github.com/chumaachike/portfolio/',
  },
];
modal.classList.add('modal');
modalHeader.classList.add('modal-header');
modalBody.classList.add('modal-body');
modalTitle.classList.add('modal-title');
closeBtn.classList.add('modal-button');
overlay.classList.add('overlay');
modalDes.classList.add('modal-des');
ulModal.classList.add('flex');
modalFooter.classList.add('flex');
modalFooter.classList.add('modal-footer');
document.body.appendChild(modal);
modal.appendChild(modalHeader);
modal.appendChild(ulModal);
modal.appendChild(modalBody);
modalHeader.appendChild(modalTitle);
modalHeader.appendChild(closeBtn);
modalBody.appendChild(imgTag);
modalBody.appendChild(modalDes);
document.body.appendChild(overlay);
modal.appendChild(modalFooter);
modalFooter.appendChild(sourceLink);
modalFooter.appendChild(liveLink);
sourceLink.appendChild(sourceBtn);
liveLink.appendChild(liveBtn);
const headingWorks = document.createElement('div');
const titleworkss = document.createElement('h2');
const boderworks = document.createElement('div');
const horizontalLine = document.createElement('hr');
const main = document.createElement('div');
const mainimage = document.createElement('div');
const pit = document.createElement('div');
const htitle = document.createElement('h3');
const desc = document.createElement('p');
const ulhead = document.createElement('ul');
const btnhead = document.createElement('button');
const sourceImg = document.createElement('img');
const liveImg = document.createElement('img');
btnhead.type = 'submit';
workSection.appendChild(headingWorks);
headingWorks.appendChild(titleworkss);
headingWorks.appendChild(boderworks);
boderworks.appendChild(horizontalLine);
workSection.appendChild(main);
main.appendChild(mainimage);
main.appendChild(pit);
pit.appendChild(htitle);
pit.appendChild(desc);
pit.appendChild(ulhead);
pit.appendChild(meduimLink);
meduimLink.appendChild(btnhead);
liveBtn.appendChild(liveImg);
sourceBtn.appendChild(sourceImg);
headingWorks.classList.add('heading-works');
boderworks.classList.add('border-works');
main.classList.add('main');
mainimage.classList.add('main-image');
pit.classList.add('pit');
ulhead.classList.add('flex');
btnhead.classList.add('btn-works');
btnhead.classList.add(`${6}`);
titleworkss.innerHTML = 'My Recent works';
htitle.innerHTML = projects[4].name;
desc.innerHTML = projects[4].description;
meduimLink.setAttribute('href', 'https://medium.com/@edwardachike');
meduimLink.setAttribute('target', '_blank');
for (let i = 0; i < projects[4].technologies.length; i += 1) {
  const listItem = document.createElement('li');
  listItem.innerHTML = projects[4].technologies[i];
  ulhead.appendChild(listItem);
}
btnhead.innerHTML = 'View blog';
for (let projectNumber = 0; projectNumber < projects.length - 1; projectNumber += 1) {
  const itemDiv = document.createElement('div');
  const itemTitle = document.createElement('h3');
  const itemDescription = document.createElement('p');
  const itemUl = document.createElement('ul');
  const itemBtn = document.createElement('button');
  itemBtn.type = 'submit';
  itemDiv.classList.add('item');
  itemUl.classList.add('flex');
  itemBtn.classList.add('btn-works');
  itemBtn.classList.add(`${projectNumber}`);
  workSection.appendChild(itemDiv);
  itemDiv.appendChild(itemTitle);
  itemDiv.appendChild(itemDescription);
  itemDiv.appendChild(itemUl);
  itemDiv.appendChild(itemBtn);
  for (let i = 0; i < projects[projectNumber].technologies.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.innerHTML = projects[projectNumber].technologies[i];
    itemUl.appendChild(listItem);
  }
  itemTitle.innerHTML = projects[projectNumber].name;
  itemDescription.innerHTML = projects[projectNumber].description;
  itemBtn.innerHTML = 'See Project';
}
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  branding.classList.toggle('opacity');
  xxx.classList.toggle('opacity');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  branding.classList.remove('opacity');
  xxx.classList.remove('opacity');
}));
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}
document.querySelectorAll('.btn-works').forEach((n) => n.addEventListener('click', () => {
  const classes = n.className.split(' ');
  const juj = Number(classes[1]);
  modalTitle.innerHTML = projects[juj].name;
  modalDes.innerHTML = projects[juj].description;
  imgTag.src = projects[juj].featuredImage;
  ulModal.innerHTML = '';
  closeBtn.innerHTML = '&times;';
  liveLink.setAttribute('href', projects[juj].liveVersion);
  liveLink.setAttribute('target', '_blank');
  sourceLink.setAttribute('href', projects[juj].sourceVersion);
  sourceLink.setAttribute('target', '_blank');
  sourceBtn.innerHTML = 'See Source';
  liveBtn.innerHTML = 'See Live';
  projects[juj].technologies.forEach((tech) => {
    const modalLi = document.createElement('li');
    modalLi.innerHTML = tech;
    ulModal.appendChild(modalLi);
  });
  openModal(modal);
}));
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
closeBtn.addEventListener('click', () => {
  const modal = closeBtn.closest('.modal');
  closeModal(modal);
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
  const email = document.getElementById('contact-me-email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const emailError = document.getElementById('email-error');
    emailError.classList.add('active');
  }
});