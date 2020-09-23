// example books (delete later)
const example1 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 423
}

const example2 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 423
}

const example3 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 423
}


let myLibrary = [example1, example2, example3];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
};

function addBookToLibrary(book) {
}

// make a functional form with event listeners and query selectors

const submit = document.querySelector('#submit-button')

// when submit is clicked

submit.addEventListener('click', function(e) {
    let newTitle = document.querySelector('#title').value;
    let newAuthor = document.querySelector('#author').value;
    let newPages = document.querySelector('#pages').value;

    createdBook = new Book(newTitle, newAuthor, newPages);
    console.log(createdBook);

    myLibrary.push(createdBook);
    console.log(myLibrary);
});

// the myLibrary array is shown on the page with the new book


// Testing
console.log(myLibrary)


