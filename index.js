/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = [];
    this.booksContainer = document.getElementById('books-container');
  }

  storeBook(book) {
    localStorage.setItem('data-books', JSON.stringify(book));
  }

  getBooks() {
    if (!localStorage.getItem('data-books')) {
      this.books = [];
    } else {
      this.books = JSON.parse(localStorage.getItem('data-books'));
    }
    return this.books;
  }

  addBook(book) {
    const recoveredBooks = this.getBooks();
    recoveredBooks.push(book);
    this.storeBook(recoveredBooks);
  }

  removeBook(title, author) {
    this.books = this.books.filter((book) => book.title !== title || book.author !== author);
  }
}

class ShowBooks extends Book {
  displayBook(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const pTitle = document.createElement('p');
    pTitle.textContent = `"${book.title}" by ${book.author}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    bookCard.append(pTitle, removeBtn);
    this.booksContainer.appendChild(bookCard);

    removeBtn.addEventListener('click', () => {
      this.removeBook(book.title, book.author);
      this.storeBook(this.books);
      this.booksContainer.removeChild(bookCard);
    });
  }

  iterateBooks() {
    this.books = JSON.parse(localStorage.getItem('data-books'));
    this.books.map((book) => this.displayBook(book));
  }
}

const bookForm = document.getElementById('books');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (!title || !author) {
    alert('Please enter a Title and Author first');
    return;
  }
  const book = new ShowBooks();
  book.displayBook({ title, author });
  book.addBook({ title, author });

  title.value = '';
  author.value = '';
});

const toDisplay = new ShowBooks();
toDisplay.iterateBooks();