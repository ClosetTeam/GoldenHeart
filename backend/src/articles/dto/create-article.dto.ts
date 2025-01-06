import {ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateArticleDto {
    @IsString()
    title: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    text: string

    @IsArray()
    @ArrayMinSize(1) // Минимум 1 элемент
    @ArrayMaxSize(20) // Максимум 10 элементов (настраиваемое значение)
    @IsString({ each: true }) // Каждый элемент массива должен быть строкой
    images: string[]
}
