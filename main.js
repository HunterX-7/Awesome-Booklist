var books = [
    {
        title: 'The little prince',
        author: 'Antoine de Saint-Exupéry' 
    },
    {
        title: 'The figth club',
        author: 'Chuck Palahniuk' 
    }
]

const book =  document.getElementById('book');
let t = document.getElementById('title').value;
let a = document.getElementById('author').value;
let t1 = JSON.stringify(t);
let a1 = JSON.stringify(a);

function Book(title, author) {
    this.title = title; 
    this.author = author;
}

const x = new Book("book1", "author1");
console.log(x)

books.push(x)

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
});

const xButton = document.getElementsByClassName('remove')

book.addEventListener('click', (e)=> {
   if (e.target.xButton) {
    let booksId = e.target.parentElement.id
    book = book.filter((book)=> book[booksId])
   }
})



forma.addEventListener('input', () => {

    const data = {
        title: title.value,
        author: author.value,
    };

    localStorage.setItem('userData', JSON.stringify(data));

})

let getData = localStorage.getItem('userData');
getData = JSON.parse(getData)

if (getData != null) {
    title.value = getData.title;
    author.value = getData.author;
}

// document.addEventListener('DOMContentLoaded', ()=> {
//     const dataUnstr = JSON.parse(localStorage.getItem('data'));
// })

// function getBooks() {
//     if(localStorage.getItem('books') === null){
//         books = [];
//     }
//     else {
//         books = JSON.parse(localStorage.getItem('books'))
//     }
// }

// function storeBooks() {
//     const books = 
// }

console.log(books);
