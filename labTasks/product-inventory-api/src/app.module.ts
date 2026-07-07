import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    username:'postgres',
    password :'mubindb',
    port:5432,
    database:'testDB',
    autoLoadEntities:true,
    synchronize:true,

  }), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
