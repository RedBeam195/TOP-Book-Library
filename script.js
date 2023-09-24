const myLibrary = [];
let currentBook = { title: "", author: "", pages: 0, read: false };
const contentDiv = document.querySelector(".card-grid");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  function getReadStatus() {
    return this.read ? "green" : "red";
  }
}

function createCard(title, author, pages, read) {
  let card = document.createElement("div");
  let cardTitle = document.createElement("h2");
  cardTitle.textContent = title;
  let cardAuthor = document.createElement("p");
  cardAuthor.textContent = author;
  let cardPages = document.createElement("p");
  cardPages.textContent = pages;
  let cardRead = document.createElement("div");
  cardRead.classList.add(read ? "read" : "not-read");
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardRead);
  return card;
}

function displayCards(array) {
  while(contentDiv.hasChildNodes()){
    contentDiv.firstChild.remove()
  }
  console.log("Array : " + array);
  array.forEach((element) => {
    element = createCard(
      currentBook.title,
      currentBook.author,
      currentBook.pages,
      currentBook.read
    );
    contentDiv.appendChild(element);
  });
}

const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");
const readField = document.querySelector("#read");

const bookCache = (book) => {
  book.title = titleField.value;
  book.author = authorField.value;
  book.pages = pagesField.value;
  book.read = readField.checked;
};

const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", (e) => {
  document.querySelector(".modal").classList.toggle("shown");
});

document.querySelector(".close").addEventListener("click", (e) => {
  document.querySelector(".modal").classList.toggle("shown");
});

document.querySelector("#register").addEventListener("click", (e) => {
  document.querySelector(".modal").classList.toggle("shown");
  bookCache(currentBook);
  console.log(currentBook);
  let output = new Book(
    currentBook.title,
    currentBook.author,
    currentBook.pages,
    currentBook.read
  );
  myLibrary.push(output);
  displayCards(myLibrary);
  console.log(myLibrary);
});
