//Query Selectors
const library = document.querySelector(".library");
const main = document.querySelector("main");
const openModalBtn = document.querySelector(".plus");
const closeModalBtn = document.querySelector(".modal-close");
const selectBtn = document.querySelector(".sel");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const modalBtn = document.querySelector(".modal-button");
const overlay = document.querySelector("#overlay");

//Form
const form = document.querySelector("#book-form");
form.addEventListener("submit", function (eventObject) {
  eventObject.preventDefault();
});
modalBtn.addEventListener("click", function () {
  //Book Variables
  let bookTitle = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  let genre = document.querySelector("#genre");
  let read = document.querySelector("#read");
  bookTitle = bookTitle.value;
  author = author.value;
  pages = pages.value;
  genre = genre.value;
  read = read.value;
  let book = new Book(bookTitle, author, pages, genre, read);
  addBookToLibrary(book);
  let card = document.createElement("div");
  library.append(card);
  if (book.read === "Reading") {
    card.innerHTML = `<h2>${book.title}</h2>
                      <h3>${book.author}</h3>
                      <p>Pgs. <strong>${book.pages}</strong></p>
                      <p>Genre: <strong>${book.genre}</strong></p>
                      <div class="read-or-not">
                      <p>${book.read}</p>
                      <button class="book"><i class="fas fa-book-open"></i></button>
                      </div>
                      <div class="trash"><button class="trash-btn"><i class="fas fa-trash"></i></button></div>`;

    card.classList.add("card");
  } else {
    card.innerHTML = `<h2>${book.title}</h2>
                      <h3>${book.author}</h3>
                      <p>Pgs. <strong>${book.pages}</strong></p>
                      <p>Genre: <strong>${book.genre}</strong></p>
                      <div class="read-or-not">
                      <p">${book.read}</p>
                      <button class="book"><i class="fas fa-book-closed"></i></button>
                      </div>
                      <div class="trash"><button class="trash-btn"><i class="fas fa-trash"></i></button></div>`;
    card.classList.add("card");
    card.classList.add("card-read");
  }
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  form.reset();
  //Library Functions
  let readOrNot = card.children[4];
  let btn = readOrNot.children[1];
  btn.addEventListener('click', function(){
    let card = this.parentNode.parentNode;
    let p = this.parentNode;
    let pCard = p.children[0];
    if (pCard.innerHTML === "Reading") {
      p.children[0].innerHTML = "Read";
      btn.innerHTML = '<i class="fas fa-book"></i>';
      card.classList.add("card-read");
    } else {
      p.children[0].innerHTML = "Reading";
      btn.innerHTML = '<i class="fas fa-book-open"></i>';
      card.classList.remove("card-read");
    }
  })
  let trash = card.children[5];
  let trashBtn = trash.children[0];
  trashBtn.addEventListener('click', function(){
    let card = this.parentNode.parentNode
    let h2 = card.children[0];
    myLibrary.splice(h2, 1)
    let parent = card.parentNode
    parent.removeChild(card)
  })
});

//Modals
openModalBtn.addEventListener("click", function () {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
});
closeModalBtn.addEventListener("click", function () {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

// myLibrary.findIndex(x => x.title === 'x');
//Library
let myLibrary = [];
function Book(title, author, pages, genre, read) {
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.genre = genre),
    (this.read = read);
}
function addBookToLibrary(book) {
  myLibrary.push(book);
}

//Seeds / Examples
const book1 = new Book(
  "The First Law",
  "Joe Abercrombie",
  "560",
  "Fantasy",
  "Read"
);
const book2 = new Book(
  "Gardens of the Moon",
  "Steven Erikson",
  "712",
  "Fantasy",
  "Reading"
);
addBookToLibrary(book1);
addBookToLibrary(book2);

//Cards
for (let book of myLibrary) {
  let card = document.createElement("div");
  library.append(card);
  if (book.read === "Reading") {
    card.innerHTML = `<h2>${book.title}</h2>
                    <h3>${book.author}</h3>
                    <p>Pgs. <strong>${book.pages}</strong></p>
                    <p>Genre: <strong>${book.genre}</strong></p>
                    <div class="read-or-not">
                    <p class="book-read">${book.read}</p>
                    <button class="book"><i class="fas fa-book-open"></i></button>
                    </div>
                    <div class="trash"><button class="trash-btn"><i class="fas fa-trash"></i></button></div>`;
    card.classList.add("card");
  } else {
    card.innerHTML = `<h2>${book.title}</h2>
                    <h3>${book.author}</h3>
                    <p>Pgs. <strong>${book.pages}</strong></p>
                    <p>Genre: <strong>${book.genre}</strong></p>
                    <div class="read-or-not">
                    <p class="book-read">${book.read}</p>
                    <button class="book"><i class="fas fa-book"></i></button>
                    </div>
                    <div class="trash"><button class="trash-btn"><i class="fas fa-trash"></i></button></div>`;
    card.classList.add("card");
    card.classList.add("card-read");
  }
}

//Seed Functions
const buttons = document.querySelectorAll(".book");
for (let button of buttons) {
  button.addEventListener("click", function () {
    let card = this.parentNode.parentNode;
    let p = this.parentNode;
    let pCard = p.children[0];
    if (pCard.innerHTML === "Reading") {
      p.children[0].innerHTML = "Read";
      button.innerHTML = '<i class="fas fa-book"></i>';
      card.classList.add("card-read");
    } else {
      p.children[0].innerHTML = "Reading";
      button.innerHTML = '<i class="fas fa-book-open"></i>';
      card.classList.remove("card-read");
    }
  });
}

const trashButtons = document.querySelectorAll('.trash-btn');
for(let trashButton of trashButtons){
    trashButton.addEventListener('click', function(){
        let card = this.parentNode.parentNode
        let h2 = card.children[0];
        myLibrary.splice(h2, 1)
        let parent = card.parentNode
        parent.removeChild(card)
    })
}
