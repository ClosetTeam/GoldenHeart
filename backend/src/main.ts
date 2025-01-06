import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // Включение глобальной валидации
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Убирает неописанные поля из тела запроса
    forbidNonWhitelisted: true, // Ошибка, если есть лишние поля
    transform: true, // Автоматическая трансформация типов
  }));

  app.enableCors({
    origin: 'http://localhost:5173', // Разрешить доступ с фронтенда (React)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Если используете cookies
  });
  await app.listen(process.env.PORT ?? 3000, () => console.log(`Server running on http://localhost:${process.env.PORT ?? 3000}/api`));
}
bootstrap();
