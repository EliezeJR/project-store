import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

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
    password: string;


    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    sexo: string;

    
    @IsBoolean()
    @IsNotEmpty()
    @MaxLength(100)
    active: true;




}