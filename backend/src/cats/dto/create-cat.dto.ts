import {IsBoolean, IsDecimal, IsNumber, IsString} from "class-validator";

export class CreateCatDto {

    @IsString()
    name: string

    @IsString()
    description: string

    @IsNumber()
    age: number

    @IsString()
    sex: string

    @IsNumber()
    weigth?: number

    @IsBoolean()
    vaccinated?: boolean

    @IsBoolean()
    sterilized?: boolean
}
