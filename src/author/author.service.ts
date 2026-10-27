import { Injectable } from '@nestjs/common';
import { AuthorsRepository } from './author.repository';
import { booksDto } from '../books/dto/books.requestDto';
import { Author } from '../entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(private readonly authourRepository: AuthorsRepository) {}

  async create(requestModel: booksDto) {
    const AuthorEntity = new Author();

    AuthorEntity.name = requestModel.authorName;
    AuthorEntity.bio = requestModel.bio;

    this.authourRepository.saveAuthor(AuthorEntity);
  }
}
