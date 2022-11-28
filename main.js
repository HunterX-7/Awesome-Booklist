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

console.log(t)
console.log(a)
console.log(t1)
console.log(a1)

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
})

// document.addEventListener('change', () => {
//     const title = document.getElementById('title');
//     const author = document.getElementById('author');

//     const data = {
//         title: title.value,
//         author: author.value,
//     }

//     const dataStr = JSON.stringify(data);

//     localStorage.setItem(data, dataStr);
// })

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

document.querySelector('#form').addEventListener('submit', () =>{
    const newBook = {title: t1, author: a1};
    books.push(newBook);
})

// function addBook() {
//     books.push({title: t1, author: a1});
//     for(let i = 0; i < books.length; i++){
//         let bookData = `
//         <div id="book${i}">
//             <h2>${books[i].title}</h2>
//             <p>${books[i].author}</p>
//             <button>x</button>
//         </div>
//         <hr>
//         `;  
//         book.innerHTML = bookData;
//     }
// }




console.log(books);
