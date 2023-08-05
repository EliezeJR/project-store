import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class createproductDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;
    //los decoradores en el dto validan que la info que se agregue son ñlas correcta

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    description: string;


    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;



}