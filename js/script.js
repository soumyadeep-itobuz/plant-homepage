function hamburger() {
  document.querySelector(".nav-item").classList.toggle("show");
}

const slides = document.querySelectorAll(".slides");
const dot = document.querySelectorAll(".dot");
let curIndex = 0;
currentSlide(curIndex);

function slideShow(i) {
  slides[i].style.display = "block";
  for (let j = 0; j < i; j++) {
    slides[j].style.display = "none";
  }
  for (let j = i + 1; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
}

function previous() {
  if (curIndex === 0) {
    curIndex = slides.length - 1;
  } else {
    curIndex = curIndex - 1;
  }
  currentSlide(curIndex);
}

function next() {
  if (curIndex === slides.length - 1) {
    curIndex = 0;
  } else {
    curIndex = curIndex + 1;
  }
  currentSlide(curIndex);
}
function currentSlide(i) {
  dot[i].style.backgroundColor = "green";
  slideShow(i);
  for (let j = 0; j < i; j++) {
    dot[j].style.backgroundColor = "white";
  }
  for (let j = i + 1; j < dot.length; j++) {
    dot[j].style.backgroundColor = "white";
  }
}

const clients = document.querySelectorAll(".clients");
let index = 0;
clientsSlide(index);

function clientsSlide(l) {
  clients[l].classList.remove("hidden");
  for (let j = 0; j < l; j++) {
    clients[j].classList.add("hidden");
  }
  for (let j = l + 1; j < clients.length; j++) {
    clients[j].classList.add("hidden");
  }
}
function NextClients() {
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
