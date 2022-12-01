/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class LocalStorage {
  static loadBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBookToStorage(book) {
    const books = LocalStorage.loadBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBookFromStorage(title) {
    const books = LocalStorage.loadBooks();
    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
class Interface {
  static booksDisplay() {
    const books = LocalStorage.loadBooks();
    books.forEach((book) => Interface.addBook(book));
  }

  static addBook(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td></td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>  
      `;
    list.appendChild(row);
  }

  static removeBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.parentElement.remove();
    }
  }

  static clearValues() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', Interface.booksDisplay);
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new Book(title, author);
  Interface.addBook(book);
  LocalStorage.addBookToStorage(book);
  Interface.clearValues();
});
document.getElementById('book-list').addEventListener('click', (e) => {
  Interface.removeBook(e.target);
  LocalStorage.removeBookFromStorage(e.target
    .parentElement
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .textContent);
});

const home = document.getElementById('home');
const add = document.getElementById('add');
const contact = document.getElementById('contact');

const gethome = document.getElementById('get-home');
const getadd = document.getElementById('get-add');
const getcontact = document.getElementById('get-contact');

getcontact.addEventListener('click', (e) => {
  e.preventDefault();
  home.style.display = 'none';
  contact.style.display = 'block';
  add.style.display = 'none';
});

getadd.addEventListener('click', (e) => {
  e.preventDefault();
  home.style.display = 'none';
  contact.style.display = 'none';
  add.style.display = 'block';
});

gethome.addEventListener('click', (e) => {
  e.preventDefault();
  home.style.display = 'block';
  contact.style.display = 'none';
  add.style.display = 'none';
});

function clock() {
  const date = document.getElementById('date');
  const dateToString = new Date().toLocaleString();
  const dateFormat = dateToString.replace(', ', ' | ');
  date.textContent = dateFormat;
}
setInterval(clock, 1000);
