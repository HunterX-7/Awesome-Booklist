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
            <button id="${i}" class="remove">x</button>
            <hr>
        </div>
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
    <div id="${id}">
        <h2>${y.title}</h2>
        <p>${y.author}</p>
        <button id="${y}" class="remove">x</button>
        <hr>
    </div>
    `;  
    book.innerHTML += bookData;
    localStorage.setItem('books', JSON.stringify(books));
});


book.addEventListener('click', (e)=> {
    if(e.target.textContent === 'x'){
        let booksId = e.target.parentElement;
        let id = e.target.id;
        console.log(id);
        const arr = [...books]
        console.log(arr)
        books.splice(id, 1);
        console.log(books);
        booksId.remove();
    }
    localStorage.setItem('books', JSON.stringify(books));
})

window.addEventListener('load', () => {

   let content = JSON.parse(localStorage.getItem('books'))

   if (content === 0 || content === null){
    localStorage.setItem(('books', JSON.stringify(books)));
   }else {
    books = content;
    addBook();
    }
})
