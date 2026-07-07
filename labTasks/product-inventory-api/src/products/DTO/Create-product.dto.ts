import { Type } from "class-transformer";
import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

 export class creatproductDTO{

    @IsString()
    @IsNotEmpty()
    name!:string;
    
    @IsString()
    @IsOptional()
    description!:string;

    @IsNumber()
    @IsPositive()
    @Type(()=> Number)
    price!:number;

    @IsInt()
    @IsOptional()
    @Min(0)
    @Type(()=> Number)
    stock!:number;

    @IsString()
    @IsNotEmpty()
    category!:string

    @IsBoolean()
    @IsOptional()
    IsActive?:boolean

 }