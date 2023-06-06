import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity{
    @Field(()=>Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    name: string

    @Field(()=>Int)
    @Column()
    age: number

    // @Column()
    // address: string
}


