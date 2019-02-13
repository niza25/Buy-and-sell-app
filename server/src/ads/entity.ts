import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, Length, IsEmail, IsInt } from 'class-validator'

@Entity()
export default class Ad extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Length(3, 15)
  @Column('text')
  title: string

  @IsInt()
  @Column('text')
  price: number

  @IsString()
  @Length(15, 250)
  @Column('text')
  description: string

  @IsString()
  @Column('text')
  photoUrl: string

  @IsEmail()
  @Column('text')
  email: string

  @IsInt()
  @Column('text')
  phone: number
}