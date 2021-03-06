import library from './library';
import printLibrary from './printLibrary';

const addBook = () => {
  // DOM Cache:
  const submissionTitle = document.querySelector('#submission-title');
  const submissionAuthor = document.querySelector('#submission-author');
  const submissionPages = document.querySelector('#submission-pages');
  const submitBtn = document.querySelector('#submit-book');

  //   Book Factory:
  const BookFactory = function (title, author, pages) {
    return { title, author, pages };
  };
  // Event Delegation:
  submitBtn.addEventListener('click', () => {
    const newBook = BookFactory(
      submissionTitle.value,
      submissionAuthor.value,
      submissionPages.value
    );
    library.push(newBook);
    printLibrary();
  });
};

export default addBook;
