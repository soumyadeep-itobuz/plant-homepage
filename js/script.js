const slides = document.querySelectorAll(".slides");
const dot = document.querySelectorAll(".dot");
const clients = document.querySelectorAll(".clients");

let heroIndex = 0;
let clientsIndex = 0;

function hamburger() {
  document.querySelector(".nav-item").classList.toggle("show");
}

function heroSlide(i) {
  slides[i].style.display = "block";
  for (let j = 0; j < i; j++) {
    slides[j].style.display = "none";
  }
  for (let j = i + 1; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
}

function heroPrevious() {
  if (heroIndex === 0) {
    heroIndex = slides.length - 1;
  } else {
    heroIndex = heroIndex - 1;
  }
  currentSlide(heroIndex);
}

function heroNext() {
  if (heroIndex === slides.length - 1) {
    heroIndex = 0;
  } else {
    heroIndex = heroIndex + 1;
  }
  currentSlide(heroIndex);
}

function currentSlide(i) {
  dot[i].style.backgroundColor = "green";
  heroSlide(i);
  for (let j = 0; j < i; j++) {
    dot[j].style.backgroundColor = "white";
  }
  for (let j = i + 1; j < dot.length; j++) {
    dot[j].style.backgroundColor = "white";
  }
}

function moveCollection() {
  document.querySelector(".collection-items").classList.toggle("hidden");
}

function clientsSlide(l) {
  clients[l].classList.remove("hidden");
  for (let j = 0; j < l; j++) {
    clients[j].classList.add("hidden");
  }
  for (let j = l + 1; j < clients.length; j++) {
    clients[j].classList.add("hidden");
  }
}

function nextClients() {
  if (clientsIndex === clients.length - 1) {
    clientsIndex = 0;
  } else {
    clientsIndex = clientsIndex + 1;
  }
  clientsSlide(clientsIndex);
}

function previousClients() {
  if (clientsIndex === 0) {
    clientsIndex = clients.length - 1;
  } else {
    clientsIndex = clientsIndex - 1;
  }
  clientsSlide(clientsIndex);
}

currentSlide(heroIndex);
clientsSlide(clientsIndex);
