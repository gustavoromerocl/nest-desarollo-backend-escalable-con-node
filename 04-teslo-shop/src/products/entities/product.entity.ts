// https://gist.github.com/Klerith/1fb1b9f758bb0c5b2253dfc94f09e1b6
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text', {
    unique: true,
  })
  title: string
}
