import ShowHideViews from './modules/Handlers.js';
import ShowBooks from './modules/ShowBook.js';
import Timer from './modules/Time.js';

const bookForm = document.getElementById('books');
// Submiting new book
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title');
  const author = document.getElementById('author');

  // Validate if inputs are empty
  if (!title.value || !author.value) {
    alert('Please enter a Title and Author first');
    return;
  }

  // Add new book to localstorage and add to DOM
  const book = new ShowBooks();
  book.displayBook({ title: title.value, author: author.value });
  book.addBook({ title: title.value, author: author.value });

  // Set empty inputs
  title.value = '';
  author.value = '';

  // Go to list of books after adding
  ShowHideViews('books-added');
});

// Show Books at first load
const toDisplay = new ShowBooks();
toDisplay.iterateBooks();

// Set time dynamically
setInterval(Timer, 1000);

const listLink = document.getElementById('listLink');
const addBookLink = document.getElementById('addBookLink');
const contactLink = document.getElementById('contactLink');

listLink.addEventListener('click', () => {
  ShowHideViews('books-added');
});
addBookLink.addEventListener('click', () => {
  ShowHideViews('form-books');
});
contactLink.addEventListener('click', () => {
  ShowHideViews('contact-section');
});

ShowHideViews('books-added');