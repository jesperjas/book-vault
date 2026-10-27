import { Logger, Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BooksRepository } from './books.repository';
import { AuthorService } from '../author/author.service';
import { AuthorsRepository } from '../author/author.repository';

@Module({
  controllers: [BooksController],
  providers: [
    BooksService,
    BooksRepository,
    Logger,
    AuthorService,
    AuthorsRepository,
  ],
})
export class BooksModule {}
