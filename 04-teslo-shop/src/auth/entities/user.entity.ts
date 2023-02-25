import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true
  })
  email: string;
  
  @Column('text', {
    //Oculta la columna en las consultas a el API
    select: false
  })
  password: string;

  @Column('text')
  fullName: string;

  @Column('bool',{
    default: true
  })
  isActive: boolean;

  @Column('text', {
    array: true,
    default: ['user']
  })
  roles: string[];

  @BeforeInsert() 
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checksFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
