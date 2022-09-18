let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function looper(myLibrary) {
  myLibrary.forEach(book => {

  })
}

let addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', (e) => {
  
})

// const book1 = new Book('The Art of Dreaming', 'Carlos Castaneda', 220, 'Currently reading');
// const book2 = new Book('Dispelling Wetiko', 'Paul Levy', 283, 'Currently reading');
// const book3 = new Book('Creativity', 'John Cleese', 103, 'No');
// const book4 = new Book('Wilhelm Reich in Hell', 'Robert Anton Wilson', 161, 'Yes');
// const book5 = new Book('Privacy is Power', 'Carissa Veliz', 231, 'Yes');
// const book6 = new Book('Weapons of Math Destruction', "Cathy O'Neil", 239, 'Yes');
// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);
// addBookToLibrary(book4);
// addBookToLibrary(book5);
// addBookToLibrary(book6);
