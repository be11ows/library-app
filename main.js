let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let libraryDiv = document.querySelector('#library');
let formDiv = document.querySelector('.form');
let form = document.querySelector('#form');

libraryDiv.addEventListener('click', (e) => {
  console.log(e.target.textContent)
  const isButton = e.target.nodeName === 'BUTTON';
  let bookCard = e.target.parentElement.parentElement;

  if(!isButton) {
    return;
  }
  if(e.target.textContent === "Delete"){
    libraryDiv.removeChild(e.path[2]);
  }
  if(e.target.textContent === "Edit"){
    // what to do for edit functionality
    console.log('form is ', form)
    // console.log(form.elements[0].textContent === )
    form.style.display = 'block';

  }
})

function looper(myLibrary) {
  myLibrary.forEach(book => {
    let bookCard = document.createElement('div').classList.add('book-card');
    let bookCardHTML = `      
        <div class="title">${book.title}</div>
        <div class="author">Author: ${book.author}</div>
        <div class="pages">Pages: ${book.pages}</div>
        <div class="status">Status:${book.status}</div>`;

    bookCard.innerHTML = bookCardHTML;
    libraryDiv.appendChild(bookCard);
  });
}

function addBookToDom(book) {
  console.log('book for dom is ', book)

  let bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  console.log('bookCard is ', bookCard);
  let bookCardHTML = `      
      <div class="title">${book.title}</div>
      <div class="author">Author: ${book.author}</div>
      <div class="pages">Pages: ${book.pages}</div>
      <div class="status">Status: ${book.status}</div>
      <div class="book-buttons">
        <button class="bookDelete">Delete</button>
        <button class="bookEdit">Edit</button>
      </div>`;
  
  console.log(bookCardHTML);

  bookCard.innerHTML = bookCardHTML;
  libraryDiv.appendChild(bookCard);
}

let addButton = document.querySelector('#add-button');
let submitButton = document.querySelector('#submit-button');

addButton.addEventListener('click', () => {
  formDiv.style.display = 'block';
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  var elements = document.getElementById("form").elements;

  const newBook = new Book(elements[0].value, elements[1].value, elements[2].value, elements[3].value)
  console.log('new book is ', newBook)

  addBookToLibrary(newBook);
  addBookToDom(newBook);
  
  elements[0].value = '';
  elements[1].value = '';
  elements[2].value = '';
  elements[3].value = '';
  formDiv.style.display = 'none';
});

// looper(myLibrary);
// console.log(myLibrary);