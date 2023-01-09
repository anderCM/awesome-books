const bookForm = document.getElementById("books");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const idbook=Math.floor(Math.random() * 100);
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  /*const booksContainer = document.getElementById('books-container');*/

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

  currentData.push({ idbook,title, author });
  localStorage.setItem("books-data", JSON.stringify(currentData));
  console.log(currentData);
  display(currentData);
});
let currentData_1=localStorage.getItem("books-data");
currentData_1 = JSON.parse(currentData_1);

function display(currentData){
  const booksContainer = document.getElementById('books-container');
  currentData.map((book) => {
    
    const titlBook = book.title;
    const authorBook = book.author;
    const id=book.idbook;
    const bookCard = document.createElement('div');
    bookCard.id=id;
    bookCard.style.borderBottom = '1px solid #000';
    
    const pTitle = document.createElement('p');
    pTitle.textContent = titlBook;

    const pAuthor = document.createElement('p');
    pAuthor.textContent = authorBook;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener("click",()=>{ removebtn(currentData,id)});

    bookCard.append(pTitle, pAuthor,removeBtn);
    booksContainer.appendChild(bookCard);
  });
}

display(currentData_1);

function removebtn(currentData,id){
const cardElement=document.getElementById(id);
cardElement.remove();
const dellocal=currentData.filter((book) => {
return book.idbook != id});
localStorage.setItem("books-data",JSON.stringify(dellocal));
console.log(dellocal);
}