import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AuthorModule } from './author/author.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ConfigModule.forRoot(),
     TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,

      schema: 'bookvault',

      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      autoLoadEntities: true,
      synchronize: true,
    }),
     BooksModule,
     AuthorModule,
     CategoriesModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

