import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {JwtAuthGuard} from "../jwt-auth.guard";
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { Express } from 'express';
import * as path from 'path';
import * as fs from 'fs';

const articleStorage = multer.diskStorage({
  destination: './uploads/articles/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage: articleStorage }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { imageUrl: `/uploads/articles/${file.filename}` };
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const article = await this.articlesService.findOne(+id);
    if (article && article.images) {
      article.images.forEach(imageUrl => {
        // const filePath = path.join(__dirname, '..', '..', '..', 'uploads', 'articles', path.basename(imageUrl));
        const filePath = path.join(__dirname, '..', '..', imageUrl);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
          }
        });
      });
    }
    return this.articlesService.remove(+id);
  }
}
