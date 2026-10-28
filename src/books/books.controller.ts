import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { booksDto } from './dto/books.requestDto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('/create')
  async create(@Body() requestDto: booksDto) {
    return this.booksService.create(requestDto);
  }
}
