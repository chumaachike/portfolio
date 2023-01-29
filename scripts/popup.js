const works = [
  {
    name: 'To-do List',
    description: 'A to-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. A simple website that allows users to create a To-do list.',
    imageLocation: './images/to_do_list.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    live: 'https://celadon-chebakia-cb2406.netlify.app/',
    source: 'https://github.com/chumaachike/portfolio/',
  },
  {
    name: 'Calculator App',
    description: 'It features all the basic functions you would expect, such as addition, subtraction, multiplication, and division, as well as more advanced functions like trigonometric and logarithmic calculations. The user interface is intuitive and easy to use, with clear buttons and display.',
    imageLocation: './images/calculator.png',
    technologies: ['HTML', 'SCSS', 'JavaScript', 'Webpack'],
    live: 'https://stunning-ganache-ef762a.netlify.app/',
    source: 'https://github.com/Bushido-brown/Tv-shows',
  },
  {
    name: 'Financial Metrics',
    description: 'This is a React project building a mobile web application to check a list of metrics (numeric values) created using React and Redux.',
    imageLocation: './images/financial.jpeg',
    technologies: ['JavaScript', 'React', 'Redux'],
    live: 'https://regal-peony-e39c9e.netlify.app/',
    source: 'https://github.com/chumaachike/reactproject.git',
  },

  {
    name: 'Space Travelers Hub',
    description: 'A JavaScript project for a Leaderboard list app, using webpack and ES6 features, notably modules. This application records scores for a game for different players',
    imageLocation: './images/rockets.png',
    technologies: ['JavaScript', 'React', 'Redux'],
    live: 'https://effervescent-choux-235521.netlify.app/',
    source: 'https://github.com/chumaachike/reactproject.git',
  },
  {
    name: '2020 African Cultural Festival',
    description: 'An online website for a festival in Africa. Designed by the guidelines provided by the Microverse (Cindy Shin Design).',
    imageLocation: './images/Town-hall.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://chumaachike.github.io/CapstoneProject1/',
    source: 'https://github.com/chumaachike/CapstoneProject1',
  },

  {
    name: 'Hotel fur Pets',
    description: 'This is a web application where owners can reserve temporary accomodation for their pets while they are unavailable to tend to the pet.',
    imageLocation: './images/hotel-fur-pets.jpg',
    technologies: ['Javascript', 'React', 'Redux', 'RoR'],
    live: 'https://dogs-appointment-chumaachike.vercel.app/',
    source: 'https://github.com/chumaachike/dogs_appointment.git',
  },
];

const popupCont = document.querySelector('.popup-container');
popupCont.style.display = 'none';

function createElement(type, classes = null, text = null, href = null) {
  const element = document.createElement(type);
  if (classes) element.setAttribute('class', classes);
  if (text) element.textContent = text;
  if (href) element.setAttribute('href', href);
  return element;
}

function languages(lang) {
  const list = createElement('ul', 'cards-lang flex');
  lang.forEach((langKey) => {
    const listAnchor = createElement('a', 'cards-lang-button', langKey, '#');
    const listItem = createElement('li');
    listItem.appendChild(listAnchor);
    list.appendChild(listItem);
  });
  return list;
}

function closePopup() {
  popupCont.style.display = 'none';
  popupCont.removeChild(popupCont.firstChild);
}

function createButton(src, alt, text, href, target) {
  const popBtn = createElement('a', 'access-button', text, href);
  popBtn.target = target;
  const btnIcon = createElement('img', 'pop-icon');
  btnIcon.src = src;
  btnIcon.alt = alt;
  popBtn.appendChild(btnIcon);
  return popBtn;
}

function displayPopup(work) {
  // Create the main container of the Pop-Up
  const popupBody = createElement('div', 'pop-body');

  // Add a close-icon within an anchor for the close button.
  const closeBtn = createElement('a', 'close-btn', null, '#');
  const closeImg = createElement('img', 'close-img-mob');
  closeImg.src = './images/close_pop_desktop.png';
  closeImg.alt = 'Close button';
  closeBtn.appendChild(closeImg);
  closeBtn.addEventListener('click', closePopup);
  popupBody.appendChild(closeBtn);

  // Add the image of the project
  const popImg = createElement('img', 'pop-img');
  popImg.src = work.imageLocation;
  popImg.alt = 'Work image';
  popupBody.appendChild(popImg);

  // Add the title of the project
  popupBody.appendChild(createElement('h3', 'pop-title', work.name));

  // Add technologies used in the project
  const popLang = languages(work.technologies);
  popLang.classList.add('pop-lang');
  popupBody.appendChild(popLang);

  // Add description of the project
  popupBody.appendChild(createElement('p', 'pop-description', work.description));

  // Add link buttons
  const popBtnCont = createElement('div', 'pop-btn-cont');

  // Add first button
  popBtnCont.appendChild(
    createButton(
      './images/see_live.png',
      'See live version icon',
      'See Live',
      work.live,
      '_blank',
    ),
  );

  // Add second button
  popBtnCont.appendChild(
    createButton(
      './images/see_src.png',
      'GitHub icon',
      'See Source',
      work.source,
      '_blank',
    ),
  );

  // Add button section to card body
  popupBody.appendChild(popBtnCont);

  // Add Card to container
  popupCont.appendChild(popupBody);
  popupCont.style.display = 'block';
}

function addCard(work) {
  // Add the image of the project
  const imgCont = createElement('div', 'cards-img-cont');
  const cardImg = createElement('img', 'card-img');
  cardImg.src = work.imageLocation;
  cardImg.alt = work.name;
  imgCont.appendChild(cardImg);

  const cardContent = createElement('div', 'cards flex');
  cardContent.appendChild(createElement('h2', 'cards-title', work.name));
  cardContent.appendChild(languages(work.technologies));

  const anchorBtn = createElement('a', 'access-button', 'See Project', '#');
  anchorBtn.addEventListener('click', () => displayPopup(work));
  cardContent.appendChild(anchorBtn);

  const cardContainer = createElement('div', 'works flex');
  cardContainer.appendChild(imgCont);
  cardContainer.appendChild(cardContent);
  return cardContainer;
}

const mainCardContainer = document.querySelector('.works-container.flex');
works.forEach((work) => {
  mainCardContainer.appendChild(addCard(work));
});