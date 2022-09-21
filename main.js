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

libraryDiv.addEventListener('click', (e) => {
  console.log(e.target.textContent)
  const isButton = e.target.nodeName === 'BUTTON';
  console.log('inside');
  console.log(isButton);
  console.log(e.path[2])
  console.log(libraryDiv)
  if(!isButton) {
    return;
  }
  if(e.target.textContent === "Delete"){
    libraryDiv.removeChild(e.path[2]);
  }
  if(e.target.textContent === "Edit"){
    // what to do for edit functionality
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

let form = document.querySelector('.form');
let addButton = document.querySelector('#add-button');
let submitButton = document.querySelector('#submit-button');

addButton.addEventListener('click', () => {
  form.style.display = 'block';
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
  form.style.display = 'none';
});

// looper(myLibrary);
// console.log(myLibrary);