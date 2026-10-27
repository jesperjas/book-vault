import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { booksDto } from './dto/books.requestDto';
import { Book } from '../entities/book.entity';
import { BooksRepository } from './books.repository';
import { Author } from '../entities/author.entity';
import { AuthorService } from '../author/author.service';

@Injectable()
export class BooksService {
  constructor(
    private readonly booksRepository: BooksRepository,
    private readonly logger: Logger,
    private readonly authorService: AuthorService,
  ) {}

  async create(requestModel: booksDto) {
    const existingBook = await this.booksRepository.findByIsbn(
      requestModel.isbn,
    );

    this.logger.log(`Creating Book : ${requestModel.title}`);

    if (existingBook) {
      throw new BadRequestException('Book Already Exists');
    }

    const bookEntity = new Book();

    bookEntity.title = requestModel.title;
    bookEntity.stock = requestModel.stock;
    bookEntity.price = requestModel.price;
    bookEntity.isbn = requestModel.isbn;

    const savedBook = await this.booksRepository.saveBooks(bookEntity);

    const savedAuthor = await this.authorService.create(requestModel);

    return {
      book: savedBook,
      savedAuthor: savedAuthor,
    };
  }
}
