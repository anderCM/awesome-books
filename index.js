const bookForm = document.getElementById("books");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const booksContainer = document.getElementById('books-container');

  const localData = localStorage.getItem("books-data");
  let currentData;
  if (localData) {
    currentData = JSON.parse(localData);
  } else {
    currentData = [];
  }

  if (!title || !author) {
    alert("Please provide a Title or Author");
    return;
  }
  currentData.push({ title, author });
  localStorage.setItem("books-data", JSON.stringify(currentData));
  console.log(currentData);
  currentData.map((book) => {
    const titlBook = book.title;
    const authorBook = book.author;

    const bookCard = document.createElement('div');
    bookCard.style.borderBottom = '1px solid #000';
    
    const pTitle = document.createElement('p');
    pTitle.textContent = titlBook;

    const pAuthor = document.createElement('p');
    pAuthor.textContent = authorBook;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    bookCard.append(pTitle, pAuthor,removeBtn);
    booksContainer.appendChild(bookCard);
  });
});