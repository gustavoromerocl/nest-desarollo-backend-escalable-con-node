// https://gist.github.com/Klerith/1fb1b9f758bb0c5b2253dfc94f09e1b6
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/entities/user.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from './product-image.entity';

@Entity({ name: 'products'})
export class Product {

  @ApiProperty({
    example: '4abb6aa7-e895-4b85-8427-9bd0a36a66fd',
    description: 'Product ID',
    uniqueItems: true
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'T-shirt Teslo',
    description: 'Product title',
    uniqueItems: true
  })
  @Column('text', {
    unique: true,
  })
  title: string;

  @ApiProperty({
    example: 0,
    description: 'Product price',
  })
  @Column('float', {
    default: 0
  })
  price: number;

  @ApiProperty({
    example: 'Lorem Ipsum',
    description: 'Product description',
    default: null
  })
  @Column({
    type: 'text',
    nullable: true
  })
  description: string;
  
  @ApiProperty({
    example: 't_shirt_teslo',
    description: 'Product slug - for SEO routes',
    uniqueItems: true
  })
  @Column('text', {
    unique: true
  })
  slug: string;

  @ApiProperty({
    example: 10,
    description: 'Product stock',
    default: 0
  })
  @Column('int', {
    default: 0
  })
  stock: number;

  @ApiProperty({
    example: ['m','xl','xxl'],
    description: 'Product sizes'
  })
  @Column('text', {
    array: true
  })
  sizes: string[];

  @ApiProperty({
    example: 'women',
    description: 'Product gender'
  })
  @Column('text')
  gender: string;

  @ApiProperty()
  @Column('text', {
    array: true,
    default: []
  })
  tags: string[]

  @ApiProperty()
  @OneToMany(
    () => ProductImage,
    productImage => productImage.product,
    {
      cascade: true, 
      eager: true,
    }
  )
  images?: ProductImage[];

  @ManyToOne(
    () => User,
    ( user ) => user.product,
    { eager: true }
  )
  user: User

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title
    }
    
    this.slug = this.title
      .toLocaleLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '')
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.title
      .toLocaleLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '')
  }

}
