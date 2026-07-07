import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './Entities/Product.Entity';
import { result } from 'src/Result';
import { creatproductDTO } from './DTO/Create-product.dto';

@Injectable()
export class ProductsService { 
    constructor ( @InjectRepository(Products) private productRepo: Repository<Products> ){} 

   async Create( data:creatproductDTO) : Promise<result<creatproductDTO>>{

        const Result = new result<creatproductDTO>();
        try{
         const check = await this.productRepo.findOne({ where: { name: data.name } });

         if(check == null){
            const incertdata = await this.productRepo.save(data);
            if(incertdata){
            Result.message = "Product Added Succesfully";
            Result.data = data;
            return Result;
            }
            Result.message = "Product Adding Failed";
            Result.success = false;
            console.log("twaing")
            return Result;
            }
            Result.message = "Name already exist"; ;
            Result.data = data;
            Result.success = false;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
        }


        return Result ;

    }

}
