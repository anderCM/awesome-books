import Book from './BookClass.js';

export default class ShowBooks extends Book {
  displayBook(book) {
    if (document.getElementById('text-empty')) document.getElementById('text-empty').remove();

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const pTitle = document.createElement('p');
    pTitle.textContent = `"${book.title}" by ${book.author}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('btn', 'btn-outline-danger');

    bookCard.append(pTitle, removeBtn);
    this.booksContainer.appendChild(bookCard);

    removeBtn.addEventListener('click', () => {
      this.removeBook(book.title, book.author);
      this.storeBook(this.books);
      this.booksContainer.removeChild(bookCard);
      if (this.books?.length === 0) this.emptyMessage();
    });
  }

  emptyMessage() {
    const h4Message = document.createElement('h4');
    h4Message.id = 'text-empty';
    h4Message.classList.add('fw-bold', 'text-center');
    h4Message.textContent = 'No hay Libros';

    this.booksContainer.appendChild(h4Message);
  }

  iterateBooks() {
    this.books = JSON.parse(localStorage.getItem('data-books'));
    if (this.books?.length === 0 || !this.books) {
      this.emptyMessage();
      return;
    }
    this.books?.map((book) => this.displayBook(book));
  }
}