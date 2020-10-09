let library= [];

function createBook(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    library.push(new createBook(title, author, pages, read));
}

function display(){
    completedBooks.innerHTML='';
    readingList.innerHTML='';
    for (let item of library){
        let book = document.createElement('div');
        book.classList.add('card');
        book.innerHTML=
            `<img src="https://picsum.photos/id/${parseInt(Math.random()*1000)}/300" class="card-img-top" alt="...">` +
            '<div class="card-body">' +
                `<h5 class="card-title">${item.title}</h5>` +
                `<p class="card-text">${item.author}</p>` +
                `<p class="card-text">${item.pages} Pages</p>` +
                '<div class="btn-group">' +
                    `<a href="#" class="btn btn-sm btn-info">Mark as ${item.read? 'unread' : 'read'}</a>` +
                    '<a href="#" class="btn btn-sm btn-danger">Delete</a>' +
                '</div>' +
            '</div>';
            if(item.read){
                completedBooks.appendChild(book);
            }
            else{
                readingList.appendChild(book);
            }
    }
}

let readingList = document.querySelector('.readingList');
let completedBooks = document.querySelector('.completedBooks');
let form = document.querySelector('#addNew form');
form.addEventListener('submit', function(event){
    console.log(event);
    addBookToLibrary(event.target[0].value,event.target[1].value,event.target[2].value,event.target[3].value)
    display();
    form.reset();
    event.preventDefault();
});

addBookToLibrary('Ramble Book', 'Adam Buxton', '398', false);
addBookToLibrary('The Watchmaker of Filigree Street', 'Natasha Pulley', '587', true);
display();