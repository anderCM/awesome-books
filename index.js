let books = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

const setStorage = (books) => {
  const dataBook = JSON.stringify(books);
  localStorage.setItem('data-books', dataBook);
};

const removeBook = (title, author) => {
  books = books.filter((book) => book.title !== title || book.author !== author);
};

const displayBook = (book) => {
  const booksContainer = document.getElementById('books-container');

  const bookCard = document.createElement('div');
  bookCard.style.borderBottom = '1px solid #000';

  const pTitle = document.createElement('p');
  pTitle.textContent = book.title;

  const pAuthor = document.createElement('p');
  pAuthor.textContent = book.author;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';

  bookCard.append(pTitle, pAuthor, removeBtn);
  booksContainer.appendChild(bookCard);

  removeBtn.addEventListener('click', () => {
    removeBook(book.title, book.author);
    setStorage(books);
    booksContainer.removeChild(bookCard);
  });
};

const iterateBooks = () => {
  books.map((book) => displayBook(book));
};

const saveBooks = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author);
  books.push(book);
  setStorage(books);
  displayBook(book);
};

const bookForm = document.getElementById('books');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (!title || !author) {
    alert('Please enter a Title and Author first');
    return;
  }
  saveBooks();
  title.value = '';
  author.value = '';
});

if (localStorage.getItem('data-books')) {
  const totalBooks = JSON.parse(localStorage.getItem('data-books'));
  books = totalBooks;
  console.log(books);
}
iterateBooks();
