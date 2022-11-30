// let books = [];
// const book = document.getElementById('book');
// const forma = document.querySelector('form');
// const suma = 1;
// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }
// function addBook() {
//   for (let i = 0; i < books.length; i += 1) {
//     const bookData = `
//         <div id="book${i}">
//             <h2>${books[i].title}</h2>
//             <p>${books[i].author}</p>
//             <button id="${i}" class="remove">x</button>
//             <hr>
//         </div>
//         `;
//     book.innerHTML += bookData;
//   }
// }
// const addSingleBook = (() => {
//   let id = 0;
//   if (books.length === 0) {
//     id = 1;
//   } else {
//     id = [(books.length - 1) + suma];
//   }
//   const t = document.getElementById('title').value;
//   const a = document.getElementById('author').value;
//   const y = new Book(t, a);
//   books.push(y);
//   const bookData = `
//     <div id="${id}">
//         <h2>${y.title}</h2>
//         <p>${y.author}</p>
//         <button id="${y}" class="remove">x</button>
//         <hr>
//     </div>
//     `;
//   book.innerHTML += bookData;
//   const titleValue = document.getElementById('title');
//   const authorValue = document.getElementById('author');
//   titleValue.value = '';
//   authorValue.value = '';
//   localStorage.setItem('books', JSON.stringify(books));
// });
// forma.addEventListener('submit', (e) => {
//   e.preventDefault();
//   addSingleBook();
// });
// const removeSingleBook = (e) => {
//   if (e.target.textContent === 'x') {
//     const booksId = e.target.parentElement;
//     const { id } = e.target;
//     books.splice(id, 1);
//     booksId.remove();
//   }
//   localStorage.setItem('books', JSON.stringify(books));
// };
// book.addEventListener('click', (e) => {
//   removeSingleBook(e);
// });
// window.addEventListener('load', () => {
//   const content = JSON.parse(localStorage.getItem('books'));
//   if (content === 0 || content === null) {
//     localStorage.setItem(('books', JSON.stringify(books)));
//   } else {
//     books = content;
//     addBook();
//   }
// });
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
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
      if(book.title === title) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
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
  console.log(e.target);
  Interface.removeBook(e.target);
  LocalStorage.removeBookFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
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
} );

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


