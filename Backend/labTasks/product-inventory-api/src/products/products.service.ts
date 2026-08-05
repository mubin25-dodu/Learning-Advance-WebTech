import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Products } from './Entities/Product.Entity';
import { result } from 'src/Result';
import { creatproductDTO } from './DTO/Create-product.dto';
import { partialUpdateProductDTO } from './DTO/partial-update-product.dto';

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
            Result.success = false;

        }


        return Result ;

    }

    async Findall() : Promise<result<creatproductDTO[]>>{

        const Result = new result<creatproductDTO[]>();
        try{
         const check = await this.productRepo.find();

         if(check.length === 0){
            Result.message = "No products found";
            return Result;
            }
            Result.message = `${check.length} products found` ;
            Result.data = check;
            Result.success = true;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }

    async FindOne(id:number) : Promise<result<creatproductDTO>>{

        const Result = new result<creatproductDTO>();
        try{
         const check = await this.productRepo.findOne({ where:{id:id}});

         if(check == null){
            Result.message = "No products found";
            return Result;
            }
            Result.message = `Product found`;
            Result.data = check;
            Result.success = true;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }

    async Update(id:number , data:partialUpdateProductDTO) : Promise<result<creatproductDTO>>{

        const Result = new result<creatproductDTO>();
        try{
         const check = await this.productRepo.findOne({ where:{id:id}});

         if(check == null){
            Result.message = "No products found";
            Result.success = false;
            return Result;
            }
        
        const updatedb = await this.productRepo.update(id,data);
        if(updatedb.affected && updatedb.affected == 1){
            const updatedProduct = await this.productRepo.findOne({ where:{id:id}});
            Result.message = `Product Updated Succesfully`;
            Result.data = updatedProduct ?? check;
            return  Result;
        }
            Result.message = `Product Update Failed`;
            Result.data = check;
            Result.success = false;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }

    async Replace(id:number , data:partialUpdateProductDTO) : Promise<result<creatproductDTO>>{

        const Result = new result<creatproductDTO>();
        try{
         const check = await this.productRepo.findOne({ where:{id:id}});

         if(check == null){
            Result.message = "No products found";
            Result.success = false;
            return Result;
            }
        
        const updatedb = await this.productRepo.update(id,data);
        if(updatedb.affected && updatedb.affected == 1){
            Result.message = `Product Updated Succesfully`;
            Result.data = check;
            return  Result;  
        }
            Result.message = `Product Update Failed`;
            Result.data = check;
            Result.success = false;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }

     async Remove(id:number ) : Promise<result<creatproductDTO>>{

        const Result = new result<creatproductDTO>();
        try{
         const check = await this.productRepo.findOne({ where:{id:id}});

         if(check == null){
            Result.message = "No products found";
            Result.success = false;
            return Result;
            }
        
        const remove = await this.productRepo.delete(id);
        if(remove.affected && remove.affected == 1){
            Result.message = `Product deleted Succesfully`;
            Result.data = check;
            return  Result;  
        }
            Result.message = `Product delete Failed`;
            Result.data = check;
            Result.success = false;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }
    
    async search(term:string ) : Promise<result<creatproductDTO[]>>{

        const Result = new result<creatproductDTO[]>();
        console.log(term);
        try{
         const check = await this.productRepo.find({ where:{name: Like(`%${term}%`)}});

         if(check.length == null){
            Result.message = "No products found";
            Result.success = false;
            return Result;
            }
            Result.message = `${check.length} Product found`;
            Result.data = check;
            Result.success = false;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }
    
    async toggleActive(id:number ) : Promise<result<creatproductDTO>>{

        const Result = new result<creatproductDTO>();
        try{
         const check = await this.productRepo.findOneBy({id});

         if(check == null){
            Result.message = "No products found";
            Result.success = false;
            return Result;
            }
            check.IsActive = !check.IsActive; // toggled the button 

            Result.message = `Product Toggled to ${check.IsActive}`;
            
            this.productRepo.save(check);
            Result.data = check;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }
    async bycategory(cat:string) : Promise<result<creatproductDTO[]>>{

        const Result = new result<creatproductDTO[]>();
        try{
         const check = await this.productRepo.find({where:{category:cat}});

         if(check.length === 0){
            Result.message = "No products found";
            return Result;
            }
            Result.message = `${check.length} products found` ;
            Result.data = check;
            Result.success = true;
            return  Result;

        }catch (e: unknown) {
            Result.message = e instanceof Error ? e.message : String(e);
            Result.success = false;
        }
        return Result ;

    }

    
}
