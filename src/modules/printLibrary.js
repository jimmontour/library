import library from './library.js';

const printLibrary = () => {
  //   DOM Cache:
  const libraryDiv = document.querySelector('.library');
  libraryDiv.innerHTML = '';
  //   Methods:
  library.forEach((book) => {
    console.log(book.title);
    console.log(library);

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('book-title');
    bookTitle.innerText = book.title;
    bookDiv.appendChild(bookTitle);

    libraryDiv.appendChild(bookDiv);
  });
};

export default printLibrary;
