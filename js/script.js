const slides = document.querySelectorAll(".slides");
const dot = document.querySelectorAll(".dot");
const clients = document.querySelectorAll(".clients");

let curIndex = 0;
let index = 0;

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
  if (curIndex === 0) {
    curIndex = slides.length - 1;
  } else {
    curIndex = curIndex - 1;
  }
  currentSlide(curIndex);
}

function heroNext() {
  if (curIndex === slides.length - 1) {
    curIndex = 0;
  } else {
    curIndex = curIndex + 1;
  }
  currentSlide(curIndex);
}

function moveCollection() {
  document.querySelector(".collection-items").classList.toggle("hidden");
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
  if (index === clients.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  clientsSlide(index);
}

function previousClients() {
  if (index === 0) {
    index = clients.length - 1;
  } else {
    index = index - 1;
  }
  clientsSlide(index);
}

currentSlide(curIndex);
clientsSlide(index);
