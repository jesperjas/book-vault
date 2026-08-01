import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { AuthorsRepository } from './author.repository';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService, AuthorsRepository],
})
export class AuthorModule {}
