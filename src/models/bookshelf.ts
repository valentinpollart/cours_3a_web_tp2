import { Book } from "./book"
import { BookDto } from '../dtos/bookDto';

export class Bookshelf {
    books: Book[];

    constructor(books: Book[] = []) {
        this.books = books;
    };

    addBook(book: BookDto): Book {
        if(this.books.some((element) => element == book)){
            return;
        }
        this.books.push(book);
        return book;
    };

    getBook(name: string): Book|undefined {
        return this.books.find(element => element.title === name)
    };

    getBooksOf(author: string): Book[]|undefined {
        return this.books.filter(element => element.author === author)
    };

    getAllBooks(): Book[]  {
        this.books.sort(this.sortByTitle);
        return this.books;
    };

    getTotalNumberOfBooks(): number {
        return this.books.length;
    }

    sortByTitle(book1: Book, book2: Book): number {
        if(book1.title > book2.title) {
            return 1;
        }
        if(book1.title < book2.title) {
            return -1;
        }
        return 0;
    }

    removeBook(title: string): void {
        this.books.forEach(
          (book, index) => {
              if(book.title === title) {
                  this.books.splice(index,1)
              }
          }
        )
    }

    searchTerm(term: string): Book[]|undefined {
        const result: Book[] = [];
        this.books.forEach(
          (book) => {
              if(book.title.includes(term) || book.author.includes(term)) {
                  result.push(book)
              }
          }
        )
        return result;
    }
}