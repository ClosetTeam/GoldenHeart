import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class CatsService {

  constructor(private readonly prisma: PrismaService) {}

  create(createCatDto: CreateCatDto) {
    return this.prisma.cat.create({
      data: createCatDto,
    })
  }

  findAll() {
    return this.prisma.cat.findMany();
  }

  findOne(id: number) {
    return this.prisma.cat.findUnique({ where: { id } });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.prisma.cat.update({
      where: {id: id},
      data: updateCatDto,
    })
  }

  remove(id: number) {
    return this.prisma.cat.delete({where: {id}});
  }
}
