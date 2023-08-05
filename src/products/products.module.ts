import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  } from "./entities/products.entity";
import { product } from '../Users/entities/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([product])],
    providers: [
        //Aqui van los servicios
    ],

    controllers: [
        //Aqui van los controllers
    ],

})
export class productModule {}