import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Book } from '../models/book';

export class BookDto implements Book{
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;
}