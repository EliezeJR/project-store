import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { users } from './entities/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([users])],
    providers: [
        //Aqui van los servicios
    ],

    controllers: [
        //Aqui van los controllers
    ],

})
export class usertModule;