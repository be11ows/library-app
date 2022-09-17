let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return(`Title: ${title}\nAuthor: ${author}\nPages: ${pages}\nRead: ${read}`);
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

console.log(myLibrary)
const book1 = new Book('The Art of Dreaming', 'Carlos Castaneda', 220, 'Currently reading');
console.log(book1.info());
addBookToLibrary(book1);
console.log(myLibrary)