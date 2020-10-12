// setup object to store books and method to add them

let library= [];

function createBook(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.imgID = parseInt(Math.random()*1000);
}

function addBookToLibrary(title, author, pages, read){
    library.push(new createBook(title, author, pages, read));
}

// user input to add new books

let readingList = document.querySelector('.readingList');
let completedBooks = document.querySelector('.completedBooks');
let form = document.querySelector('#addNew form');
let radio;

form.addEventListener('submit', function(event){
    radio = document.querySelector('input[name="customRadio"]:checked');
    addBookToLibrary(event.target[0].value,event.target[1].value,event.target[2].value,radio.value)
    display();
    form.reset();
    event.preventDefault();
});

// output to page

function display(){
    completedBooks.innerHTML='';
    readingList.innerHTML='';
    for (let item of library){
        let book = document.createElement('div');
        book.classList.add('col-md-4', 'col-sm-6');
        book.innerHTML=
        `<div class="card">` +
            `<img src="https://picsum.photos/id/${item.imgID}/300" class="card-img-top" alt="...">` +
            '<div class="card-body">' +
                `<h5 class="card-title">${item.title}</h5>` +
                `<p class="card-text">${item.author}</p>` +
                `<p class="card-text">${item.pages} Pages</p>` +
                '<div class="btn-group">' +
                    `<a href="#" id="toggleRead" class="btn btn-sm btn-info">Mark as ${item.read? 'unread' : 'read'}</a>` +
                    '<a href="#" id="delete" class="btn btn-sm btn-danger">Delete</a>' +
                '</div>' +
            '</div>'
        '</div>';
        if(item.read){
            completedBooks.appendChild(book);
        }
        else{
            readingList.appendChild(book);
        }
        book.addEventListener('click', function(event){
            if (event.target.id==="toggleRead"){
                item.read = ! item.read;
                display();
            }
            else if (event.target.id==="delete"){
                library.splice(library.indexOf(item), 1);
                display();
            }
        })
    }
}

//add some demo content 
addBookToLibrary('Ramble Book', 'Adam Buxton', '363', false);
addBookToLibrary('1984', 'George Orwell', '280', false);
addBookToLibrary('Brave New World', 'Aldous Huxley', '248', true);
addBookToLibrary('My Bookey Wook', 'Russell Brand', '432', false);
addBookToLibrary('The Watchmaker of Filigree Street', 'Natasha Pulley', '487', true);
display();

//Need to fix top nav so that anchor links are offset and collapses for mobiles.