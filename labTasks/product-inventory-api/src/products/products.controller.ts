import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { creatproductDTO } from './DTO/Create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  test(){
    console.log("test");
  }
  @Post()
   async createProduct(@Body() data:creatproductDTO){
    console.log(data);
    return await this.productsService.Create(data);
  }
}
