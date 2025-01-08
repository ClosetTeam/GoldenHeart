import {IsBoolean, IsNumber, IsOptional, IsString} from "class-validator";

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
    @IsOptional()
    weight?: number

    @IsBoolean()
    @IsOptional()
    vaccinated?: boolean

    @IsBoolean()
    @IsOptional()
    sterilized?: boolean
}
