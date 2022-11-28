var books = [
    {
        name: 'The little prince',
        author: 'Antoine de Saint-Exupéry' 
    },
    {
        name: 'The figth club',
        author: 'Chuck Palahniuk' 
    }
]


const book =  document.getElementById('book');

for(let i = 0; i < books.length; i++){
    let bookData = `
    <div id="book${i}">
        <h2>${books[i].name}</h2>
        <p>${books[i].author}</p>
        <button>x</button>
    </div>
    <hr>
    `;
    book.innerHTML += bookData;
}

