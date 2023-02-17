import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ProductImage {

  @PrimaryColumn()
  id: number;

  @Column('text')
  url: string;
}