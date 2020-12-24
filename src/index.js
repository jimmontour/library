import addBook from './modules/addBook';
import library from './modules/library';
import printLibrary from './modules/printLibrary';

const init = (function () {
  addBook();
  printLibrary();
})();
