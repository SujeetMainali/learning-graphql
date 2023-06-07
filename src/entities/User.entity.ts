import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinColumn } from "typeorm";
import { UserAccountDetails } from "./userAccount.entity";


@Entity()
export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id: string


    @Column()
    name: string

    @Column()
    age: number

    // @Column()
    // address: string

    @OneToMany(()=>UserAccountDetails, (userAccountDetails)=>userAccountDetails.user)
    userAccountDetails: UserAccountDetails[]
}


