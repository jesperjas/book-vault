import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Author } from './author.entity';
import { Category } from './category.entity';

@Entity('Book')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'text', nullable: true }) 
  description?: string;

  @Column({ type: 'varchar', nullable: true })
  isbn?: string;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price?: number;

  @Column({ type: 'date', nullable: true })
  publicationDate?: Date;

  @Column({ type: 'varchar', nullable: true })
  language?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Author, (author) => author.books)
  author?: Author;

  @ManyToOne(() => Category, (category) => category.books)
  category?: Category;
}
