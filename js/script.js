//declaring the variables
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const branding = document.querySelector(".nav-branding");
const xxx = document.querySelector(".opa");
const workSection = document.getElementById("portfolio");

//creating elements
const modal = document.createElement("div");
const modalHeader = document.createElement("div");
const modalBody = document.createElement("div");
const modalTitle = document.createElement("h2");
const closeBtn = document.createElement("button");
const overlay = document.createElement("div");
const modalDes = document.createElement("p");
const ulModal = document.createElement("ul");
const sourceBtn = document.createElement("button");
const imgTag = document.createElement("img");
const liveBtn = document.createElement("button");
const modalFooter = document.createElement("div");

//modal data
const projects = [
  {
    cardName: 'card-1',
    name: "Profesional Art Printing Data",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    technologies: ["html", "bootstrap", "Ruby"],
    featuredImage: "../images/ImgPlaceholder.png",
    liveVersion: "https://chumaachike.github.io/portfolio/",
    sourceVersion: "https://github.com/chumaachike/portfolio/",
  },
  {
    cardName: 'card-2',
    name: "Profesional Art Printing Data",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    technologies: ["html", "bootstrap", "Ruby"],
    featuredImage: "../images/ImgPlaceholder.png",
    liveVersion: "https://chumaachike.github.io/portfolio/",
    sourceVersion: "https://github.com/chumaachike/portfolio/",
  },
  {
    cardName: 'card-3',
    name: "Profesional Art Printing Data",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    technologies: ["html", "bootstrap", "Ruby"],
    featuredImage: "../images/ImgPlaceholder.png",
    liveVersion: "https://chumaachike.github.io/portfolio/",
    sourceVersion: "https://github.com/chumaachike/portfolio/",
  },
  {
    cardName: 'card-4',
    name: "Profesional Art Printing Data",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    technologies: ["html", "bootstrap", "Ruby"],
    featuredImage: "../images/ImgPlaceholder.png",
    liveVersion: "https://chumaachike.github.io/portfolio/",
    sourceVersion: "https://github.com/chumaachike/portfolio/",
  },
  {
    cardName: 'card-5',
    name: "Profesional Art Printing Data",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    technologies: ["html", "bootstrap", "Ruby"],
    featuredImage: "../images/ImgPlaceholder.png",
    liveVersion: "https://chumaachike.github.io/portfolio/",
    sourceVersion: "https://github.com/chumaachike/portfolio/",
  },
  {
    cardName: 'card-6',
    name: "Profesional Art Printing Data",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    technologies: [ "html", "bootstrap", "Ruby"],
    featuredImage: "../images/ImgPlaceholder.png",
    liveVersion: "https://chumaachike.github.io/portfolio/",
    sourceVersion: "https://github.com/chumaachike/portfolio/",
  },
  {
    cardName: 'card-7',
    name: "Multi-Post Stories",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    technologies: ["css","html", "bootstrap", "Ruby"],
    featuredImage: "../images/ImgPlaceholder.png",
    liveVersion: "https://chumaachike.github.io/portfolio/",
    sourceVersion: "https://github.com/chumaachike/portfolio/",
  },
];

//adding classes to modal
modal.classList.add("modal");
modalHeader.classList.add("modal-header");
modalBody.classList.add("modal-body");
modalTitle.classList.add("modal-title");
closeBtn.classList.add("modal-button");
overlay.classList.add("overlay");
modalDes.classList.add("modal-des");
ulModal.classList.add("flex");
modalFooter.classList.add("flex");
modalFooter.classList.add("modal-footer");


//
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
modalFooter.appendChild(sourceBtn);
modalFooter.appendChild(liveBtn);


const headingWorks = document.createElement('div');
const titleworkss = document.createElement('h2');
const boderworks = document.createElement('div');
const horizontalLine = document.createElement('hr');
const main = document.createElement('div');
const mainimage = document.createElement('div');
const pit = document.createElement('div');
const htitle = document.createElement('h3')
const desc = document.createElement('p')
const ulhead = document.createElement('ul')
const btnhead = document.createElement('button')
btnhead.type = 'submit'

workSection.appendChild(headingWorks);
headingWorks.appendChild(titleworkss);
headingWorks.appendChild(boderworks)
boderworks.appendChild(horizontalLine)
workSection.appendChild(main);
main.appendChild(mainimage);
main.appendChild(pit);
pit.appendChild(htitle);
pit.appendChild(desc)
pit.appendChild(ulhead)
pit.appendChild(btnhead)


headingWorks.classList.add('heading-works');
boderworks.classList.add('border-works');
main.classList.add('main')
mainimage.classList.add('main-image')
pit.classList.add('pit')
ulhead.classList.add('flex')
btnhead.classList.add('btn-works');
btnhead.classList.add(`${6}`);


titleworkss.innerHTML = 'My Recent works';
htitle.innerHTML = projects[6].name;
desc.innerHTML = projects[6].description;

for (let i = 0; i < projects[6].technologies.length; i += 1) {
  const listItem = document.createElement('li');
  listItem.innerHTML = projects[6].technologies[i];
  ulhead.appendChild(listItem);
}

btnhead.innerHTML = 'Submit'




for (let projectNumber = 0; projectNumber < (projects.length-1); projectNumber += 1) {
  // Creating new HTML elements
  const itemDiv = document.createElement('div')
  const itemTitle = document.createElement('h3');
  const itemDescription = document.createElement('p');
  const itemUl = document.createElement('ul');
  const itemBtn = document.createElement('button');
  itemBtn.type = 'submit';

  // Giving classes to elements
  itemDiv.classList.add('item');
  itemUl.classList.add('flex');
  itemBtn.classList.add('btn-works');
  itemBtn.classList.add(`${projectNumber}`)
  
  // Appending elements
 workSection.appendChild(itemDiv);
 itemDiv.appendChild(itemTitle)
 itemDiv.appendChild(itemDescription)
 itemDiv.appendChild(itemUl)
 itemDiv.appendChild(itemBtn)

 

  // Adding technologies to the UL
  for (let i = 0; i < projects[projectNumber].technologies.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.innerHTML = projects[projectNumber].technologies[i];
    itemUl.appendChild(listItem);
  }

  // Filling the elements information
  itemTitle.innerHTML = projects[projectNumber].name;
  itemDescription.innerHTML = projects[projectNumber].description;
  itemBtn.innerHTML = 'See Project';
  
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  branding.classList.toggle("opacity");
  xxx.classList.toggle("opacity");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    branding.classList.remove("opacity");
    xxx.classList.remove("opacity");
  })
);

document.querySelectorAll(".btn-works").forEach((n) =>
  n.addEventListener("click", () => {
    const classes = n.className.split(" ");
    const juj = Number(classes[1]);
    modalTitle.innerHTML = projects[juj]["name"];
    modalDes.innerHTML = projects[juj]["description"];
    imgTag.src = projects[juj]["featuredImage"];
    ulModal.innerHTML = "";
    closeBtn.innerHTML = "&times;";
    sourceBtn.innerHTML = "See Source";
    liveBtn.innerHTML = "See Live";
    projects[juj]["technologies"].forEach((tech) => {
      const modalLi = document.createElement("li");
      modalLi.innerHTML = tech;
      ulModal.appendChild(modalLi);
    });
    openModal(modal);
  })
);

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
  console.log(modals);
});
closeBtn.addEventListener("click", () => {
  const modal = closeBtn.closest(".modal");
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
