const myLibrary = [];
let currentBook = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  function getReadStatus() {
    return this.read ? "green" : "red";
  }
}

const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");
const readField = document.querySelector("#read");

const bookCache = (book) => {
  for (let i = 0; i < 4; i++) {
    book.pop();
  }
  book.push(titleField.value);
  book.push(authorField.value);
  book.push(pagesField.value);
  book.push(readField.checked);
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
});