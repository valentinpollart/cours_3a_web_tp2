import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from "./models/book";
import { SearchBy, SearchTerm } from './models/listAllParams';
import { PaginatedResult, Pagination } from './dtos/pagination';
import { BookDto } from './dtos/bookDto';


@Controller('/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  list(@Query() searchBy: SearchBy, @Query() pagination: Pagination): PaginatedResult {
    return this.bookService.list(searchBy, pagination);
  }

  @Post('search')
  searchByTerm(@Body() searchTerm: SearchTerm, @Query() pagination: Pagination): PaginatedResult {
    return this.bookService.search(searchTerm, pagination);
  }

  @Post()
  create(@Body() book: BookDto): Book {
    return this.bookService.create(book);
  }

  @Get(':title')
  read(@Param('title') title: string): Book {
    return this.bookService.readOne(title);
  }

  @Delete(':title')
  delete(@Param('title') title: string): void {
    this.bookService.delete(title);
  }
}
