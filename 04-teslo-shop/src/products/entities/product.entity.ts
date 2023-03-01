// https://gist.github.com/Klerith/1fb1b9f758bb0c5b2253dfc94f09e1b6
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/entities/user.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from './product-image.entity';

@Entity({ name: 'products'})
export class Product {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column('text', {
    unique: true,
  })
  title: string;

  @ApiProperty()
  @Column('float', {
    default: 0
  })
  price: number;

  @ApiProperty()
  @Column({
    type: 'text',
    nullable: true
  })
  description: string;

  @ApiProperty()
  @Column('text', {
    unique: true
  })
  slug: string;

  @ApiProperty()
  @Column('int', {
    default: 0
  })
  stock: number;

  @ApiProperty()
  @Column('text', {
    array: true
  })
  sizes: string[];

  @ApiProperty()
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
