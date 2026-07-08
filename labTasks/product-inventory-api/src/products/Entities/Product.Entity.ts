import { IsBoolean, IsOptional } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Products{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({nullable:true})
    description:string;
    
    @Column({type:'decimal' , precision: 10 , scale:2})
    price: number; 

    @Column({default:0})
    stock: number; 

    @Column()
    category: string;

    @Column({default:true})
    @IsBoolean()
    @IsOptional()
    IsActive?: boolean; 

    @CreateDateColumn()
    createdAt: Date; 
    
    @UpdateDateColumn()
    updatedAt: Date; 
}