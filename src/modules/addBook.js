const addBook = () => {
  // DOM Cache:
  const submissionForm = document.querySelector('#submit-book');
  const submissionTitle = document.querySelector('#submit-title');
  const submissionAuthor = document.querySelector('#submission-author');
  const submissionPages = document.querySelector('#submission-pages');
  const submissionRead = document.querySelector('.read-submission');
  const submissionNotRead = document.querySelector('.not-read-submission');
  const submitBtn = document.querySelector('#submit-book');

  //   Event Delegation:
  submissionForm.addEventListener('click', (e) => {
    if (e.target === submitBtn) {
      console.log('working');
    }
  });
};

export default addBook;
