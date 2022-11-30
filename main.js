let books = [];

const book = document.getElementById('book');
const forma = document.querySelector('form');
const suma = 1;

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook() {
  for (let i = 0; i < books.length; i += 1) {
    const bookData = `
        <div id="book${i}">
            <h2>${books[i].title}</h2>
            <p>${books[i].author}</p>
            <button id="${i}" class="remove">x</button>
            <hr>
        </div>
        `;
    book.innerHTML += bookData;
  }
}

const addSingleBook = (() => {
  let id = 0;

  if (books.length === 0) {
    id = 1;
  } else {
    id = [(books.length - 1) + suma];
  }
  const t = document.getElementById('title').value;
  const a = document.getElementById('author').value;
  const y = new Book(t, a);
  books.push(y);
  const bookData = `
    <div id="${id}">
        <h2>${y.title}</h2>
        <p>${y.author}</p>
        <button id="${y}" class="remove">x</button>
        <hr>
    </div>
    `;
  book.innerHTML += bookData;
  const titleValue = document.getElementById('title');
  const authorValue = document.getElementById('author');
  titleValue.value = '';
  authorValue.value = '';
  localStorage.setItem('books', JSON.stringify(books));
});

forma.addEventListener('submit', (e) => {
  e.preventDefault();
  addSingleBook();
});

const removeSingleBook = (e) => {
  if (e.target.textContent === 'x') {
    const booksId = e.target.parentElement;
    const { id } = e.target;
    books.splice(id, 1);
    booksId.remove();
  }
  localStorage.setItem('books', JSON.stringify(books));
};

book.addEventListener('click', (e) => {
  removeSingleBook(e);
});

window.addEventListener('load', () => {
  const content = JSON.parse(localStorage.getItem('books'));

  if (content === 0 || content === null) {
    localStorage.setItem(('books', JSON.stringify(books)));
  } else {
    books = content;
    addBook();
  }
});
