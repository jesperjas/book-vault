import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Author } from '../entities/author.entity';

@Injectable()
export class AuthorsRepository extends Repository<Author> {
  constructor(private dataSource: DataSource) {
    super(Author, dataSource.createEntityManager());
  }

  async saveAuthor(author: Author) {
    return this.save(author);
  }
}
