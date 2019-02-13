import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, MinLength, IsEmail } from 'class-validator'
import { Exclude } from 'class-transformer'

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(8)
  @Column('text', { nullable:false })
  @Exclude({toPlainOnly:true})
  password: string

  @IsEmail()
  @Column('text', { nullable: false })
  email: string

}