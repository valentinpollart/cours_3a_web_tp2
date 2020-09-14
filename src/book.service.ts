import { Injectable } from '@nestjs/common';
import { Book } from "./models/book";
import { Bookshelf} from './models/bookshelf';
import { SearchBy, SearchTerm } from './models/listAllParams';
import { PaginatedResult, Pagination } from './dtos/pagination';
import { BookDto } from './dtos/bookDto';

@Injectable()
export class BookService {
    private  readonly bookshelf: Bookshelf = new Bookshelf();

    list(searchBy?: SearchBy, pagination?: Pagination): PaginatedResult {
        let data = [];
        if(searchBy.author !== undefined) {
            data = this.bookshelf.getBooksOf(searchBy.author);
        } else {
            data = this.bookshelf.getAllBooks();
        }
        return BookService.paginate(pagination,data);
    }

    search(searchTerm: SearchTerm, pagination?: Pagination): PaginatedResult {
        let data = [];
        data =  this.bookshelf.searchTerm(searchTerm['term'])
        return BookService.paginate(pagination, data);
    }

    create(book: BookDto): Book {
        return this.bookshelf.addBook(book);
    }

    readOne(title: string): Book {
        return this.bookshelf.getBook(title)
    }

    delete(title: string): void {
        this.bookshelf.removeBook(title);
    }

    private static paginate(pagination: Pagination, data): PaginatedResult {
        const result: PaginatedResult = {
            data: [],
            page: pagination.page ?? 0,
            perPage: pagination.perPage ?? data.length,
            totalCount: data.length,
        };

        result.page = Number(result.page);
        result.perPage = Number(result.perPage);

        if(result.page * result.perPage > result.totalCount) {
            result.data = [];
            return result;
        }
        result.data = data.slice(
          result.page * result.perPage,
          (result.page + 1) * result.perPage > result.totalCount ? result.totalCount - result.page * result.perPage : (result.page + 1) * result.perPage
        );

        return result;
    }
}
