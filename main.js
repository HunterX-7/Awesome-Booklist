var books = []

const book =  document.getElementById('book');

function Book(title, author) {
    this.title = title; 
    this.author = author;
}

function addBook() {
    for(let i = 0; i < books.length; i++){
        let bookData = `
        <div id="book${i}">
            <h2>${books[i].title}</h2>
            <p>${books[i].author}</p>
            <button class="remove">x</button>
        </div>
        <hr>
        `;  
        book.innerHTML += bookData;
    }
}

addBook();

const forma = document.querySelector('form')
let suma = 1;

forma.addEventListener('submit', (e)=> {
    e.preventDefault();
    let id = 0;
    
    if (books.length === 0) {
        id = 1;
    }
    else {
        id = [(books.length-1)+suma];
    }
    let t = document.getElementById('title').value;
    let a = document.getElementById('author').value;
    const y = new Book(t,a);
    books.push(y)
    let bookData = `
    <div id="books${id}">
        <h2>${y.title}</h2>
        <p>${y.author}</p>
        <button class="remove">x</button>
    </div>
    <hr>
    `;  
    book.innerHTML += bookData;
    localStorage.setItem('books', JSON.stringify(books));
});

const xButton = document.getElementsByClassName('remove')

book.addEventListener('click', (e)=> {
   if (e.target.xButton) {
    let booksId = e.target.parentElement.id
    book = book.filter((book)=> book[booksId])
   }
})

window.addEventListener('load', () => {

   let content = JSON.parse(localStorage.getItem('books'))

   if (content === null){
    localStorage.setItem(('books', JSON.stringify(books)));
   }else {
    books = content;
    addBook();
    }
})
