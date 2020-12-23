import library from './library';

const addBook = () => {
  // DOM Cache:
  const submissionForm = document.querySelector('.submit-book');
  const submissionTitle = document.querySelector('#submission-title');
  const submissionAuthor = document.querySelector('#submission-author');
  const submissionPages = document.querySelector('#submission-pages');
  const submissionRead = document.querySelector('.read-submission');
  const submissionNotRead = document.querySelector('.not-read-submission');
  const submitBtn = document.querySelector('#submit-book');

  //   Book Factory:
  const BookFactory = function (title, author, pages) {
    return { title, author, pages };
  };
  // Event Delegation:
  submitBtn.addEventListener('click', (e) => {
    const newBook = BookFactory(
      submissionTitle.value,
      submissionAuthor.value,
      submissionPages.value
    );
    library.push(newBook);
    console.log(library);
  });
};

export default addBook;
